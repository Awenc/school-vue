<template>
  <div>
    <div id="msg">   
        <div class="msg_left fl_l ">
            <ul>
                <li>个人信息</li>
                <li>关注的活动</li>
                <li>我的活动</li>
                <!-- <li>填写或者修改信息</li> -->
                <li>。。。</li>
            </ul>
        </div>
        <div class="msg_right  container">
            <div class="row">
                <div class="col-md-6 col-md-offset-2 col-lg-6" v-show="!isChange">
                     <h3 class="tit">个人信息</h3>
                     <ul class="selfMsg clearfix" id="">
                         <li>姓名：<input  class="a" type="text" v-model="name" disabled="false"></li>
                         <li>年龄：<input type="text" v-model="age" disabled="disabled"></li>
                         <li>性别：<input type="text" v-model="sex" disabled="disabled"></li>
                         <li>出生日期：<input type="text" v-model="birth" disabled="disabled"></li>
                     </ul>
                     <ul class="jobMsg">
                         <li>专业班级：<input type="text" v-model="nowclass" disabled="disabled"></li>
                         <li>现职业：<input type="text" v-model="job" disabled="disabled"></li>
                         <li>现居住地：<input type="text" v-model="address" disabled="disabled"></li>
                     </ul>
                     <ul class="telMsg">
                        <li>qq：<input type="text" v-model="qqnum" disabled="disabled"></li>
                        <li>邮箱：<input type="text" v-model="mail" disabled="disabled"></li>
                        <li>tel:<input type="text" v-model="tel" disabled="disabled"></li>
                    </ul>
                    <div class="about">
                        <p>个人介绍:</p>
                        <input type="text" v-model="about" disabled="disabled">   
                    </div>
                    <a id="changeUserMsg" class="btn btn-danger " v-on:click="change">修改个人信息</a> 
                    <a id="changePassword" class="btn btn-danger " v-on:click="changePassword">修改登录密码</a>
                </div>
                <div class="col-md-6 col-md-offset-2 col-lg-6" v-show="isChange">
                     <h3 class="tit">个人信息</h3>
                     <ul class="selfMsg clearfix" id="">
                         <li>姓名：<input  class="a" type="text" v-model="name" ></li>
                         <li>年龄：<input type="text" v-model="age" ></li>
                         <li>性别：<input type="text" v-model="sex" ></li>
                         <li>出生日期：<input type="text" v-model="birth" ></li>
                     </ul>
                     <ul class="jobMsg">
                         <li>专业班级：<input type="text" v-model="nowclass" ></li>
                         <li>现职业：<input type="text" v-model="job" ></li>
                         <li>现居住地：<input type="text" v-model="address" ></li>
                     </ul>
                     <ul class="telMsg">
                        <li>qq：<input type="text" v-model="qqnum" ></li>
                        <li>邮箱：<input type="text" v-model="mail"></li>
                        <li>tel:<input type="text" v-model="tel" ></li>
                    </ul>
                    <div class="about">
                        <p>个人介绍:</p>
                        <input type="text" v-model="about" >   
                    </div>
                    <a  class="btn btn-danger " v-on:click="submit">提交</a> 
                    <a  class="btn btn-danger " v-on:click="back">取消</a> 
                </div>                           
            </div>
            
            <!-- 个人信息  姓名  年龄 性别 出生日期  班级（毕业班级） 职业 现居住地 qq  电话 邮箱  -->
        </div>
    </div>

    <change-password v-show="changePass" v-on:noChange="noChange"></change-password>
  </div>
</template>
<script>
import changePassword from "@/components/changePassword"
    export default{
        name:"userMsg",
        data(){
            return{
                isChange:false,
                changePass:false,
                name:"",
                age:"",
                sex:"",
                birth:"",
                nowclass:"",
                job:"",
                address:"",
                qqnum:"",
                mail:"",
                tel:"",
                about:"",
            }
        },
        components:{
            changePassword
        },
        methods:{
            change(){
                this.isChange=true;
            },
            back(){
                this.isChange=false;
            },
            changePassword(){
                this.changePass=true;
            },
            noChange(){
                this.changePass=false;
            },
            submit(){
                this.axios.post("/api/userMsg/changed",{
                    "name":this.name,
                    "age":this.age,
                    "sex":this.sex,
                    "birth":this.birth,
                    "nowclass":this.nowclass,
                    "job":this.job,
                    "address":this.address,
                    "qqnum":this.qqnum,
                    "mail":this.mail,
                    "tel":this.tel,
                    "about":this.about,                
                }).then((data) =>{
                    if(data.data.isChanged ==1){
                        alert("修改成功");
                        this.back();
                        
                    }else{
                        alert("修改失败");
                        window.location.href="/#/userMsg";
                    }
                })

            }
        },
        mounted(){
            this.axios.post("/api/userMsg").then((data) =>{



                console.log(data);
                if(data.data.isUser == 2){
                    alert("请先登录")
                    window.location.href="/#/load";
                }else if(data.data.isUser == 0){
                    alert("请填写自己的信息");
                }else{
                    this.name=data.data.usermsg[0].name;
                    this.age=data.data.usermsg[0].age;
                    this.sex=data.data.usermsg[0].sex;
                    this.birth=data.data.usermsg[0].birth;
                    this.nowclass=data.data.usermsg[0].nowclass;
                    this.job=data.data.usermsg[0].job;
                    this.address=data.data.usermsg[0].address;
                    this.qqnum=data.data.usermsg[0].qqnum;
                    this.mail=data.data.usermsg[0].mail;
                    this.tel=data.data.usermsg[0].tel;
                    this.about=data.data.usermsg[0].about;                   
                }
            })            
        }
    }
</script>