<template>
  <div class="one-radio-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'HmRadioGroup',
    provide(){
        return {
            RadioGroup: this
        }
    },
    props:{
        value: null
    },
   
}
</script>

<style>

</style>