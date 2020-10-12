import CountdownTimerComponent from './countdownTimer.vue';

const MILLISECONDS_SECOND = 1000;
const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND;
const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE;
const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR;

const VueCountdownTimer = {
  install(Vue, options) {
    Vue.component('VueCountdownTimer', {
      mixins: [CountdownTimerComponent],
      props: {
        startLabel: {
          type: String,
          default: '',
        },
        endLabel: {
          type: String,
          default: '',
        },
        labelPosition: {
          type: String,
          default: 'begin',
        },
        interval: {
          type: Number,
          default: function() {
            return 1000;
          },
        },
        leadingZero: {
          type: Boolean,
          default: function() {
            return true;
          },
        },
        showZero: {
          type: Boolean,
          default: function() {
            return true;
          },
        },
        startTime: {
          type: Number | String,
        },
        endTime: {
          type: Number | String,
        },
        endText: {
          type: String,
          default: function() {
            return 'Event ended!';
          },
        },
        dayTxt: {
          type: String | null,
          default: function() {
            return ':';
          },
        },
        hourTxt: {
          type: String | null,
          default: function() {
            return ':';
          },
        },
        minutesTxt: {
          type: String | null,
          default: function() {
            return ':';
          },
        },
        secondsTxt: {
          type: String,
          default: function() {
            return ':';
          },
        },
        secondsFixed: {
          type: Boolean,
          default: function() {
            return false;
          },
        },
      },
      data() {
        return {
          tips: true,
          current: '',
          count: 0, // current countdown remaining ms
          counting: false, // countdown state
          showDay: true,
          showHour: true,
          showMinute: true,
        };
      },
      computed: {
        /**
         * Remaining days.
         * @returns {number}
         */
        days() {
          return this.preprocess(Math.floor(this.count / MILLISECONDS_DAY));
        },

        /**
         * Remaining hours.
         * @returns {number}
         */
        hours() {
          let hours = Math.floor((this.count % MILLISECONDS_DAY) / MILLISECONDS_HOUR);
          // If disabled day display convert all days into hours
          if (!this.dayTxt) {
            hours = hours + Math.floor(this.count / MILLISECONDS_DAY) * 24;
          }
          return this.preprocess(hours);
        },

        /**
         * Remaining minutes.
         * @returns {number}
         */
        minutes() {
          let minutes = Math.floor((this.count % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE);

          if (!this.hourTxt) {
            let days = Math.floor(this.count / MILLISECONDS_DAY);
            let hours = Math.floor((this.count % MILLISECONDS_DAY) / MILLISECONDS_HOUR);
            // Disabled hours but shows days
            // Convert all hours into minutes
            minutes = minutes + hours * 60;
            // Disabled both hours and shows
            // Convert all days and hours into minutes
            if (!this.dayTxt) {
              minutes = minutes + days * 24 * 60;
            }
          }

          return this.preprocess(minutes);
        },

        /**
         * Remaining seconds.
         * @returns {number}
         */
        seconds() {
          const { interval } = this;
          let seconds = (this.count % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND;

          if (!this.minutesTxt) {
            let minutes = Math.floor((this.count % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE);
            seconds = seconds + minutes * 60;
            if (!this.hourTxt) {
              let hours = Math.floor((this.count % MILLISECONDS_DAY) / MILLISECONDS_HOUR);
              seconds = seconds + hours * 60 * 60;
              if (!this.dayTxt) {
                let days = Math.floor(this.count / MILLISECONDS_DAY);
                seconds = seconds + days * 24 * 60 * 60;
              }
            }
          }

          if (interval < 10) {
            return this.preprocess(parseFloat(seconds.toFixed(3)));
          } else if (interval >= 10 && interval < 100) {
            return this.preprocess(parseFloat(seconds.toFixed(2)));
          } else if (interval >= 100 && interval < 1000) {
            return this.preprocess(parseFloat(seconds.toFixed(1)));
          }

          return this.preprocess(Math.floor(seconds));
        },

        /**
         * current event status
         * @returns {number}
         */
        status() {
          // Current time is greater than event end time
          if (this.current > this.getTime(this.endTime)) {
            return 0;
          }
          // Current time is smaller than event start time
          if (this.current < this.getTime(this.startTime)) {
            return 1;
          }
          // Event end time is greater and smaller than current time
          if (
            this.current >= this.getTime(this.startTime) &&
            this.current < this.getTime(this.endTime)
          ) {
            return 2;
          }
        },
      },
      methods: {
        /**
         * Initial countdown
         */
        init() {
          if (!this.dayTxt) {
            this.showDay = false;
          }

          if (!this.hourTxt) {
            this.showHour = false;
          }

          if (!this.minutesTxt) {
            this.showMinute = false;
          }
          // Formatting time - 格式化时间格式
          this.stop();
          this.$set(this, 'current', new Date().getTime());
          const startCount = this.getTime(this.startTime) - this.current;
          const endCount = this.getTime(this.endTime) - this.current;

          const { status } = this;

          if (status === 0) {
            this.count = 0;
            this.end_message();
            return;
          }

          if (status === 1) {
            this.$set(this, 'tips', true);
            this.count = Math.max(0, startCount);
          }

          if (status === 2) {
            this.$set(this, 'tips', false);
            this.$emit('start_callback', status);
            this.count = Math.max(0, endCount);
          }

          if (this.count === 0) {
            this.end_message();
            return;
          }

          this.$nextTick(() => {
            this.start();
          });
        },

        /**
         * Start countdown
         */
        start() {
          if (this.counting) {
            return;
          }

          this.counting = true;
          this.next();
        },

        /**
         * Next count down queue
         */
        next() {
          this.timeout = setTimeout(this.step.bind(this), this.interval);
        },

        /**
         * Calculate remaining milliseconds
         */
        step() {
          if (!this.counting) {
            return;
          }

          if (this.count > this.interval) {
            // Update 00 display status
            if (!this.showZero) {
              if (Number(this.days) === 0) {
                this.showDay = false;
              }
              if (!this.showDay && Number(this.hours) === 0) {
                this.showHour = false;
              }
              if (!this.showHour && Number(this.minutes) === 0) {
                this.showMinute = false;
              }
            }

            this.count -= this.interval;
            this.next();
          } else {
            this.count = 0;
            this.init();
          }
        },

        /**
         * Stop the countdown
         */
        stop() {
          this.counting = false;
          clearTimeout(this.timeout);
          this.timeout = undefined;
        },

        start_message() {
          this.$set(this, 'tips', false);
          this.$emit('start_callback', this.status);
        },

        end_message() {
          if (this.currentTime <= 0 || this.currentTime < this.getTime(this.endTime)) {
            return;
          }
          this.$emit('end_callback', this.status);
        },

        /**
         * Get time in milliseconds
         * @param time
         * @returns {Number}
         */
        getTime(time) {
          if (typeof time === 'number') {
            if (time.toString().length === 10) {
              time = time * 1000;
            }
          }

          // if we get a non-standard time string like 'Y-m-d H:i', convert it to Y/m/d H:i
          // This fixed the Safari browser compatibility issue #12
          // @see https://github.com/TriDiamond/vuejs-countdown-timer/issues/12
          if (String(time).match(/[\d]+-[\d]+-[\d]+/g)) time = time.replace(/-/g, '/');

          return new Date(time).getTime();
        },

        /**
         * Filling zeros
         * @returns {string}
         */
        preprocess(value) {
          return this.leadingZero && value < 10 ? `0${value}` : value;
        },

        /**
         * Update the count.
         * @private
         */
        update() {
          if (this.counting) {
            // Formatting time
            this.$set(this, 'current', new Date().getTime());
            const startCount = this.getTime(this.startTime) - this.current;
            const endCount = this.getTime(this.endTime) - this.current;

            const { status } = this;

            if (status === 0) {
              this.count = 0;
              this.stop();
              this.end_message();
              return;
            }

            if (status === 1) {
              this.$set(this, 'tips', true);
              this.count = Math.max(0, startCount);
            }

            if (status === 2) {
              this.$set(this, 'tips', false);
              this.$emit('start_callback', this.status);
              this.count = Math.max(0, endCount);
            }
          }
        },
      },

      watch: {
        startTime() {
          this.init();
        },

        endTime() {
          this.init();
        },
      },

      created() {
        this.init();
      },

      mounted() {
        window.addEventListener('focus', (this.onFocus = this.update.bind(this)));
      },

      beforeDestroy() {
        window.removeEventListener('focus', this.onFocus);
        clearTimeout(this.timeout);
      },
    });
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCountdownTimer);
}

export default VueCountdownTimer;
