<template>
  <div>
    <p v-if="msTime.show">
      <slot
        v-bind:props="{
          startLabel,
          endLabel,
          labelPosition,
          msTime,
          dayTxt,
          hourTxt,
          minutesTxt,
          secondsTxt,
          endText
        }">
        <span v-if="startLabel !== '' && tipShow && labelPosition === 'begin'">{{startLabel}}:</span>
        <span v-if="endLabel !== '' && !tipShow && labelPosition === 'begin'">{{endLabel}}:</span>
        <span v-if="msTime.day>0"><span>{{msTime.day}}</span><i>{{dayTxt}}</i></span>
        <span>{{msTime.hour}}</span><i>{{hourTxt}}</i>
        <span>{{msTime.minutes}}</span><i>{{minutesTxt}}</i>
        <span>{{msTime.seconds}}</span><i>{{secondsTxt}}</i>
        <span v-if="startLabel !== '' && tipShow && labelPosition === 'end'">{{startLabel}}:</span>
        <span v-if="endLabel !== '' && !tipShow && labelPosition === 'end'">{{endLabel}}:</span>
        <span v-if="!msTime.show">{{endText}}</span>
      </slot>
    </p>
  </div>
</template>

<style scoped>

</style>
