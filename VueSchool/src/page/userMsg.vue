<template>
  <div>
    <div id="msg">   
        <div class="msg_left fl_l ">
            <ul>
                <li>个人信息</li>
                <li>关注的活动</li>
                <li>我的活动</li>
                <li>填写或者修改信息</li>
                <li>。。。</li>
            </ul>
        </div>
        <div class="msg_right  container">
            <div class="row">
                <div class="col-md-6 col-md-offset-2 col-lg-6">
                     <h3 class="tit">个人信息</h3>
                     <ul class="selfMsg clearfix" id="">
                         <li>姓名：<input  class="a" type="text" value="张三" disabled="false"></li>
                         <li>年龄：<input type="text" value="22" disabled="disabled"></li>
                         <li>性别：<input type="text" value="男" disabled="disabled"></li>
                         <li>出生日期：<input type="text" value="1996.5.12" disabled="disabled"></li>
                     </ul>
                     <ul class="jobMsg">
                         <li>专业班级：<input type="text" value="信管141班" disabled="disabled"></li>
                         <li>现职业：<input type="text" value="程序员" disabled="disabled"></li>
                         <li>现居住地：<input type="text" value="长沙" disabled="disabled"></li>
                     </ul>
                     <ul class="telMsg">
                        <li>qq：<input type="text" value="123456789" disabled="disabled"></li>
                        <li>邮箱：<input type="text" value="123456778@qq.com" disabled="disabled"></li>
                        <li>tel:<input type="text" value="123456789801" disabled="disabled"></li>
                    </ul>
                    <div class="about">
                        <p>个人介绍:</p>
                        <input type="text" value="这是我的自我介绍" disabled="disabled">   
                    </div>
                    <a id="changeUserMsg" class="btn btn-danger ">修改</a> 
                </div>
                           
            </div>
            
            <!-- 个人信息  姓名  年龄 性别 出生日期  班级（毕业班级） 职业 现居住地 qq  电话 邮箱  -->
        </div>
    </div>
  </div>
</template>
<script>
    export default{
        name:"userMsg"
    }
</script>