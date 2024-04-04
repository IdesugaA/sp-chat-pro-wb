<script setup>


	import { UserInfo } from '../FriInfo.js'
	import { useRoute , useRouter } from 'vue-router'

	const $route = useRoute()
	const $router = useRouter()		

	let userid =  route.query.userid
	let username = route.query.username
	var msgs = []

	//传来的msg对象是一个对象数组，对象属性有发送日期+发送内容
	axios({
		url: "/api/user/msg/"+UserInfo.userid+"/"+userid,
		method: 'get'	

	}).then(res =>{

		if(res.status == 401){
			$router.push({path:"/api/login"})
		}else if(res.status == 200){
			//后端传来的是对象数组，对象两个属性分别是msg内容和时间，都是字符串类型
			msgs = res.data.msglist
		}
		
	})












</script>


<template>

	<div class="inforow">
		<div class="nameinfo">
			{{ username  }}
		</div>
		
		<div class="btnpart">

		</div>
	</div>

	<div class="chatbody">

		<div class="sgmsg" v-for"msg in msgs">

			<div class="timemsg">
				{{ sgmsg.time }}
			</div>

			<div class="contentmsg">
				{{ sgmsg.content }}
			</div>

		</div>


	</div>

	<div class="msginput">
		<input type="text"/>
	</div>



</template>


<style>
	
	.inforow{
		height:10%;
		width:100%;
		position:relative;
	}

	.chatbody{
		height:60%;
		width:100%;
		overflow:scroll;
		overflow-x:hidden;
	}

	.msginput{
		height:30%;
		width:100%;
	}
	
	.nameinfo{
		height:100%;
		width:30%;
		position:absolute;
		left:0;
	}

	.btnpart{
		height:100%;
		width:30%;
		position:absolute;
		right:0;
	}

	.sgmsg{
		width:100%;
		height:20%;
	}

	.timemsg{
		width:100%;
		height:50%;	
	}
	
	.contentmsg{
		width:100%;
		height:50%;
	}
	

</style>
