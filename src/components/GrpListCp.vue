<script setup>
	import groupinfo from '../GrpInfo.js'
	import { useRouter } from 'vue-router'	

	const $router = useRouter()
	
	function chat(info){
			
		$router.push({
			name: 'grpchat',
			query:{
				groupid: info.groupid,
				groupname: info.groupname
			}
		
		}
		)

	}










</script>

<template>

	<div class="list">
		<ul>
			<li v-for="info in groupinfo.grpInfoAr" @click="chat(info)">
				<img src=/>
				<div class="labeldiv">
				<div class="namediv">{{ info.groupName }}</div>
				<div class="msgdiv">{{ info.lastMsg }}</div>>
				</div>
			</li>
		</ul>	
	</div>


</template>


<style>

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

<
