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
  <a>
    <img src="https://img.shields.io/npm/v/vuejs-countdown-timer.svg" alt="Npm version">
  </a>
</p>

> 一 Vue 2 活动倒计时组件

[Demo](https://tridiamond.github.io/vuejs-countdown-timer/)
[📙English Doc](https://github.com/TriDiamond/vuejs-countdown-timer/blob/master/README.md)
[📙更新日志](https://github.com/TriDiamond/vuejs-countdown-timer/blob/master/CHANGELOG.md)

## 安装

``` bash
npm i vuejs-countdown-timer -S
```

## 使用

### Support

| 支持包             | 版本    |
|-------------------|---------|
| Vue               | 2.5+    |


### 引入组件

Javascript

``` javascript
// 全局引入
import VueCountdownTimer from 'vuejs-countdown-timer'
Vue.use(VueCountdownTimer)

methods: {
  // 活动开始回调方法
  startCallBack: function (msg) {
    console.log(msg)
  },
  // 活动结束回调方法
  endCallBack: function (msg) {
    console.log(msg)
  }
}
```

Vue template

```vue
<vue-countdown-timer
  @start_callback="startCallBack('活动开始')"
  @end_callback="endCallBack('活动结束')"
  :start-time="1481450110"
  :end-time="'2018-09-04 00:00:00'"
  :interval="1000"
  :start-label="'距离开始:'"
  :end-label="'距离结束:'"
  label-position="begin"
  :end-text="'活动已结束'"
  :day-txt="'天'"
  :hour-txt="'小时'"
  :minutes-txt="'分钟'"
  :seconds-txt="'秒'">
</vue-countdown-timer>
```

### 属性 (props)

**start-time** - 开始时间戳
- `type`: Number|String
- `required` : true

**end-time** - 结束时间戳
- `type`: Number|String
- `required` : true

**interval** - 倒计时速度 - 用于setTimer的interval（使用100 会有毫秒倒计）
- `type`: Number
- `required` : false
- `default` : 1000

**start-label** - 开始倒计时之前的提示文字
- `type`: String
- `required` : false
- `default` : ''

**end-label** - 开始倒计时之后的提示文字
- `type`: String
- `required` : false
- `default` : ''

**label-position** - 倒计时提示位置 (begin 在倒计时前面 / end 在倒计时后面)
- `type`: String
- `required` : false
- `default` : 'begin'
    
**end-text** - 倒计时结束之后的提示文字
- `type`: String
- `required` : false
- `default` : 'Event ended!'

**day-txt** - 自定义显示的天数文字
- `type`: String
- `required` : false
- `default` : ':'
    
**hour-txt** - 自定义显示的小时文字
- `type`: String
- `required` : false
- `default` : ':'

**seconds-txt** - 自定义显示的分钟文字
- `type`: String
- `required` : false
- `default` : ':'

**seconds-fixed** - 自定义显示的秒数文字
- `type`: String
- `required` : false
- `default` : ':'
    
### 事件
**start_callback** - 开始倒计时结束之后的回调方法
- `type`: Function
- `required` : false

**end_callback** - 活动倒计时结束之后的回调方法
- `type`: Function
- `required` : false

# Liscense
MIT License

Copyright (c) 2018 TriDiamond
