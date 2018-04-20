<template>
  <div id="app">
    <nav-header v-bind:username="username"></nav-header>
    <router-view v-on:LoadTrue="load"/>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader"
export default {
  name: 'App',
  data(){
    return{
         username:""
    }
   
    
  },
  components:{
    NavHeader
  },
  methods:{
    load:function(data){
      
      this.username=data;
      
    }
  },
  mounted(){
      this.axios.get("/api/NowUsers").then((data) =>{
          if(data.data.username !=""){          
              this.username=data.data.username;
          }else{
              this.username=""
          }
         
      })
      //  console.log(this.username);    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
