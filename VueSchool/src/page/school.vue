<template>
  <div>
 <div id="school_msg">
        <div class="form-inline myform">
           
            <div class="form-group">
                <label for="exampleInputName2">姓名：</label>
                <input type="text" class="form-control" id="name" >
            </div>
            <div class="form-group">
                <label for="exampleInputEmail2">年龄：</label>
                <input type="text" class="form-control" id="age">
            </div>
            <div class="form-group">
                    <label for="exampleInputEmail2">性别</label>
                    <input type="text" class="form-control" id="sex">
            </div>
            <div class="form-group">
                    <label for="exampleInputEmail2">职业</label>
                    <input type="text" class="form-control" id="job">
            </div>
            <!-- <span>性别：</span>
            <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"> 男
            </label>
            <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox2" value="option2"> 女
            </label>         -->
            <button class="btn btn-default" id="search">搜索</button>
        </div>
            
        <!-- 表格 -->
        <table class="table table-bordered">
        <thead>
            <tr>
            <th></th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>专业班级</th>
            <th>职业</th>
            <th>现居住地</th>
            <th>手机号码</th>
            <th>查看详细信息</th>
            <th></th>
            </tr>
        </thead>
        <tbody id="usermsg">
            <tr>
                <td></td>
                <td>张三</td>
                <td>22</td>
                <td>男</td>
                <td>信管141</td>
                <td>程序员</td>
                <td>长沙</td>
                <td>1233333333333</td>
                <td><a href="#" class="btn">点击查看</a></td>
                <td></td>
            </tr>
        </tbody>
        </table>
    </div>
  </div>
</template>
<script>
    export default{
        name:"school"
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

</style>