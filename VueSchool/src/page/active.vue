<template>
  <div>
    <div class="acts">
      <h3>所有活动信息</h3>
        <table class="table table-hover">
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
