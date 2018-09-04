import CountdownTimerComponent from './countdownTimer.vue'

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
          default: ''
        },
        endLabel: {
          type: String,
          default: ''
        },
        labelPosition: {
          type: String,
          default: 'begin'
        },
        interval: {
          type: Number,
          default: function () {
            return 1000
          }
        },
        leadingZero: {
          type: Boolean,
          default: function () {
            return true
          }
        },
        startTime: {
          type: Number|String
        },
        endTime: {
          type: Number|String
        },
        endText: {
          type: String,
          default: function () {
            return 'Event ended!'
          }
        },
        dayTxt: {
          type: String,
          default: function () {
            return ':'
          }
        },
        hourTxt: {
          type: String,
          default: function () {
            return ':'
          }
        },
        minutesTxt: {
          type: String,
          default: function () {
            return ':'
          }
        },
        secondsTxt: {
          type: String,
          default: function () {
            return ':'
          }
        },
        secondsFixed: {
          type: Boolean,
          default: function () {
            return false
          }
        }
      },
      data() {
        return {
          tips: true,
          current: '',
          count: 0, // 现在倒计时剩余毫秒数
          counting: false // 是否已经在倒计
        }
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
          return this.preprocess(Math.floor((this.count % MILLISECONDS_DAY) / MILLISECONDS_HOUR));
        },

        /**
         * Remaining minutes.
         * @returns {number}
         */
        minutes() {
          return this.preprocess(Math.floor((this.count % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE));
        },

        /**
         * Remaining seconds.
         * @returns {number}
         */
        seconds() {
          const { interval } = this;
          const seconds = (this.count % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND;

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
         * Total remaining days.
         * @returns {number}
         */
        totalDays() {
          return this.preprocess(this.days);
        },

        /**
         * Total remaining hours.
         * @returns {number}
         */
        totalHours() {
          return this.preprocess(Math.floor(this.count / MILLISECONDS_HOUR));
        },

        /**
         * Total remaining minutes.
         * @returns {number}
         */
        totalMinutes() {
          return this.preprocess(Math.floor(this.count / MILLISECONDS_MINUTE));
        },

        /**
         * Total remaining seconds.
         * @returns {number}
         */
        totalSeconds() {
          const { interval } = this;
          const seconds = this.count / MILLISECONDS_SECOND;

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
         * Current time in milliseconds
         * 当前时间
         * @returns {number}
         */
        time() {
          return new Date().getTime();
        },

        /**
         * 当前活动状态
         * @returns {number}
         */
        status() {
          // 当前时间已经大于结束时间 - 活动已结束
          if (this.current > new Date(this.endTime).getTime()) {
            return 0;
          }

          // 当前时间小于开始时间 活动尚未开始
          if (this.current < new Date(this.startTime).getTime()) {
            return 1;
          }

          // 结束时间大于当前并且开始时间小于当前时间，执行活动开始倒计时
          if (this.current >= new Date(this.startTime).getTime() && this.current < new Date(this.endTime).getTime()) {
            return 2;
          }
        },

      },
      methods: {
        /**
         * Initial countdown
         * 初始化倒计时
         */
        init() {
          // Formating time - 格式化时间格式
          this.stop();
          this.$set(this, 'current', new Date().getTime())
          const startCount = new Date(this.startTime).getTime() - this.current;
          const endCount = new Date(this.endTime).getTime() - this.current;

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
         * 开始倒计时
         */
        start () {
          if (this.counting) {
            return;
          }

          this.counting = true;
          this.next();
        },

        /**
         * Next count down queue
         * 进入下一个倒计时队列
         */
        next() {
          this.timeout = setTimeout(this.step.bind(this), this.interval);
        },

        /**
         * Calculate remaining milliseconds
         * 重新计算剩余时间 - 毫秒
         */
        step() {
          if (!this.counting) {
            return;
          }

          if (this.count > this.interval) {
            this.count -= this.interval;
            this.next();
          } else {
            this.count = 0;
            this.init();
          }
        },

        /**
         * Stop the countdown
         * 停止倒计时
         */
        stop() {
          this.counting = false;
          clearTimeout(this.timeout);
          this.timeout = undefined;
        },

        start_message () {
          this.$set(this, 'tips', false);
          this.$emit('start_callback', this.status);
        },

        end_message(){
          if (this.currentTime <= 0) {
            return;
          }
          this.$emit('end_callback', this.status);
        },

        formatTime(time) {
          if (typeof time === 'number') {
            if (time.toString().length === 10) {
              return time * 1000
            } else {
              return time
            }
          } else {
            return time
          }
        },

        /**
         * Filling zeros
         * @returns {string}
         */
        preprocess(value) {
          return (this.leadingZero && value < 10 ? `0${value}` : value);
        },

        /**
         * Update the count.
         * @private
         */
        update() {
          if (this.counting) {
            // Formating time - 格式化时间格式
            this.$set(this, 'current', this.time)
            const startCount = new Date(this.startTime).getTime() - this.current;
            const endCount = new Date(this.endTime).getTime() - this.current;

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
        }
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
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCountdownTimer)
}

export default VueCountdownTimer
