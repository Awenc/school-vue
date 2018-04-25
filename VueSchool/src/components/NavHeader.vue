<template>
    <div>
        <!-- 导航栏 -->
        <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display 收缩导航栏的汉堡标签-->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            <!-- <img class="fl_l" id="logo" src="img/logo.png" width="45" height="45" alt=""> -->
                            <span>KD校友信息</span>
                        </a>
                    </div>
                
                    <!-- Collect the nav links, forms, and other content for toggling 导航栏的内容-->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li><a href="#/">首页</a></li>
                            <li><a href="#/usermsg">个人信息</a></li>
                            <li><a href="#/school">校友信息</a></li>




                            <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">活动信息 <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#/active">所有活动</a></li>
                                    <li><a href="#/myActive">我的活动</a></li>
                                    <li><a href="#/joinActive">参加的活动</a></li>
                                </ul>
                            </li>
                            <li><a href="#/">关于网站</a></li>
                        </ul>
                        <user-out v-show="username==''?false:true">{{username}}</user-out>
                        <ul class="nav navbar-nav navbar-right" v-show="username  !=''?false:true ">
                            <li><a href="#/load" ><span class="glyphicon glyphicon-user"></span>登录</a></li>
                            <li><a href="#/reg"><span class="glyphicon glyphicon-pencil"></span>注册</a></li>
                        </ul>
                        <!--<form class="navbar-form navbar-right hidden-xs hidden-sm" role="search">
                            <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search for...">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button">
                                            <span class="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                            </div> /input-group
                        </form> -->

                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
        </nav>        
    </div>
</template>
<script>
    import UserOut from "@/components/UserOut";
    export default{
        name:"NacHeader",
        props:["username"],
        data(){
            return{
                
            }
        },
        components:{
            UserOut
        },
        methods:{

        },
        mounted(){
        }
        
    }
</script>