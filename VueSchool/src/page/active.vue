<template>
  <div>
    <div class="acts">
      <h3>所有活动信息</h3>
        <table class="table">
            <thead>
              <tr>
                <th>序号</th>
                <th>活动主题</th>
                <th>活动时间</th>              
                <th>发起人</th>
                <th>查看详情</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(act,index) in actives">
                <td>{{index+1}}</td>
                <td>{{act.tit}}</td>
                <td>{{act.time}}</td>
                <td>{{act.name}}</td>
                <td><div class="mybtn" v-on:click="showAct(index)">点击查看</div></td>
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
      </ul>
      <div class="ActBtns">
        <a class="btn btn-danger" v-on:click="join(nowActive.id,nowActive.username)">报名参加</a> 
        <a class="btn btn-success" v-on:click="back">取消</a>        
      </div>

    </div>
  </div>
</template>
<script>
    export default{
        name:"active",
        data(){
          return {
            actives:[],
            nowActive:{},
            isShowNowActive:false,
            joinNum:0,
          }
        },
        mounted(){
          //获取到所有的活动信息
          this.axios.get("/api/active/allActive").then((data) =>{
              // console.log(data);
              if(data.data.isOk == 1){
                //对所有活动进行时间的判断
                var tempDate="";              
                var actDate="";
                var curDate=new Date();    
                for(var i=0;i<data.data.activeMsg.length;i++){
                  tempDate= this.dateChange(data.data.activeMsg[i].time);              
                  actDate=new Date(tempDate);
                  if(actDate>curDate){
                     this.actives.push(data.data.activeMsg[i]);
                  }
                }
              }
          })            
        },
        methods:{
          dateChange(str){
                var year=str.substring(0,4);
                var moth=str.substring(4,6);
                var day=str.substring(6);
               return(year+"/"+moth+"/"+day);
          },
          showAct(i){
            // alert("qqqq");
            this.isShowNowActive=true;
            this.nowActive=this.actives[i];
            this.joinNum=0;
            this.axios.post("/api/active/allCount",{
              id:this.actives[i].id,
            }).then((data) =>{
              // console.log(data.data.num[0]);
              if(data.data.isTrue == 0){
                this.joinNum=data.data.num[0]["count(active_id)"];
              }else{
                this.joinNum=0;
              }
                
            })            
          },
          back(){
            this.isShowNowActive=false;
          },
          join(i,username){
            this.axios.post("/api/active/joinActive",{
              id:i,
              username:username
            }).then((data) =>{
                console.log(data);
                if(data.data.isActive == 2){
                    alert("请先登录")
                    window.location.href="/#/load";                 
                }else if(data.data.isActive == 3){
                  alert("这是您的活动")
                }else if(data.data.isActive == 4){
                  alert("您已经参加此次活动")
                }else if(data.data.isActive == 0){
                  alert("参加成功");
                  this.isShowNowActive=false;
                }else{
                  alert("参加失败")
                }
            })              
          }
        }
    }
</script>


<style>
    .mybtn{
        cursor: pointer;
        color:grey;
    }
    .mybtn:hover{
        color:black;
    }
    #activeAllMsg{
      position:fixed;
      width:400px;
      height:400px;
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
