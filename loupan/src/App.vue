<template>
  <div id="app">
    <!--<HelloWorld/>-->
    <div id="box">
      <div class="box-lt"><img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xMzNkM2NmMThmYzMxOGQwNTE5MWRjNzIwOTI3ZmFhNS5wbmc_p_p100_p_3D.png"></div>
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about/1">全新楼盘</router-link>
        <router-link to="/about/2">二手楼盘</router-link>
        <router-link to="/about/3">全新商铺</router-link>
        <router-link to="/five">楼市动态</router-link>
        <router-link to="/six">联系我们</router-link>
      </div>
      <div class="box-rt">
        <p><span>008-6666- 6666</span></p><button>资讯电话</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name:'app',
    components: {
        HelloWorld
    },
//    created(){
//        this.$http.get("http://localhost:8000").then((e)=>this.arr=e.body)
//    },
//    methods:{
//
//    },
//    data(){
//        return {
//            arr:[]
//        }
//    }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-size: 12px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
#box{
  width: 1190px;
  height: 50px;
  padding: 25px 0;
  /*background-color: #cccccc;*/
  margin: 0 auto;
}
#box>div{
  float: left;
}
.box-lt{
  width: 209px;
}
.box-lt>img{
  width: 154px;
}
#nav {
  width: 737px;
  /*padding: 30px;*/
  line-height: 50px;
}

#nav a {
  font-weight: 400;
  color: #2c3e50;
  font-size: 16px;
  margin-right: 40px;
  /*font-weight: 300;*/
}
#nav>a:nth-child(1){
  margin-left: 80px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.box-rt{
  width: 244px;
  height: 50px;
}
.box-rt>p{
  float: left;
  width: 138px;
  height: 24px;
  line-height: 26px;
  margin-top: 13px;
  text-indent: 24px;
  background: url("img/dh.png") no-repeat;
  background-position: left center;
}
.box-rt>p>span{
  font-size: 16px;
  /*color: #cccccc;*/
}
  .box-rt>button{
    float: right;
    width: 86px;
    height: 31px;
    color: white;
    background-color: rgb(58,121,232);
    border: 0;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
</style>
