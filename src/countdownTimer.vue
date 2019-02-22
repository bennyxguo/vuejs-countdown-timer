<template>
  <div>
    <slot
      v-if="status > 0"
      name="start-label"
      v-bind:props="{
      tips,
      startLabel,
      endLabel,
      labelPosition
    }">
      <span v-if="startLabel !== '' && tips && labelPosition === 'begin'">{{startLabel}}:</span>
      <span v-if="endLabel !== '' && !tips && labelPosition === 'begin'">{{endLabel}}:</span>
    </slot>

    <slot
      v-if="status > 0"
      name="countdown"
      v-bind:props="{
      status,
      days,
      hours,
      minutes,
      seconds,
      dayTxt,
      hourTxt,
      minutesTxt,
      secondsTxt,
      showDay,
      showHour,
      showMinute
    }">
      <span v-if="showDay">{{days}}</span>
      <i v-if="showDay">{{dayTxt}}</i>

      <span v-if="showHour">{{hours}}</span>
      <i v-if="showHour">{{hourTxt}}</i>

      <span v-if="showMinute">{{minutes}}</span>
      <i v-if="showMinute">{{minutesTxt}}</i>

      <span>{{seconds}}</span>
      <i v-if="secondsTxt">{{secondsTxt}}</i>
    </slot>

    <slot
      v-if="status > 0"
      name="end-label"
      v-bind:props="{
      tips,
      startLabel,
      endLabel,
      labelPosition
    }">
      <span v-if="startLabel !== '' && tips && labelPosition === 'end'">{{startLabel}}:</span>
      <span v-if="endLabel !== '' && !tips && labelPosition === 'end'">{{endLabel}}:</span>
    </slot>

    <slot name="end-text" v-if="status <=0" v-bind:props="{endText}">
      {{endText}}
    </slot>
  </div>
</template>

<style scoped>

</style>
