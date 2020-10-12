<p align="center"><a href="https://tridiamond.tech" target="_blank" rel="noopener noreferrer"><img width="100" src="https://img-blog.csdnimg.cn/20200930013332450.png" alt="TriDiamond logo"></a></p>

<h1 align="center">Vue-countdown-timer Component</h1>

<div align="center">
  <p>Vue 2 活动倒计时组件 <br>
  —— Made with ❤️ by <a href="https://github.com/TriDiamond">TriDiamond</a></p>

  <p align="center">
    <a href="https://circleci.com/gh/TriDiamond/vuejs-countdown-timer/tree/master">
      <img src="https://img.shields.io/circleci/project/github/TriDiamond/vuejs-countdown-timer.svg" alt="Build Status">
    </a>
    <a href="https://github.com/TriDiamond/vuejs-countdown-timer/stargazers">
      <img src="https://img.shields.io/github/stars/TriDiamond/vuejs-countdown-timer.svg" alt="Github starts">
    </a>
    <a>
      <img src="https://img.shields.io/github/license/TriDiamond/vuejs-countdown-timer.svg" alt="License">
    </a>
    <a href="https://www.npmjs.com/package/vuejs-countdown-timer">
      <img src="https://img.shields.io/npm/dt/vuejs-countdown-timer.svg" alt="Npm downloads">
    </a>
    <a>
      <img src="https://img.shields.io/npm/v/vuejs-countdown-timer.svg" alt="Npm version">
    </a>
  </p>

[Demo](https://tridiamond.github.io/vuejs-countdown-timer/)
[📙English Doc](https://github.com/TriDiamond/vuejs-countdown-timer/blob/master/README.md)
[📙 更新日志](https://github.com/TriDiamond/vuejs-countdown-timer/blob/master/CHANGELOG.md)

</div>

## 安装

```bash
npm i vuejs-countdown-timer -S
```

## 使用

### Support

| 支持包 | 版本 |
| ------ | ---- |
| Vue    | 2.5+ |

### 引入组件

Javascript

```javascript
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

默认模板

```vue
<template>
    <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2018-10-10 00:00:00'"
      :end-time="1481450115"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="'Until end:'"
      label-position="begin"
      :end-text="'Event ended!'"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">
    </vue-countdown-timer>
</template>

<script >
export default {
  name: 'Timer',
  methods: {
    startCallBack: function(x) {
      console.log(x);
    },
    endCallBack: function(x) {
      console.log(x);
    },
  },
};
</script>
```

自定义模板

```vue
<template>
    <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2018-10-10 00:00:00'"
      :end-time="1481450115"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="'Until end:'"
      label-position="begin"
      :end-text="'Event ended!'"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">
      <template slot="start-label" slot-scope="scope">
        <span style="color: red" v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'begin'">{{scope.props.startLabel}}:</span>
        <span style="color: blue" v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'begin'">{{scope.props.endLabel}}:</span>
      </template>

      <template slot="countdown" slot-scope="scope">
        <span>{{scope.props.days}}</span><i>{{scope.props.dayTxt}}</i>
        <span>{{scope.props.hours}}</span><i>{{scope.props.hourTxt}}</i>
        <span>{{scope.props.minutes}}</span><i>{{scope.props.minutesTxt}}</i>
        <span>{{scope.props.seconds}}</span><i>{{scope.props.secondsTxt}}</i>
      </template>

      <template slot="end-label" slot-scope="scope">
        <span style="color: red" v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'end'">{{scope.props.startLabel}}:</span>
        <span style="color: blue" v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'end'">{{scope.props.endLabel}}:</span>
      </template>

      <template slot="end-text" slot-scope="scope">
        <span style="color: green">{{ scope.props.endText}}</span>
      </template>
    </vue-countdown-timer>
</template>

<script >
export default {
  name: 'Timer',
  methods: {
    startCallBack: function(x) {
      console.log(x);
    },
    endCallBack: function(x) {
      console.log(x);
    },
  },
};
</script>
```

### Slots

| Slot 名     | 描述           |
| ----------- | -------------- |
| start-label | 倒计时前缀标记 |
| countdown   | 倒计时         |
| end-label   | 倒计时后缀标记 |

### `start-label` Scoped Slot

| Scope 名      | 描述                                                     |
| ------------- | -------------------------------------------------------- |
| startLabel    | 倒计时前缀标记                                           |
| endLabel      | 倒计时后缀标记                                           |
| tips          | Tips `true` 指倒计到开始, `false` 指倒计到结束           |
| labelPosition | 倒计时标记位置, `'begin'` 放在前缀 或者 `'end'` 放在后缀 |

### `countdown` Scoped Slot

| Scope 名   | 描述                   |
| ---------- | ---------------------- |
| days       | 倒计天数               |
| dayTxt     | 天数的单位             |
| hours      | 倒计小时数             |
| hourTxt    | 小时数单位             |
| minutes    | 倒计分钟数             |
| minuteTxt  | 分钟数单位             |
| seconds    | 倒计秒数               |
| secondTxt  | 秒数单位               |
| showDay    | 单位`天`的显示状态值   |
| showHour   | 单位`小时`的显示状态值 |
| showMinute | 单位`分钟`的显示状态值 |

### `end-label` Scoped Slot

| Scope 名      | 描述                                                     |
| ------------- | -------------------------------------------------------- |
| startLabel    | 倒计时前缀标记                                           |
| endLabel      | 倒计时后缀标记                                           |
| tips          | Tips `true` 指倒计到开始, `false` 指倒计到结束           |
| labelPosition | 倒计时标记位置, `'begin'` 放在前缀 或者 `'end'` 放在后缀 |

### 属性 (props)

**start-time** - 开始时间戳

- `type`: Number|String
- `required` : true

**end-time** - 结束时间戳

- `type`: Number|String
- `required` : true

**interval** - 倒计时速度 - 用于 setTimer 的 interval（使用 100 会有毫秒倒计）

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

**day-txt** - 自定义显示的天数文字, 传`null`这个单位就会被隐藏

- `type`: String
- `required` : false
- `default` : ':'

**hour-txt** - 自定义显示的小时文字, 传`null`这个单位就会被隐藏

- `type`: String
- `required` : false
- `default` : ':'

**seconds-txt** - 自定义显示的分钟文字, 传`null`这个单位就会被隐藏

- `type`: String
- `required` : false
- `default` : ':'

**seconds-fixed** - 自定义显示的秒数文字

- `type`: String
- `required` : false
- `default` : ':'

**show-zero** - 是否显示到达 00 的单位

- `type`: Boolean
- `required` : false
- `default` : true

### 事件

**start_callback** - 开始倒计时结束之后的回调方法

- `type`: Function
- `required` : false

**end_callback** - 活动倒计时结束之后的回调方法

- `type`: Function
- `required` : false

# Liscense

MIT License
