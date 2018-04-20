<template>
  <div>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#/load"><slot></slot></a></li>
            <li><a href="javascript:void(0)" v-on:click="out"><span class="glyphicon glyphicon-remove"></span>退出</a></li>
        </ul>
  </div>
</template>
<script>

    export default{
        name:"UserOut",
        data(){
            return{}
        },
        methods:{
            out:function(){
                this.axios.get("/api/out").then((data) =>{
                    if(data.data.isOut == "1"){
                        alert("退出成功")
                        window.location.href="/";                       
                    }else{
                        alert("退出失败")
                    }
                })                 
            }
        }
    }
</script>