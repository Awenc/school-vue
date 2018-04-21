<template>
  <div>
    <div id="login">   
        <h3 id="title" class="move">用户登录</h3>
        <div>
            <input class="text move" name="username" type="text" placeholder="Username" id="username" v-model="username">
            <input class="text move" name="password" type="password" placeholder="Password" id="password" v-model="password">
            <input type="button" class="btn move" id="submit" value="登录" v-on:click="load">
            <a href="#/reg" class="btn" id="button" >注册</a>
        </div>   
    </div>
  </div>
</template>
<script>
    export default{
        name:"load",
        data(){
            return {
                username:"",
                password:"",
            }
        },
        methods:{
            load:function(){
                this.axios.post("/api/users/load",{
                    username:this.username,
                    password:this.password
                }).then((data) =>{
                    if(data.data.isExit == 0){
                        alert("登录成功")
                        
                        this.$emit("LoadTrue",this.username);
                        window.location.href="/#/userMsg";
                    }else{
                        alert("账号或者密码错误")
                    }
                })
            }
        }
    }
</script>