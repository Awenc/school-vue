<template>
  <div>
     <div id="Reg">   
        <h3 id="title" class="move">用户注册</h3>
        <div>
            <input type="text" class="text move" placeholder="账号" id="username" name="username">
            <span class="errormsg"></span>
        </div>
        <div>
            <input type="password" class="text move" placeholder="密码" id="password" name="password">
            <span class="errormsg"></span>
        </div>
        <div>
            <input type="password" class="text move" placeholder="确认密码" id="passwordSure">
            <span class="errormsg"></span>
        </div>
        <input type="button" class="btn move" id="sure" value="注册">
        <a href="#/load" type="button" class="btn" id="back">返回登录</a>
    </div>
  </div>
</template>
<script>
    export default{
        name:"reg"
    }
</script>