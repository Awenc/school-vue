<template>
  <div>
    <div id="login">   
        <h3 id="title" class="move">用户登录</h3>
        <div>
            <input class="text move" name="username" type="text" placeholder="Username" id="username">
            <input class="text move" name="password" type="password" placeholder="Password" id="password">
            <input type="button" class="btn move" id="submit" value="登录">
            <input type="button" class="btn" id="button" value="注册">
        </div>   
    </div>
  </div>
</template>
<script>
    export default{
        name:"load"
    }
</script>