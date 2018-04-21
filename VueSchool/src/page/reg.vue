<template>
  <div>
     <div id="Reg">   
        <h3 id="title" class="move">用户注册</h3>
        <div>
            <input type="text" class="text move" placeholder="账号(长度最少6位)" id="username" name="username" v-model="newUsername">
            <span class="errormsg">{{usernameError}}</span>
        </div>
        <div>
            <input type="password" class="text move" placeholder="密码" id="password" name="password" v-model="newPassword">
            <span class="errormsg"></span>
        </div>
        <div>
            <input type="password" class="text move" placeholder="确认密码" id="passwordSure" v-model="aginPass">
            <span class="errormsg">{{passwordError}}</span>
        </div>
        <input type="button" class="btn move" id="sure" value="注册" v-on:click="submit">
        <a href="#/load" type="button" class="btn" id="back">返回登录</a>
    </div>
  </div>
</template>
<script>
    export default{
        name:"reg",
        data(){
            return{
                newUsername:"",
                newPassword:"",
                aginPass:"",
                isUsernameTrue:false,
                isPasswordTrue:false,
                usernameError:"",
                passwordError:""
            }
        },
        methods:{
            submit(){
                if(this.isPasswordTrue==false || this.isUsernameTrue == false){
                    alert("请正确填写账号密码");
                }else{
                     this.axios.post("/api/users/add",{
                        "username":this.newUsername,
                        "password":this.newPassword
                    }).then((data) =>{
                        // console.log(data);
                        if(data.data.isTrue ==0){
                            alert("注册成功");
                            this.$emit("LoadTrue",this.newUsername);
                            window.location.href="/#/userMsg";
                        }else{
                           alert("注册失败")
                        }
                    })                   
                }
            }
        },
        watch:{
            "newUsername":function(newVal,oldVal){
                if(newVal.length<6){
                    this.usernameError="账号长度太短";
                }else{
                    this.usernameError="";

                    //账号发给后台看是否重复
                    this.axios.post("/api/users/isUserExit",{
                        "username":this.newUsername
                    }).then((data) =>{
                        // console.log(data);
                        if(data.data.isExit ==0){
                           this.usernameError="账号可以注册";
                           this.isUsernameTrue=true;
                        }else{
                           
                            this.usernameError="账号存在";
                            this.isUsernameTrue=false;
                        }
                    })                    
                }
            },
            "aginPass":function(newVal,oldVal){
                if(newVal != this.newPassword){
                    this.passwordError="密码不一样"
                    this.isPasswordTrue=false;
                }else{
                    this.passwordError="";
                    this.isPasswordTrue=true;
                }
            }
        }
    }
</script>