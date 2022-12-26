<template>
    <div>
        <wti-form :fields="fields1"
              ref="form1"/>
        <el-button type="primary" @click="submit('form1')">提交按钮</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fields1: [
                {
                    label: '用户信息登记',
                    children: [
                        {
                            key: 'name',
                            type: 'input',
                            label: '用户名称'
                        },
                        {
                            options: [
                                {
                                    value: 'male',
                                    label: '男'
                                },
                                {
                                    value: 'female',
                                    label: '女'
                                },
                            ],
                            key: 'gender',
                            label: '性别',
                            type: 'radio'
                        },
                        {
                            options: [
                                {
                                    value: '自由职业者',
                                    label: '自由职业者'
                                },
                                {
                                    value: '体制内',
                                    label: '体制内'
                                },
                                {
                                    value: '打工人',
                                    label: '打工人'
                                },
                                {
                                    value: '其他',
                                    label: '其他'
                                },
                            ],
                            key: 'job',
                            label: '职业',
                            placeholder: '请选择',
                            type: 'normal-select'
                        },
                        {
                            key: 'money',
                            type: 'money-input',
                            label: '定金',
                            append: '元'
                        },
                        {
                            key: 'money',
                            type: 'money-input',
                            label: '定金',
                            append: '元'
                        },
                        {
                            autoCompleteKeys: [],
                            searchUrl: '/autocomplete',
                            searchKey: 'search',
                            mainShowKey: 'search',
                            key: 'code',
                            label: 'code码',
                            placeholder: '请输入',
                            type: 'auto-complete-input',
                        },
                        {
                            key: 'reg_date',
                            label: '注册时间',
                            placeholder: '请输入',
                            type: 'date-input'
                        },
                        {
                            key: 'timearea',
                            label: '有效范围',
                            placeholder: '请输入',
                            type: 'date-range-input'
                        },
                        {
                            key: 'notice_time',
                            label: '每日短信通知时刻',
                            type: 'hour-minute-input',
                        },
                        {
                            key: 'number_limit',
                            type: 'number-input',
                            label: '数量限制',
                            append: '个'
                        },
                        {
                            key: 'dict_code',
                            type: 'dynamic-select',
                            label: '这是一个字典下拉框（想不出来用处了）',
                            parentKey: '101'
                        },
                        {
                            key: 'rate',
                            type: 'rate-input',
                            label: '存款利率',
                        },
                        {
                            key: 'area',
                            type: 'mul-linkage',
                            label: '三级联动下拉框，',
                            linkLevel: 3,
                            firstParentKey: '100'
                        },
                        {
                            key: 'address',
                            type: 'textarea',
                            label: '详细地址',
                            span: 24
                        },
                        {
                            // key
                            key: 'testInput',
                            // 小型表单
                            type: 'child-form',
                            // 是否允许删除单个子表单，默认 true（允许）（未完成）
                            deleteEnable: true,
                            // 是否允许新增单个子表单，默认 true（允许）（未完成）
                            addEnable: true,
                            // 每个小表单头的文字部分，以及新增按钮的部分
                            headerLabel: '人员信息',
                            // 里面是表单的每一项，写法和外面的没区别
                            childrenForm: [
                                {
                                    key: 'dict_code',
                                    type: 'dynamic-select',
                                    label: '这是一个字典下拉框（想不出来用处了）',
                                    parentKey: '101'
                                },
                            ]
                        },
                    ]
                }
            ]
        }
    },
    methods: {
        submit (formName) {
            this.$refs[formName].validate((isPass, data) => {
                if (isPass) {
                    console.log('这是你刚提交的数据', data);
                } else {
                    this.$message.error('校验失败！');
                }
            });
        }
    }
}
</script>
