<template>
    <div id='login'>
        <div class="login-box">
            <el-form label-width="80px" :model="loginForm">
                <el-form-item label="用户名">
                  <el-input v-model="loginForm.username"
                  prefix-icon="iconfont icon-yonghuming"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="loginForm.password" prefix-icon="iconfont icon-mima2" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" round @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script scoped>
export default {
    name:'login',
    data(){
        return{
            loginForm:{
                username:'',
                password:''
            }
           
        }
    },
    methods:{
        login(){
            this.req({
                url:'/login',
                method:'POST',
                params:{
                   username:this.username,
                   password:this.password
                }
            }).then(res=>{
	            console.log(res.data);
            },err=>{
	            console.log(err);
            })
           
           // this.$router.push('/home')
        }
    }
}
</script>
<style>
    .login-box {
        position: absolute;
        top:50%;
        left:50%;
        width: 600px;
        height: 600px;
        transform: translate(-50%,-50%);
        background-color:gainsboro;
        border-radius: 5px;
    }
</style>