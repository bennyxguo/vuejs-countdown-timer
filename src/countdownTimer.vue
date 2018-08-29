<template>
  <div>
    <p v-if="msTime.show">
      <slot
        v-bind:props="{
          tipShow,
          tipText,
          tipTextEnd,
          msTime,
          dayTxt,
          hourTxt,
          minutesTxt,
          secondsTxt,
          endText
        }">
        <span v-if="tipShow">{{tipText}}:</span>
        <span v-if="!tipShow">{{tipTextEnd}}:</span>
        <span v-if="msTime.day>0"><span>{{msTime.day}}</span><i>{{dayTxt}}</i></span>
        <span>{{msTime.hour}}</span><i>{{hourTxt}}</i>
        <span>{{msTime.minutes}}</span><i>{{minutesTxt}}</i>
        <span>{{msTime.seconds}}</span><i>{{secondsTxt}}</i>
        <span v-if="!msTime.show">{{endText}}</span>
      </slot>
    </p>
  </div>
</template>

<style scoped>

</style>
