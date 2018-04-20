<template>
  <div>
      <div class="changePassword">
          <ul>
              <li class="changeTil">修改密码</li>
              <li><span>新密码：</span><input type="password" id="newPassword" ></li>
              <li><span>确认新密码：</span><input type="password" id="SureNewPassword"></li>
              <li>
                  <div class="btn btn-default">确定</div>
                  <div class="btn btn-default" v-on:click="back">取消</div>
              </li>
          </ul>
      </div>

  </div>
</template>
<script>
    export default{
        name:"changePassword",
        data(){return{}},
        methods:{
            back(){
                this.$emit("noChange")
            }
        }
    }
</script>

<style>
    .changePassword{
        position: absolute;
        width:400px;
        height:300px;
        /* border:1px solid white; */
        top:30%;
        left:50%;
        margin-left:-200px;
        background:rgb(240,240,240);
        z-index:999;
    }
    .changePassword ul li{
        width:350;
        height:50px;
        /* border:1px solid red; */
        line-height: 50px;
        text-align: center;
    }
    .changePassword ul li.changeTil{
        
        font-size:18px;
    }
    .changePassword ul li input{
        width:200px;
        height:30px;
        color:grey;
    }
    .changePassword ul li:nth-child(3){
        margin-left:-82px;

    }
    .changePassword ul li:nth-child(2){
        margin-left:-55px;
    }
    .changePassword ul li div{
       width:100px;
    }
    .changePassword ul{
        margin-top:40px;
    }

</style>

