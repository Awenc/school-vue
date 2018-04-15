<template>
  <div>
    <div class="acts">
        <table class="table table-hover">
            <caption>活动信息</caption>
            <thead>
              <tr>
                <th>活动主题</th>
                <th>活动时间</th>
                <th>发起人</th>
                <th>我要参加</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>聚会</td>
                <td>3.5</td>
                <td>张三</td>
                <td><div class="mybtn">报名参加</div></td>
              </tr>
              <tr>
                <td>聚会</td>
                <td>3.5</td>
                <td>张三</td>
                <td><div class="mybtn">报名参加</div></td>
              </tr>
              <tr>
                <td>聚会</td>
                <td>3.5</td>
                <td>张三</td>
                <td><div class="mybtn">报名参加</div></td>
              </tr>
            </tbody>
          </table>
    </div>
  </div>
</template>
<script>
    export default{
        name:"active"
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
</style>
