
<script setup>
	import Cookies from 'js-cookie'
	import axios from 'axios'
	import { info } from '../UserInfo.js'

	onBeforeMount(() => {
		let token = Cookies.get('token')
		let userid = Cookies.get('userid')
		if(token != undefined && userid != undefined){
			axios({
				url: '/api/user/info/'+userid,
				method: 'get'
			}).then(res => {
				if(res.status == 401){
					$router.push({path:"/api/login"})
				}else if(res.status == 200){
					userinfo.userid = res.data.userid
					userinfo.username = res.data.username
					userinfo.createTime = res.data.createTime
					userinfo.friendIdList = res.data.friendIdList
					userinfo.groupIdList = res.data.groupIdList
				}
			})
		}
	})

	


	

</script>



<template>

</template>


<style>


</style>
