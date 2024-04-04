<script setup>
	import axios from 'axios'
	import VueSimpleAlert from 'vue-simple-alert'
	import { useRoute , useRouter } from 'vue-router'
	import Cookies from 'js-cookie'


	const $router = useRouter();


	var username = ''
	var password = ''		
	function login(){
		axios({		
			url: '/api/user/login',
			method: 'post',
			data: {
				username: this.$data.username,
				password: this.$data.password
			}
		}).then(res =>{
			if(res.data.code == 1){
				Cookies.set('userid',res.data.userid,
				{expires:90 })
				Cookies.set('token',res.data.token,
				{expires:90 })
				$router.push({path:"/chat"})
			}else{
				this.$alert("密码错误或者用户不存在！")
			}		
			})
	}

</script>


<template>

	<div class="loginbody">

		<div class="loginframe">	
			<div class="loginset">
				<div class="ipdiv">
				<div class="labeldiv">帐号：</div>
				<input type="text" v-model="username"/>
				</div>
				
				<div class="ipdiv">
				<div class="labeldiv">密码：</div>
				<input type="password" v-model="password"/>
				</div>
	
				<button @click="login" name="登录"/>

			</div>
		</div>

	</div>	

</template>

<style>
	
	.loginbody{
		display:flex;
		justify-content:center;
		align-items:center;
		width:70%;
		height:80%;	
	}

	.loginframe{
		display:flex;
		justify-content:center;
		align-items:center;
		width:60%;
		height:60%;
	}	

	.loginset{
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		align-items:center;		
	}

	.labeldiv{
		display:flex;
		justify-content:space-around;

	}



</style>
