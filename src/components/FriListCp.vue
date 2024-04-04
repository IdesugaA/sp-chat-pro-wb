<script setup>
	import { useRoute , useRouter } from 'vue-router'
	import { friendinfo } from '../FriInfo.js'
	const $router = useRouter()

	function chat(info){
		$router.push({
			name: 'frichat',
			query:{
				userid: info.userid,
				username: info.username	
			}
		})
	}
















</script>

<template>
	<div class="body">
	<div class="list">
		<ul>
			<li v-for="info in friendinfo.friInfoAr">
				<img />
				<div class="labeldiv" @click="chat(info)">
				<div class="namediv">{{ info.friendName }}</div>
				<div class="msgdiv">{{ info.lastMsg }}</div>>
				</div>
			</li>
		</ul>	
	</div>
	
	<div class="chatmain">
	
	<RouterView></RouterView>	
	
	</div>


	</div>

</template>


<style>

	.list{
		height:100%;
		width:30%;
	}

	.chatmain{
		height:100%;
		width:70%;
	}

	ul{
		width:100%;
		height:100%;
	}
	.labeldiv{
		display:flex;
		flex-direction:column;
		justify-content:space-around;
		width:50%;
		height:100%;	
	}
	img{
		width:50%;
		height:100%;
	}

</style>
