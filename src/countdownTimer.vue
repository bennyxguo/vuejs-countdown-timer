<template>
  <div>
    <slot
      v-if="msTime.show"
      name="start-label"
      v-bind:props="{
      tipShow,
      startLabel,
      labelPosition
    }">
      <span v-if="startLabel !== '' && tipShow && labelPosition === 'begin'">{{startLabel}}:</span>
      <span v-if="endLabel !== '' && !tipShow && labelPosition === 'begin'">{{endLabel}}:</span>
    </slot>

    <slot
      v-if="msTime.show"
      name="countdown"
      v-bind:props="{
      msTime,
      dayTxt,
      hourTxt,
      minutesTxt,
      secondsTxt,
      endText
    }">
      <span v-if="msTime.day>0"><span>{{msTime.day}}</span><i>{{dayTxt}}</i></span>
      <span>{{msTime.hour}}</span><i>{{hourTxt}}</i>
      <span>{{msTime.minutes}}</span><i>{{minutesTxt}}</i>
      <span>{{msTime.seconds}}</span><i>{{secondsTxt}}</i>
    </slot>

    <slot
      v-if="msTime.show"
      name="end-label"
      v-bind:props="{
      tipShow,
      endLabel,
      labelPosition
    }">
      <span v-if="startLabel !== '' && tipShow && labelPosition === 'end'">{{startLabel}}:</span>
      <span v-if="endLabel !== '' && !tipShow && labelPosition === 'end'">{{endLabel}}:</span>
    </slot>

    <slot name="end-text" v-if="!msTime.show" v-bind:props="{endText}">
      {{endText}}
    </slot>
  </div>
</template>

<style scoped>

</style>
