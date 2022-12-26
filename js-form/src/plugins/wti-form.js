import Vue from 'vue'
// 引入本组件
import WtiForm from 'wti-form'
import {publicPath} from '/vue.config.js'

// 把 Element UI 和 本组件挂载上去
//Vue.use(Element);
// 这里是配置字典请求接口。如果没有字典接口的话，Vue.use 的时候可以不传第二个参数
const props = {
    baseURL: {
        type: String,
        default: publicPath,
    },
    dynamicSelectOption: {
        type: Object,
        default: () => ({
            // 这是字典接口的 url
            dictUrl: '/dict',
            // 异步请求时，请求内容是一个对象或一个数组。
            // 如果是对象，那么包含一个 key 和一个数组。
            // 如果是数组，那么只有这个数组。
            // 数组是所有字典 FormItem 的 parentKey 的集合
            queryKey: 'search', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
            parentKey: 'parentKey', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
            value: 'code', // 这是下拉框选项的值
            label: 'label' // 这是下拉框选项的 label
        })
    }
};
Vue.use(WtiForm, props);