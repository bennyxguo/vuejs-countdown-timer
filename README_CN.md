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

> 一 Vue 2 活动倒计时组件

[📙English Doc](https://github.com/TriDiamond/vuejs-countdown-timer/blob/master/README.md)

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

// 默认引入
Vue.use(VuePhotoswipe)

// 按需引入
import VueCountdownTimer from 'vuejs-countdown-timer'

components: {
    VueCountdownTimer
},
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
  :current-time="1481450106"
  :start-time="1481450110"
  :end-time="1481450115"
  :tip-text="'距离开始:'"
  :tip-text-end="'距离结束:'"
  :end-text="'活动已结束'"
  :day-txt="'天'"
  :hour-txt="'小时'"
  :minutes-txt="'分钟'"
  :seconds-txt="'秒'">
</vue-countdown-timer>
```

### 属性 (props)

**current-time** - 当前时间戳,如果不传,默认获取用户本地的时间(建议传服务器的当前时间) 
- `type`: Number
- `required` : false
- `default`: `new Date().getTime()`

**start-time** - 开始时间戳
- `type`: Number
- `required` : true

**end-time** - 结束时间戳
- `type`: Number
- `required` : true

**tip-text** - 开始倒计时之前的提示文字
- `type`: String
- `required` : false
- `default` : '距离开始'

**tip-text-end** - 开始倒计时之后的提示文字
- `type`: String
- `required` : false
- `default` : '距离结束'
    
**end-text** - 倒计时结束之后的提示文字
- `type`: String
- `required` : false
- `default` : '已结束'

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
