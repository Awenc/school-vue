<template>
  <div>
      <div class="allAct">
          <h3>参加的所有活动</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>时间</th>
                        <th>主题</th>
                        <th>地点</th>
                        <th>详细情况</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(act,index) in allJoinActive">
                        <td>{{index+1}}</td>
                        <td>{{act.time}}</td>
                        <td>{{act.tit}}</td>
                        <td>{{act.active_address}}</td>
                        <th><a class="aboutMore" v-on:click="showAllAct(index)">点击查看</a></th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
      </div>
      <div class="changedAct">
          <h3>做出修改的活动</h3>
            <table class="table table-bordered">
                <thead>
                    <tr >
                        <th>序号</th>
                        <th>时间</th>
                        <th>主题</th>
                        <th>地点</th>
                        <th>详细情况</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(act,index) in changedJoinActive">
                        <td>{{act.id + 1 }}</td>
                        <td>{{act.msg.time}}</td>
                        <td>{{act.msg.tit}}</td>
                        <td>{{act.msg.active_address}}</td>
                        <th><a class="aboutMore" v-on:click="showChangedAct(index)">点击查看</a></th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
      </div>
      <div class="delAct">
          <h3>已经取消的活动</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>时间</th>
                        <th>主题</th>
                        <th>地点</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(act,index) in delJoinActive">
                        <td>{{act.id + 1}}</td>
                        <td>{{act.msg.time}}</td>
                        <td>{{act.msg.tit}}</td>
                        <td>{{act.msg.active_address}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
      </div>
        <div id="activeAllMsg" v-show="isShowNowActive">
        <h3>活动详情</h3>
        <ul>
            <li>活动主题：{{nowActive.tit}}</li>
            <li>活动内容：{{nowActive.content}}</li>
            <li>活动时间：{{nowActive.time}}</li>
            <li>活动地点：{{nowActive.active_address}}</li>
            <li>发起人：{{nowActive.name}}</li>
            <li>现参与人数：{{joinNum}}</li>
            <li>状态：{{style}}</li>
        </ul>
        <div class="ActBtns">
            <a class="btn btn-danger" v-on:click="cancel(nowActive.active_id)">取消参与</a> 
            <a class="btn btn-success" v-on:click="back">关闭</a>        
        </div>

        </div>
  </div>
</template>
<script>
    export default{
        name:"joinActive",
        data(){
            return {
                allJoinActive:[],
                changedJoinActive:[],
                delJoinActive:[],
                isShowNowActive:false,
                nowActive:{},
                joinNum:0,
                style:''
            }
        },
        mounted(){
            this.isLoad();
        },
        methods:{
            isLoad(){
                this.axios.get("/api/joinActive").then((data) =>{
                    if(data.data.isJoinActive == 2){
                        alert("请先登录或登录超时");
                        window.location.href="/#/load";
                    }else if(data.data.isJoinActive == 1){
                        this.allJoinActive=data.data.allJoinActive
                        //将其中的做出修改的活动分类出来
                        this.isChanged();
                        //将其中已经删除了的活动分类出来
                        this.isdel();
                    }
                })                 
            },
            isChanged(){
                this.changedJoinActive=[];//清空数组
                for(var i=0;i<this.allJoinActive.length;i++){
                    if(this.allJoinActive[i].ischange == '1'){
                        var changeAct={
                            "id":i,
                            "msg":this.allJoinActive[i],
                        }
                        this.changedJoinActive.push(changeAct);
                    }
                }
            },
            isdel(){
                this.delJoinActive=[];//清空数组
                for(var i=0;i<this.allJoinActive.length;i++){
                    if(this.allJoinActive[i].isdel == '1'){
                        var delAct={
                            "id":i,
                            "msg":this.allJoinActive[i],
                        }
                        this.delJoinActive.push(delAct);
                    }
                }
            },
            showAllAct(i){
                this.isShowNowActive=true;
                this.nowActive=this.allJoinActive[i];
                this.joinNum=0;

                // console.log(nowActive.)
                this.getJoinNum(this.allJoinActive[i].id)
                //判断状态
                if(this.allJoinActive[i].isdel == '1'){

                    this.style="活动取消";
                }else{
                    if(this.allJoinActive[i].ischange == '1'){
                        this.style="活动被修改";
                    }else{
                        this.style="活动进行中";
                    }
                }
            },
            showChangedAct(i){
                this.isShowNowActive=true;
                this.nowActive=this.changedJoinActive[i].msg;
                this.joinNum=0;

                // console.log(nowActive.)
                this.getJoinNum(this.changedJoinActive[i].msg.id)   
                // console.log(this.nowActive);   
                this.style="活动被修改"        
            },
            back(){
                this.isShowNowActive=false;
            },
            getJoinNum(i){
                //获取到参与人数的方法
                this.axios.post("/api/active/allCount",{
                    id:i,
                }).then((data) =>{
                // console.log(data.data.num[0]);
                    if(data.data.isTrue == 0){
                        this.joinNum=data.data.num[0]["count(active_id)"];
                    }else{
                        this.joinNum=0;
                    }
                    
                })
            },
            cancel(i){
                //删除活动事件
                if (confirm("确定取消？")==true){ 
                    this.axios.post("/api/joinActive/cancelJoin",{
                        id:i,
                    }).then((data) =>{
                    // console.log(data.data.num[0]);
                        if(data.data.isDel == 0){
                            alert("取消成功")
                            this.isShowNowActive=true;
                            this.isLoad();
                            
                        }else{
                            alert("取消失败")
                            this.isShowNowActive=true;
                        }
                        
                    }) 
                }else{ 
                    this.isShowNowActive=true;
                }              
            }
        }
    }
</script>
<style>
h3{
    font-size: 20px;
}
.table > tbody > tr > td,.table > thead > tr > th{
    text-align: center;
}
.aboutMore{
    display: block;
    text-align: center;
}
#activeAllMsg{
    position:fixed;
    width:400px;
    height:425px;
    background: #222;
    left:50%;
    margin-left:-200px;
    top:20%;
}
#activeAllMsg ul li{
    text-align: left;
    /* border:1px solid #fff; */
    font-size:18px;
    margin-top:12px;
    color:rgb(140,140,140);
    padding-left:40px;
}
#activeAllMsg .ActBtns{
    /* width:100%; */
    margin-top:25px;
}
#activeAllMsg .ActBtns a{
    width:100%;
}
</style>
