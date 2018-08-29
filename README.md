# Vue-countdown-timer Component

<p>
  <a href="https://circleci.com/gh/TriDiamond/vue-photoswipe/tree/master">
    <img src="https://img.shields.io/circleci/project/github/TriDiamond/vue-photoswipe.svg" alt="Build Status">
  </a>
  <a href="https://github.com/TriDiamond/vue-photoswipe/stargazers">
    <img src="https://img.shields.io/github/stars/TriDiamond/vue-photoswipe.svg" alt="Github starts">
  </a>
  <a>
    <img src="https://img.shields.io/github/license/TriDiamond/vue-photoswipe.svg" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/vue-photoswipes">
    <img src="https://img.shields.io/npm/dt/vue-photoswipes.svg" alt="Npm downloads">
  </a>
</p>

> 一 Vue 2 countdown and timer component

## Installation

``` bash
npm i vuejs-countdown-timer -S
```

## Usage

### Support

| Supported Package | Version |
|-------------------|---------|
| Vue               | 2.5+    |


### Install component

Javascript

``` javascript
// global register
import VueCountdownTimer from 'vue-countdown-timer'
Vue.use(VueCountdownTimer)

// defalut install
Vue.use(VuePhotoswipe)

// or for a single instance
import VueCountdownTimer from 'vue-countdown-timer'

components: {
    VueCountdownTimer
},
methods: {
  countDownS_cb: function (x) {
    console.log(x)
  },
  countDownE_cb: function (x) {
    console.log(x)
  }
}
```

Vue template

```vue
<vue-countdown-timer v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)" :currentTime="1481450106" :startTime="1481450110" :endTime="1481450115" :tipText="'距离开始文字1'" :tipTextEnd="'距离结束文字1'" :endText="'结束自定义文字2'" :dayTxt="'天'" :hourTxt="'小时'" :minutesTxt="'分钟'" :secondsTxt="'秒'"></vue-countdown-timer>
```

### Props

1. **currentTime** - 当前时间戳,如果不传,默认获取用户本地的时间(建议传服务器的当前时间) 
    - **type**: Number
    - **required** : false
    - **default** : ( new Date() ).getTime()
2. **startTime** - 开始时间戳
    - **type**: Number
    - **required** : true
3. **endTime** - 结束时间戳
    - **type**: Number
    - **required** : true
4. **tipText** - 开始倒计时之前的提示文字
    - **type**: String
    - **required** : false
    - **default** : 距离开始
5. **tipTextEnd** - 开始倒计时之后的提示文字
    - **type**: String
    - **required** : false
    - **default** : 距离结束
6. **endText** - 倒计时结束之后的提示文字
    - **type**: String
    - **required** : false
    - **default** : 已结束
7. **dayTxt** - 自定义显示的天数文字
    - **type**: String
    - **required** : false
    - **default** : :
8. **hourTxt** - 自定义显示的小时文字
    - **type**: String
    - **required** : false
    - **default** : :
9. **secondsTxt** - 自定义显示的分钟文字
    - **type**: String
    - **required** : false
    - **default** : :
10. **secondsFixed** - 自定义显示的秒数文字
    - **type**: String
    - **required** : false
    - **default** : :
    
### Events
1. **start_callback** - 开始倒计时结束之后的回调方法
    - **type**: Function
    - **required** : false
2. **end_callback** - 活动倒计时结束之后的回调方法
    - **type**: Function
    - **required** : false
    
# Liscense
MIT License

Copyright (c) 2018 TriDiamond
