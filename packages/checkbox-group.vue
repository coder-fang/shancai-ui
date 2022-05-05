<template>
  <div class="one-checkbox-group">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:'oneCheckboxGroup',
    props:{
        value:{
            type: Array
        }
    },
    provide(){
        return {
            CheckboxGroup: this
        }
    }
}
</script>

<style>

</style>