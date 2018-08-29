import CountdownTimerComponent from './countdownTimer.vue'

const VueCountdownTimer = {
  install(Vue, options) {
    Vue.component('VueCountdownTimer', {
      mixins: [CountdownTimerComponent],
      props: {
        tipText: {
          type: String,
          default: function () {
            return '距离开始'
          }
        },
        tipTextEnd: {
          type: String,
          default: function () {
            return '距离结束'
          }
        },
        id: {
          type: String,
          default: function () {
            return '1'
          }
        },
        currentTime: {
          type: Number,
          default: function () {
            return new Date().getTime()
          }
        },
        startTime: {
          type: Number
        },
        endTime: {
          type: Number
        },
        endText: {
          type: String,
          default: function () {
            return '已结束'
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
          tipShow: true,
          msTime: { // 倒计时数值
            show: false, // 倒计时状态
            day: '', // 天
            hour: '', // 小时
            minutes: '', // 分钟
            seconds: ''	// 秒
          },
          star: '',	// 活动开始时间
          end: '', // 活动结束时间
          current: '', // 当前时间
        }
      },
      watch: {
        currentTime: function (val, oldval) {
          this.gogogo();
        }
      },
      mounted () {
        this.gogogo();
      },
      methods: {
        gogogo: function () {
          //判断是秒还是毫秒
          if (this.startTime.toString().length === 10) {
            this.star = this.startTime * 1000
          } else {
            this.star = this.startTime
          }

          if (this.endTime.toString().length === 10) {
            this.end = this.endTime * 1000
          } else {
            this.end = this.endTime
          }

          if (this.currentTime.toString().length === 10) {
            this.current = this.currentTime * 1000
          } else {
            this.current = this.currentTime
          }

          if (this.end < this.current) {
            /**
             * 结束时间小于当前时间 活动已结束
             */
            this.msTime.show = false;
            this.end_message();
          }
          else if (this.current < this.star) {
            /**
             * 当前时间小于开始时间 活动尚未开始
             */
            this.$set(this, 'tipShow', true);
            setTimeout(() => {
              this.runTime(this.star, this.current, this.start_message);
            }, 1);
          }
          else if (this.end > this.current && this.star < this.current || this.star == this.current) {
            /**
             * 结束时间大于当前并且开始时间小于当前时间，执行活动开始倒计时
             */
            this.$set(this, 'tipShow', false);
            this.msTime.show = true;
            this.$emit('start_callback', this.msTime.show);
            setTimeout(() => {
              this.runTime(this.end, this.star, this.end_message, true)
            }, 1);
          }
        },
        runTime (startTime, endTime, callFun, type) {
          let msTime = this.msTime;
          let timeDistance = startTime - endTime;
          if (timeDistance > 0) {
            this.msTime.show = true;
            msTime.day = Math.floor(timeDistance / 86400000);
            timeDistance -= msTime.day * 86400000;
            msTime.hour = Math.floor(timeDistance / 3600000);
            timeDistance -= msTime.hour * 3600000;
            msTime.minutes = Math.floor(timeDistance / 60000);
            timeDistance -= msTime.minutes * 60000;
            //是否开启秒表倒计,未完成
//                    this.secondsFixed ? msTime.seconds = new Number(timeDistance / 1000).toFixed(2) : msTime.seconds = Math.floor( timeDistance / 1000 ).toFixed(0);
            msTime.seconds = Math.floor(timeDistance / 1000).toFixed(0);
            timeDistance -= msTime.seconds * 1000;

            if (msTime.hour < 10) {
              msTime.hour = "0" + msTime.hour;
            }
            if (msTime.minutes < 10) {
              msTime.minutes = "0" + msTime.minutes;
            }
            if (msTime.seconds < 10) {
              msTime.seconds = "0" + msTime.seconds;
            }
            let _s = Date.now();
            let _e = Date.now();
            let diffPerFunc = _e - _s;
            setTimeout(() => {
              if (type) {
                this.runTime(this.end, endTime += 1000, callFun, true);
              } else {
                this.runTime(this.star, endTime += 1000, callFun);
              }
            }, 1000 - diffPerFunc)
          }
          else {
            callFun();
          }
        },
        start_message () {
          this.$set(this, 'tipShow', false);
          this.$emit('start_callback', this.msTime.show);
          setTimeout(() => {
            this.runTime(this.end, this.star, this.end_message, true)
          }, 1);
        },
        end_message(){
          this.msTime.show = false;
          if (this.currentTime <= 0) {
            return;
          }
          this.$emit('end_callback', this.msTime.show);
        }
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCountdownTimer)
}

export default VueCountdownTimer
