<template>
  <div 
  @click="switchClick"
  :class="['x_switch',{'x-switch-checked':value}]">
      <span class="x_switch_core" ref="core">
          <span class="x_switch_btn">
          </span>
      </span>
      <input type="checkbox" class="x-switch-input" :name="name" ref="input">
  </div>
</template>

<script>
export default {
    name: 'TwoSwitch',
    data(){
        return {
        }
    },
    props:{
        value:{
            type: Boolean,
            default: false
        },
        name:{
            type: String,
            default: ''
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        }
    },
    mounted(){
        this.setColor()  
    },
    methods:{
        switchClick(){
            // v-model 绑定的是 input 事件,子传父直接用input事件；如果不用input，则需要在父组件中用@事件 + v-bind绑定值  进行接收值，
            // 触发父组件中的事件  ，并传值 （子传父）
           this.$emit('input',!this.value)
           // 等待父组件的value值更新dom节点后 再调用
           this.$nextTick(()=>{
               this.setColor()
           })
        },
        // 修改开关颜色
        setColor(){
            if(this.activeColor || this.inactiveColor){
                let color = this.value ? this.activeColor : this.inactiveColor
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color
            }
            // 控制checkbox的checked(使input的值与value同步)
            this.$refs.input.checked = this.value
        }
    }
}
</script>

<style lang="scss" scoped>
.x_switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-style: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
//   不让input显示出来
  .x-switch-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .x_switch_core {
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
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .x_switch_btn {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background: #fff;
    }
  }
}
// 选中的样式
.x-switch-checked {
  .x_switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .x_switch_btn {
      transform: translateX(20px);
    }
  }
}
</style>