<template>
  <div> 
      <label class="hm-switch" :class="{'is-checked': value}" @click="handleClick">
          <span class="hm-switch__core" ref="core">
              <span class="hm-switch__button"></span>
          </span>
          <input type="checkbox" class="hm-switch_input" :name="name" ref="input">
      </label>
  </div>
</template>

<script>
export default {
    name: 'HmSwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    mounted(){
        this.setColor()
    },
    methods:{
        handleClick(){
            this.$emit('input', !this.value) 
            this.setColor()
        },
        setColor(){
            // 修改开关颜色 
            if(this.activeColor || this.inactiveColor){
                const color = this.value ? this.activeColor : this.inactiveColor
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color
            }
            // 控制checkbox的值，input值同步value值
            this.$refs.input.checked = this.value
        }
    }
}
</script>

<style lang="scss" scoped>
.hm-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .hm-switch_core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
        .hm-switch_button {
            position:absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
  }
  // 选中样式
  .is-checked {
    .hm-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .hm-switch_button {
        transform: translateX(20px);
      }
    }
  }
  // 隐藏input标签
  .hm-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>