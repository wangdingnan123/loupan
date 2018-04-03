<template>
  <div class="home">
    <!--<HoldWord/>-->
    <!--<h1 style="text-align: center">首页</h1>-->
    <div class="lb">
      <ul class="oul">
        <li><img style="width:1800px;height:600px;max-width:100%;" src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS84MzY4MTYwYTk5NWQ4OTg4YWNmNmM5NjIxYWJiYzg5My0xODAweDYwMC5qcGc_p_p100_p_3D.jpg"></li>
        <li><img style="width:1800px;height:600px;max-width:100%;" src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS9kODI5YzJiMjZiYjc0MmViNmQ1NWZiOTc4ZWEwODU4YS0xODAweDYwMC5qcGc_p_p100_p_3D.jpg"></li>
        <li><img style="width:1800px;height:600px;max-width:100%;" src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS80YjZhN2Q0ZTMyYTUzYTJkNmEzZDgwN2Q0YTBjODAxNy0xMzAweDQzMy5qcGc_p_p100_p_3D.jpg"></li>
        <li><img style="width:1800px;height:600px;max-width:100%;" src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS84MzY4MTYwYTk5NWQ4OTg4YWNmNmM5NjIxYWJiYzg5My0xODAweDYwMC5qcGc_p_p100_p_3D.jpg"></li>
      </ul>
    </div>
    <div class="content">
      <div class="content-lt">
        <div class="lt-top">
          <div class="tp-1 tp-2"></div>
          <div class="tp-1"></div>
          <div class="tp-2"></div>
          <div></div>
        </div>

        <div class="lt-search">
          <div class="one">
            <h1>全新楼盘</h1>
            <p>- New Apartment -</p>
            <div v-for="i in arr" class="one-x">
              <img :src="i.img">
              <h3>{{i.name}}</h3>
              <p>
                地区:{{i.region}} <br/>
                户型:{{i.huxing}} <br/>
                价格:{{i.price}} <br/>
              </p>
            </div>
            <div class="one-y">浏览更多新楼盘</div>
          </div>
        </div>

        <div class="lt-search">
          <div class="one">
            <h1>全新商铺</h1>
            <p>- New Shops -</p>
            <div v-for="i in arr" class="one-x">
              <img :src="i.img">
              <h3>{{i.name}}</h3>
              <p>
                地区:{{i.region}} <br/>
                户型:{{i.huxing}} <br/>
                价格:{{i.price}} <br/>
              </p>
            </div>
            <div class="one-y">浏览更多商铺</div>
          </div>
        </div>

        <div class="lt-search">
          <div class="one">
            <h1>二手楼盘</h1>
            <p>- Second Head -</p>
            <div v-for="i in arr" class="one-x">
              <img :src="i.img">
              <h3>{{i.name}}</h3>
              <p>
                地区:{{i.region}} <br/>
                户型:{{i.huxing}} <br/>
                价格:{{i.price}} <br/>
              </p>
            </div>
            <div class="one-y">浏览更多商铺</div>
          </div>
        </div>

      </div>
      <div class="content-rt">
        <div class="rt-top">
          <div>
            <h3>楼市动向 - NEWS<span>阅读更多</span></h3>
          </div>
          <div class="six-x">
              <a href="#"><p>攔金31億元！中山第四季度土地成...</p></a>
              <p>In this chapter in our series ...</p>
            </div>
          <div class="six-x">
              <a href="#"><p>商業地產差異化服務運營將成為商業...</p></a>
              <p>In this chapter in our series ...</p>
            </div>
          <div class="six-x">
              <a href="#"><p>遠洋地產3.26億競得中山南頭5...</p></a>
              <p>In this chapter in our series ...</p>
            </div>
          <div class="six-x">
              <a href="#"><p>中山VS珠海 未來大灣區你更看好...</p></a>
              <p>In this chapter in our series ...</p>
            </div>
          <div class="six-x">
              <a href="#"><p>降息、限貸鬆綁加上深中通道利好中...</p></a>
              <p>In this chapter in our series ...</p>
            </div>
          <div class="six-x">
              <a href="#"><p>上半年固定資產投資 中山居珠三角...</p></a>
              <p>In this chapter in our series ...</p>
            </div>
        </div>
        <div class="rt-cen rt-x">
          <div>
            <h3>联系我们 - CONTACT</h3>
          </div>
          <div class="six-x">
            <p>Tom</p>
            <a href="#"><p>188 0000 0000  /  008-6666 6666</p></a>
          </div>
          <div class="six-x">
            <p>Smith</p>
            <a href="#"><p>188 0000 0000  /  008-6666 6666</p></a>
          </div>
          <div class="six-x">
            <p>Andy</p>
            <a href="#"><p>188 0000 0000  /  008-6666 6666</p></a>
          </div>
        </div>
        <div class="rt-bot rt-x">
          <div>
            <h3>在线表单 - FORM</h3>
          </div>
          <div class="six-x">
            <input type="text" placeholder="称呼">
            <input type="email" placeholder="邮箱">
            <input type="tel" placeholder="电话">
            <!--<input type="text">-->
            <textarea name="" id="" cols="30" rows="10" placeholder="内容"></textarea>
            <input type="tel" placeholder="验证码">
            <p>cnasn</p>
            <button>提交</button>
          </div>
        </div>
        <div class="rt-ft rt-x">
          <div>
            <h3>地址 - ADDRESS</h3>
          </div>
          <div class="six-x">
            <p>郵箱：info@realestate.com</p>
            <p>地址：上海市静安区南京西路时代大厦</p>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
      <h3>地产REALSTATE  © 2020 All Rights Reserved.</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
    created(){
      this.$http.get("http://localhost:8000").then((e)=>this.arr=e.body)
    },
    methods:{
//        sle(e){
//            alert();
//            this.$http.post("http://localhost:8000/sle",{emulateJSON:true}).then((e)=>{
//                this.arr
//            })
//        }
    },
    data(){
        return {
            arr:[]
        }
    }
}
</script>
<style>
  .lb{
    width: 1259px;
    height: 600px;
    /*background-color: #cccccc;*/
    margin:  0 auto;
    overflow: hidden;
  }
  .lb .oul {
    width: 400%;
    height: 600px;

  }
  .oul li{
    float: left;
    width: 25%;
    height: 600px;
  }
  .oul li img{
    width: 100%;
    height: 600px;
  }
  .content{
    width: 1120px;
    /*height: 1916px;*/
    height: 2056px;
    margin: 0 auto;
    margin-top: 80px;
    /*background-color: #00B7FF;*/
  }
  .content .content-lt{
    float: left;
    width: 820px;
    height: 1916px;
    /*background-color: #2f6fad;*/
  }
  .content-lt .lt-top{
    width: 820px;
    height: 285px;
    /*margin-bottom: 40px;*/
  }
  .lt-top>div{
    float: left;
    width: 405px;
    height: 137px;
    background-color: #00d6b2;
  }
  .lt-top .tp-1{
    margin-bottom: 11px;
  }
  .lt-top .tp-2{
    margin-right: 10px;
  }
  .lt-search{
    width: 820px;
    height: 510px;
    /*background-color: #cccccc;*/
    background-color: rgb(247,247,247);
    /*overflow: hidden;*/
    margin-top: 40px;
  }
  .lt-search>.one{
    width: 820px;
    height: 49px;
    padding: 22px 0;

  }
  .lt-search>.one>h1{
    font-size: 22px;
    text-align: center;
  }
  .lt-search>.one>p{
    font-size: 14px;
    text-align: center;
    color: #cccccc;
  }
  .one .one-x{
    display: inline-block;
    width: 272px;
    height: 337px;
    margin-top: 22px;
    margin-right: 1px;
    background-color: white;
  }
  .one-x>img{
    width: 100%;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .one-x>h3{
    font-size: 17px;
    padding: 5px 0 13px 15px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .one-x>p{
    padding-left: 15px;
    font-size: 13px;
    line-height: 24px;
  }
  .one-y{
    width: 136px;
    height: 38px;
    line-height: 38px;
    margin: 0 auto;
    margin-top: 25px;
    border: 1px solid blue;
    text-align: center;
    cursor: pointer;
  }


  .content .content-rt{
    float: right;
    width: 270px;
    height: 1318px;

  }
  .content-rt>div{
    width: 270px;
    background-color: rgb(247,247,247);
    padding: 10px 0;
  }
  .content-rt>div>div:nth-child(1){
    width: 255px;
    /*height: 37px;*/
    /*margin: 9.5px 0;*/
    padding: 15px 0 12px 15px;
  }
  .content-rt>div>div>h3{
    font-size: 14px;
    border-width: 0px 0px 0px 18px;
    border-style: solid;
    border-color: black;
    padding: 0px 0px 0px 18px;
  }
  .content-rt>div>div>h3>span{
    margin-right: 10px;
    margin-top: -3px;
    width: 54px;
    height: 16px;
    padding: 3px 8px;
    display: inline-block;
    border: 1px solid black;
    text-align: center;
    float: right;
  }
  .rt-top .six-x{
    margin-top: 20px;
    padding-left: 15px;
  }
  .rt-top .six-x>a>p {
    color: black;
    line-height: 22px;
  }
  .rt-top .six-x>p {
    color: #cccccc;
    line-height: 22px;
  }

  .rt-cen .six-x{
    margin-top: 20px;
    padding-left: 15px;
  }
  .rt-cen .six-x:last-child{
    padding-bottom: 20px;
  }
  .rt-x{
    margin: 9.5px 0;
  }


  .rt-bot input{
    outline: none;
    border: 0;
    border-bottom: 1px solid #c0c0c0;
    margin-left: 15px;
    width: 240px;
    height: 35px;
    text-indent: 6px;
    margin-bottom: 2px;
  }
  .rt-bot textarea{
    margin-left: 15px;
    border: 0;
    border-bottom: 1px solid #c0c0c0;
    width: 240px;
    height: 62px;
    padding-top: 5px;
    text-indent: 5px;
  }
  .rt-bot p{
    width: 115px;
    height: 40px;
    line-height: 40px;
    background-color: white;
    margin-left: 15px;
    text-align: center;
  }
  .rt-bot button{
    width: 116px;
    height: 30px;
    border: 0;
    background-color: black;
    color: white;
    outline: none;
    cursor: pointer;
    /*margin-left: 15px;*/
    margin: 20px 0 20px 15px;
  }

  .rt-ft .six-x{
    padding: 0 0 20px 15px;
  }
  .rt-ft .six-x p{
    line-height: 24px;
  }

  #footer{
    width: 100%;
    height: 42px;
    line-height: 42px;
    padding: 20px 0;
    background-color: black;
  }
  #footer h3{
    width: 100%;
    text-align: center;
  }
</style>
