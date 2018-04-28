<template>
  <div>
 <div id="school_msg">
        <h3>校友信息</h3>
        <div class="form-inline myform">
           
            <div class="form-group">
                <label for="exampleInputName2">姓名：</label>
                <input type="text" class="form-control" id="name" v-model="searchName">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail2">年龄：</label>
                <input type="text" class="form-control" id="age" v-model="searchAge">
            </div>
            <div class="form-group">
                    <label for="exampleInputEmail2">性别</label>
                    <input type="text" class="form-control" id="sex" v-model="searchSex">
            </div>
            <div class="form-group">
                    <label for="exampleInputEmail2">班级</label>
                    <input type="text" class="form-control" id="NowClass" v-model="searchClass">
            </div>
            <div class="form-group">
                    <label for="exampleInputEmail2">职业</label>
                    <input type="text" class="form-control" id="job" v-model="searchJob">
            </div>
            <div class="form-group">
                    <label for="exampleInputEmail2">居住地</label>
                    <input type="text" class="form-control" id="address" v-model="searchAddress">
            </div>
            <!-- <span>性别：</span>
            <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"> 男
            </label>
            <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox2" value="option2"> 女
            </label>         -->
            <button class="btn btn-default" id="search" v-on:click="search">搜索</button>
        </div>
            
        <!-- 表格 -->
        <table class="table table-bordered">
        <thead>
            <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>专业班级</th>
            <th>职业</th>
            <th>居住地</th>
            <th>手机号码</th>
            <th>查看详细信息</th>
            <th></th>
            </tr>
        </thead>
        <tbody id="usermsg">
            <tr v-for="(good,index) in nowUsersMsg">
                <td>{{index+1}}</td>
                <td>{{good.name}}</td>
                <td>{{good.age}}</td>
                <td>{{good.sex}}</td>
                <td>{{good.nowclass}}</td>
                <td>{{good.job}}</td>
                <td>{{good.address}}</td>
                <td>{{good.tel}}</td>
                <td><a  class="btn" v-on:click="show(index)" >点击查看</a></td>
                <td></td>
            </tr>
        </tbody>
        </table>
    </div>

    <div id="SeeUser" v-show="showOne">             
        <h3 class="tit">个人信息</h3>
        <ul class="selfMsg clearfix" id="">
            <li>姓名：{{nowUser.name}}</li>
            <li>年龄：{{nowUser.age}}</li>
            <li>性别：{{nowUser.sex}}</li>
            <li>出生日期：{{nowUser.birth}}</li>
        </ul>
        <ul class="jobMsg">
            <li>专业班级：{{nowUser.nowclass}}</li>
            <li>现职业：{{nowUser.job}}</li>
            <li>现居住地：{{nowUser.address}}</li>
        </ul>
            <ul class="telMsg">
            <li>qq：{{nowUser.qqnum}}</li>
            <li>邮箱：{{nowUser.mail}}</li>
            <li>tel:{{nowUser.tel}}</li>
        </ul>
        <div class="about">
            <p>个人介绍:{{nowUser.about}}</p>
        </div>
        <a id="close" class="btn btn-danger " v-on:click="close">关闭</a>    
    </div>
  </div>
</template>
<script>
    export default{
        name:"school",
        data(){
            return{
                allUserMsg:[],
                nowUsersMsg:[],     //用来显示的数据
                searchName:"",
                searchAge:"",
                searchSex:"",
                searchJob:"",
                searchAddress:"",
                searchClass:"",
                showOne:false,
                nowUser:{},
            }
        },
        mounted(){
            //获取到所有的信息
            this.axios.get("/api/userMsg/findAll").then((data) =>{
                this.allUserMsg=data.data.allUsers;
                this.nowUsersMsg=this.allUserMsg;
            })
        },
        methods:{
            search(){
                if(this.searchName == "" && this.searchAge == "" && this.searchSex == "" && this.searchJob == "" && this.searchAddress == "" && this.searchClass == "" ){
                    this.nowUsersMsg=this.allUserMsg;
                }else{
                    this.nowUsersMsg=[];
                    this.axios.post("/api/userMsg/findForType",{
                        "name":this.searchName,
                        "age":this.searchAge,
                        "sex":this.searchSex,
                        "job":this.searchJob,
                        "address":this.searchAddress,
                        "nowClass":this.searchClass
                    }).then((data) =>{
                        // console.log(data);
                        if(data.data.search == 0){
                            alert("没有找到相关信息");
                        }else{
                            this.nowUsersMsg=data.data.searchUser;
                        }
                    })                    
                }
                
            },
            close(){
                this.showOne=false;
            },
            show(index){
                this.nowUser=this.nowUsersMsg[index];
                this.showOne=true;
            }
        }
    }
</script>

<style scoped> 
.myform{
    /* border:1px solid red; */
    text-align: center;
    padding-top:20px;
    padding-bottom: 20px;
}
table{
    text-align: center;
}
table thead tr th{
    text-align: center;
}
#usermsg tr td{
    height:30px;
    line-height: 30px;
}
.form-group input{
    width:150px;
}
#SeeUser{
    position:fixed;
    top:20%;
    background: rgb(250,250,250);
    width:600px;
    height:400px;
    left:50%;
    margin-left:-300px;
    border:1px solid #fff;
    border-radius:5px;
    box-shadow: 0 0 15px rgb(222,222,222);

}
#SeeUser ul li{
    margin-top:6px;
}
#SeeUser ul,.about{
    /* border:1px solid red; */
    padding-left:30px;
}
#close{
    width:100%;
    margin-top:10px;
}
</style>