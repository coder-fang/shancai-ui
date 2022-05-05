<template>
  <div
    @click="swtichClick"
    :class="['x_switch', { 'x-switch-checked': value }]"
  >
    <span class="x_switch_core" ref="core">
      <span class="x_switch_btn"></span>
    </span>
    <input type="checkbox" class="x-switch-input" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: "OneSwitch",
  props: {
    name: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inActiveColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
        
    };
  },
  mounted() {
    // 修改开关的颜色
    this.setColor();
    // 控制checkbox 的checkbox
    this.$refs.input.checked = this.value;
  },
  methods: {
    swtichClick() {
      this.$emit("input", !this.value);
      // 等待父组件的value值更新dom节点后 再调用
      this.$nextTick(() => {
        this.setColor();
        this.$refs.input.checked = this.value;
      });
    },
    setColor() {
      if (this.activeColor || this.inActiveColor) {
        let color = this.value ? this.activeColor : this.inActiveColor;
        // console.log("color", color);
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
  components: {},
};
</script>
<style  lang="scss" scoped>
.x_switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-style: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
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
