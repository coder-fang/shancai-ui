<template>
    <transition name="dialog-fade">
        <!-- @click.self 点击自己才能触发 -->
        <div class="fang-dialog_wrapper" v-show="visible" @click.self="handleClose">
            <div class="fang-dialog" :style="{width:width,marginTop:top}">
                <div class="fang-dialog_header">
                    <slot name="title">
                        <!-- 将span放到slot内，这样不仅可以定义titile文本，还可以定义样式等 -->
                        <span class="fang-dialog_headerbtn">{{title}}</span>
                    </slot>
                    <!-- 关闭按钮 -->
                    <button class="fang-dialog_headerbtn" @click="handleClose">
                        <i class="fang-icon-close">x</i>
                    </button>
                </div>
                <div class="fang-dialog_body">
                    <!-- <span>这是一段信息</span> -->
                    <!-- 在body中使用匿名插槽 -->
                    <slot></slot>
                </div>
                <div class="fang-dialog_footer">
                    <!-- 如果没有指定footer插槽，则不显示 -->
                    <slot name="footer" v-if="$slots.footer"></slot>
                </div>
            </div>
        </div>
  </transition>
</template>

<script>
export default {
    name: 'HmDialog',
    props: {
        title: {
            type: String,
            default:'提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            default: '15vh'
        },
        visible: {
            type: Boolean,
            default: false
        },
        money: {
            type: String,
            default: '100'
        }
    },
    methods: {   
        /**
         * sync提供两个功能：
         *  1.将父组件向子组件传值
         *  2.子组件回调一个值给父组件
         */
        //父组件中使用sync语法糖，传递和接收参数
        // 回调方法
        // 在子组件中使用update绑定参数的方法进行回调
        handleClose (){
            console.log('哈哈');
            // 子传父（触发一个事件）
            this.$emit('update:visible',false)
            this.$emit('update:money',200)           
        }
    }
}
</script>

<style lang="scss" scoped>
.fang-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .fang-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .fang-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .fang-dialog_headerbtn {
        position: absolute;
        top: 20px;
        left: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .fang-icon-close {
            margin-left: 760px;
            color:#909399;
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;

      ::v-deep .hm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
    animation: fade .3s;
}
.dialog-fade-leave-active {
    animation: fade .3s reverse;
}
@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
   }
}
</style>