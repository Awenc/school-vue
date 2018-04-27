<template>
  <div>
      <h3>我的活动</h3>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>序号</th>
                <th>时间</th>
                <th>主题</th>
                <th>地点</th>
                <th>状态</th>
                <th>详细情况</th>
                <th>操作</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(act,index) in myAllActive">
                <td>{{index+1}}</td>
                <td>{{act.time}}</td>
                <td>{{act.tit}}</td>
                <td>{{act.address}}</td>
                <td>111</td>
                <th><a class="aboutMore">点击查看</a></th>
                <td><a class="del" v-on:click="delActive(act.id)">删除</a><a class="change" v-on:click="changeActive(act.id,index)">修改</a></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <div class="addActive" v-on:click="addActive">发布活动</div>
       

    <div id="AddActiveMsg" v-show="isAddActive"> 
        <h3>发布活动</h3>
        <ul>
            <li><span>时间：</span><input type="text" v-model="time"><p>（格式：19960512）</p></li>
            <li><span>主题：</span><input type="text" v-model="tit"></li>
            <li><span>内容：</span><input type="text" v-model="content"></li>
            <li><span>地点：</span><input type="text" v-model="address"></li>
        </ul>
        <div class="btns">
            <div class="btn btn-danger" v-on:click="addAct">发布</div>
            <div class="btn btn-success" v-on:click="back">取消</div>
        </div>
    </div>
    <div id="changeActive" v-show="ischange"> 
        <h3>修改活动</h3>
        <ul>
            <li><span>时间：</span><input type="text" v-model="time"><p>（格式：19960512）</p></li>
            <li><span>主题：</span><input type="text" v-model="tit"></li>
            <li><span>内容：</span><input type="text" v-model="content"></li>
            <li><span>地点：</span><input type="text" v-model="address"></li>
        </ul>
        <div class="btns">
            <div class="btn btn-danger" v-on:click="sureChange">确定修改</div>
            <div class="btn btn-success" v-on:click="nochange">取消修改</div>
        </div>
    </div>
  </div>
</template>
<script>
    export default{
        name:"myActive",
        data(){
            return{
                isAddActive:false,
                ischange:false,
                myAllActive:[],
                time:"",
                tit:"",
                content:"",
                address:"",
                nowId:0
            }
        },
        methods:{
            addActive(){
                this.isAddActive=true;
                this.setAll();
            },
            back(){
                this.isAddActive=false;
            },
            nochange(){
                this.ischange=false;
                this.setAll();
            },
            addAct(){
                // console.log("aaaa");
                this.axios.post("/api/active/addActive",{
                    time:this.time,
                    tit:this.tit,
                    content:this.content,
                    address:this.address,
                }).then((data) =>{
                    if(data.data.isAdd == 0){
                        alert("添加成功")
                        this.isAddActive=false;
                        this.isLoad();
                    }else{
                        alert("添加失败")
                    }
                })                
            },
            isLoad(){
                this.axios.post("/api/active").then((data) =>{
                    if(data.data.isActive == 2){
                        alert("请先登录或登录超时");
                        window.location.href="/#/load";
                    }else{
                        // console.log(data);
                        this.myAllActive=data.data.allActive;
                    }
                })                 
            },
            delActive(i){
                //删除活动事件
                if (confirm("确定删除？")==true){ 
                    // console.log("确定删除")
                    // console.log(i);
                    this.axios.post("/api/active/delActive",{
                        id:i,
                    }).then((data) =>{
                        if(data.data.isDel == 0){
                            alert("删除成功");
                            this.isLoad();
                        }else{
                            alert("删除失败");
                        }
                    }) 
                }else{ 
                    // console.log("取消删除")
                } 

            },
            changeActive(i,index){
                //修改活动事件
                // console.log(myAllActive[index]);
                this.ischange=true;
                this.time=this.myAllActive[index].time;
                this.tit=this.myAllActive[index].tit;
                this.content=this.myAllActive[index].content;
                this.address=this.myAllActive[index].address;
                this.nowId=i;
            },
            sureChange(){
                                //发送数据给后台修改
                 this.axios.post("/api/active/updataActive",{
                    time:this.time,
                    tit:this.tit,
                    content:this.content,
                    address:this.address,
                    id:this.nowId,
                }).then((data) =>{
                    if(data.data.isChanged == 0){
                        alert("修改成功")
                        this.ischange=false;
                        this.isLoad();
                    }else{
                        alert("修改失败")
                    }
                })    
            },
            setAll(){
                this.time="";
                this.tit="";
                this.content="";
                this.address="";
            }

        },
        mounted(){
            this.isLoad();
        }
    }
</script>
<style>
.table > tbody > tr > td,.table > thead > tr > th{
    text-align: center;
}
.del,.change{
    margin-left:5px;
}
.addActive{
    width:200px;
    margin:10px auto;
    border:1px solid white;
    height:40px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    background: rgb(250, 59, 59);
    color:white;
    cursor: pointer;
}
#AddActiveMsg,#changeActive{
    position: fixed;
    width:350px;
    height:400px;
    background: rgb(240,240,240);
    top:10%;
    left:50%;
    margin-left:-200px;
    z-index:9999;
    border-radius:5px;
}
#AddActiveMsg h3,#changeActive h3{
    font-size: 20px;
   margin-top:40px;
}
#AddActiveMsg ul li,#changeActive ul li {
    /* border:1px solid black; */
    height:40px;
    /* margin-top:5px; */
    text-align: center;
}
#AddActiveMsg ul li:nth-child(1),#changeActive ul li:nth-child(1){
    height:60px;
}
#AddActiveMsg ul li span,#changeActive ul li span{
    line-height: 40px;
    font-size: 16px;
}
#AddActiveMsg .btns,#changeActive .btns{
    text-align: center;
    margin-top:40px;
}
#AddActiveMsg .btns div,#changeActive .btns div{
    width:100px;
}
.aboutMore{
    display: block;
    text-align: center;
}
</style>
