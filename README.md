# Vue-countdown-timer Component

<p>
  <a href="https://circleci.com/gh/TriDiamond/vuejs-countdown-timer/tree/master">
    <img src="https://img.shields.io/circleci/project/github/TriDiamond/vuejs-countdown-timer.svg" alt="Build Status">
  </a>
  <a href="https://github.com/TriDiamond/vuejs-countdown-timer/stargazers">
    <img src="https://img.shields.io/github/stars/TriDiamond/vuejs-countdown-timer.svg" alt="Github starts">
  </a>
  <a>
    <img src="https://img.shields.io/github/license/TriDiamond/vuejs-countdown-timer.svg" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/vue-photoswipes">
    <img src="https://img.shields.io/npm/dt/vuejs-countdown-timer.svg" alt="Npm downloads">
  </a>
</p>

> 一 Vue 2 countdown and timer component

[📙中文文档](https://github.com/TriDiamond/vuejs-countdown-timer/blob/master/README_CN.md)

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
import VueCountdownTimer from 'vuejs-countdown-timer'
Vue.use(VueCountdownTimer)

// defalut install
Vue.use(VuePhotoswipe)

// or for a single instance
import VueCountdownTimer from 'vuejs-countdown-timer'

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
<vue-countdown-timer
  @start_callback="startCallBack('event started')"
  @end_callback="endCallBack('event ended')"
  :current-time="1481450106"
  :start-time="1481450110"
  :end-time="1481450115"
  :tip-text="'Until start'"
  :tip-text-end="'Until end'"
  :end-text="'Event ended'"
  :day-txt="'days'"
  :hour-txt="'hours'"
  :minutes-txt="'minutes'"
  :seconds-txt="'seconds'">
</vue-countdown-timer>
```

### Props

**current-time**
- `type`: Number
- `required` : false
- `default`: `new Date().getTime()`

**start-time**
- `type`: Number
- `required` : true

**end-time**
- `type`: Number
- `required` : true

**tip-text**
- `type`: String
- `required` : false
- `default` : '距离开始'

**tip-text-end**
- `type`: String
- `required` : false
- `default` : '距离结束'
    
**end-text**
- `type`: String
- `required` : false
- `default` : '已结束'

**day-txt**
- `type`: String
- `required` : false
- `default` : ':'
    
**hour-txt**
- `type`: String
- `required` : false
- `default` : ':'

**seconds-txt**
- `type`: String
- `required` : false
- `default` : ':'

**seconds-fixed**
- `type`: String
- `required` : false
- `default` : ':'
    
### Events
**start_callback** - Event started callback
- `type`: Function
- `required` : false

**end_callback** - Event ended callback
- `type`: Function
- `required` : false
    
# Liscense
MIT License

Copyright (c) 2018 TriDiamond
