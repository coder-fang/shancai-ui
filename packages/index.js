// 整个包的入口
//  定义install方法，接收Vue作为参数。如果使用use注册组件，则所有的组件都将被注册

import HmButton from './button.vue'
import HmDialog from './dialog.vue'
import HmInput from './input.vue'
import HmSwitch from './switch.vue'
import OneSwitch from './switch1.vue'
import TwoSwitch from './switch2.vue'
import oneRadio from './radio.vue'
import RadioGroup from './radio-group.vue'
import oneCheckbox from './checkbox.vue'
import oneCheckboxGroup from './checkbox-group.vue'
import oneForm from './form.vue'
import formItem from './form-item.vue'
import './fonts/iconfont.css'

// 存储组件列表
const components = [
    HmButton,
    HmDialog,
    HmInput,
    HmSwitch,
    OneSwitch,
    TwoSwitch,
    oneRadio,
    RadioGroup,
    oneCheckbox,
    oneCheckboxGroup,
    oneForm,
    formItem
]

const install = function(Vue) {
    // 遍历所有的组件,将其注册为全局组件

    // 将类数组对象转为真正的数组
    console.log(components);
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

// 判断是否是直接引用文件，如果是，就不用调用Vue.use() 
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}