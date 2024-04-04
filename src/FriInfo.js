import { reactive } from 'vue'

export const friendinfo = reactive({

	friInfoAr:[]

})

//这里写成响应式，意味着好友名称会更具有可更新性
//后端赋予friInfoAr的值是对象数组，但这里就会变成object数组。js里的object和字典差不多
//包含username，userid，lastmsg
