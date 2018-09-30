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
  <a href="https://www.npmjs.com/package/vuejs-countdown-timer">
    <img src="https://img.shields.io/npm/dt/vuejs-countdown-timer.svg" alt="Npm downloads">
  </a>
  <a>
    <img src="https://img.shields.io/npm/v/vuejs-countdown-timer.svg" alt="Npm version">
  </a>
</p>

> 一 Vue 2 countdown and timer component

[Demo](https://tridiamond.github.io/vuejs-countdown-timer/)
[📙中文文档](https://github.com/TriDiamond/vuejs-countdown-timer/blob/master/README_CN.md)
[📙Changelog](https://github.com/TriDiamond/vuejs-countdown-timer/blob/master/CHANGELOG.md)

## Installation

``` bash
npm i vuejs-countdown-timer -S
```

## Usage

### Support

| Supported Package | Version |
|-------------------|---------|
| Vue               | 2.5+    |


### Install component and Usage

Javascript

``` javascript
// global register
import VueCountdownTimer from 'vuejs-countdown-timer'
Vue.use(VueCountdownTimer)

methods: {
  startCallBack: function (x) {
    console.log(x)
  },
  endCallBack: function (x) {
    console.log(x)
  }
}
```

Vue default template

```vue
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
```

Vue Customized template
```vue
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
```

### Slots
| Slot name         | Description           |
|-------------------|-----------------------|
| start-label       | Timer start label     |
| countdown         | Timer countdown label |
| end-label         | Timer end label       |
| end-text          | Timer ended text      |

### `start-label` Scoped Slot
| Slot scope name   | Description                                                                |
|-------------------|----------------------------------------------------------------------------|
| startLabel        | Event begin label text                                                     |
| endLabel          | Event end label text                                                       |
| tips              | Tips `true` means countdown till start, `false` means countdown till end   |
| labelPosition     | event label position, `'begin'` or `'end'`                                 |

### `countdown` Scoped Slot
| Slot scope name   | Description                                                                |
|-------------------|----------------------------------------------------------------------------|
| days              | Number of days till event                                                  |
| dayTxt            | Day label                                                                  |
| hours             | Number of hours till event                                                 |
| hourTxt           | Hours label                                                                |
| minutes           | Number of minutes till event                                               |
| minuteTxt         | Minutes label                                                              |
| seconds           | Number of seconds till event                                               |
| secondTxt         | Seconds label                                                              |

### `end-label` Scoped Slot
| Slot scope name   | Description                                                                |
|-------------------|----------------------------------------------------------------------------|
| startLabel        | Event begin label text                                                     |
| endLabel          | Event end label text                                                       |
| tips              | Tips `true` means countdown till start, `false` means countdown till end   |
| labelPosition     | event label position, `'begin'` or `'end'`                                 |

### `end-text` Scoped Slot
| Slot scope name   | Description                                                                |
|-------------------|----------------------------------------------------------------------------|
| endText           | Timer ended text                                                           |

### Props

**start-time**
- `type`: Number|String
- `required` : true

**end-time**
- `type`: Number|String
- `required` : true

**interval**
- `type`: Number
- `required` : false
- `default` : 1000

**start-label**
- `type`: String
- `required` : false
- `default` : ''

**end-label**
- `type`: String
- `required` : false
- `default` : ''

**label-position** - begin (before countdown) / end (after countdown)
- `type`: String
- `required` : false
- `default` : 'begin'
    
**end-text**
- `type`: String
- `required` : false
- `default` : 'Event ended!'

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
