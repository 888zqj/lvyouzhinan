<style>
/* 基础样式 */
* {
  color: #666;
}

ul li {
  display: inline-block;
  font-family: arial, sans-serif;
  text-decoration: none;
  font-size: 13px;
  line-height: 1.5;
  margin-top: 10px;
  padding: 0 10px;
  border-right: #ccc 1px solid;
}

.item {
  display: inline-block;
  margin-top: 10px;
  border-right: #ccc 1px solid;
}

.item-special {
  font-size: 16px;
  font-weight: bold;
}

.titbox {
  display: flex;
  white-space: nowrap;
  font-weight: bold;
}

a {
  text-decoration: none;
}
a:hover {
  color: rgb(240, 182, 66);
}

.hd {
  font-size: 20px;
  color: #0d9199;
}

.allcity {
  font-size: 40px;
  color: #666;
}

.allcity .current {
  display: block;
}

.b_wanttogo .ct .list_item .item {
  position: relative;
  height: 474px;
  display: none;
}

.b_crumbs,
.item {
  position: relative;
}

body {  
    font-family: 'Helvetica Neue', sans-serif;  
    background-color: #eef2f3;  /* 更柔和的背景色 */  
    margin: 0;  
    padding: 20px;  
}  
body {  
    font-family: 'Helvetica Neue', sans-serif;  
    background-color: #eef2f3;  
    margin: 0;  
    padding: 20px;  
}  

body {  
    font-family: 'Helvetica Neue', sans-serif;  
    background: linear-gradient(135deg, #f0f4f8, #e0e7ff);  /* 渐变背景 */  
    margin: 0;  
    padding: 20px;  
}  

.cities-container {  
    display: flex;  
    justify-content: space-around;  /* 修改为使用space-around，使得图片间距更均匀 */  
    max-width: 1200px;  
    margin: 0 auto;  
    overflow: hidden;  
    padding: 20px;  
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);  
    border-radius: 15px;  
    background-color: #ffffff;  
    width: 1200px;  
}  

.city-box {  
    display: flex;  
    flex-direction: column;  
    align-items: center;  
    height: 350px;  
    width: 400px;  
    margin: 0 10px;  /* 修改水平间距为10px，使得更紧凑但不挤在一起 */  
    padding: 20px;  
    border: none;  
    border-radius: 15px;  
    background-color: #f9f9fb;  
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);  
    transition: transform 0.2s, box-shadow 0.3s;  
}  

.city-box:hover {  
    transform: translateY(-5px);  
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);  
}  

.el-image {  
    display: block;  
    width: 100%;  
    height: 200px;  
    object-fit: cover;  
    border-radius: 10px;  
    overflow: hidden;  
    margin-bottom: 15px;  
    border: 2px solid #e4e4e4;  
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  
}   

.city-box .el-image:last-child {  
    margin-bottom: 0;  
}  

.vertical-line {  
    width: 2px;  
    background-color: #ccc;  
    height: 300px;  
    display: block;  
    margin: 0 15px;  
}  

.font-nav {  
    font-size: 1.8em;  
    font-weight: bold;  
    color: #333;  
    margin-bottom: 10px;  
    text-align: center;  
    text-transform: uppercase;  
    letter-spacing: 1.5px;  
    border-bottom: 2px solid #e4e4e4;  
    padding-bottom: 10px;  
}
.city-description {  
    font-size: 1em;  /* 描述文字大小 */  
    color: #555;  
    text-align: center;  
    margin-top: 10px;  
    line-height: 1.5; /* 增加行高提升可读性 */  
}
.vertical-line {
  width: 1px;
  height: 300px; /* 视口高度 */
  border-left: 2px solid #15a183; /* 黑色实线 */
  display: inline-block;
  margin-left: 30px;
  margin-right: 50px;
}

.b_wanttogo {  
    margin-left: 150px;  /* 左边距 */  
    margin-top: 35px;    /* 上边距 */  
    width: 800px;        /* 固定宽度，适合PC端 */  
}  

.b_wanttogo .hd {  
    color: #333;  
    line-height: 50px;  
    width: 100%;         /* 满宽，适应 .b_wanttogo */  
    height: 50px;        /* 固定高度 */  
    overflow: hidden;    /* 防止溢出 */  
}  

.b_wanttogo .hd .tit {  
    font-family: "Microsoft YaHei";  /* 字体 */  
    font-size: 30px;                  /* 标题字体大小 */  
    float: left;                       /* 左浮动 */  
    display: inline;                   /* 行内元素 */  
}  

.b_wanttogo .hd .des {  
    font-family: "Microsoft YaHei";  /* 字体 */  
    font-size: 18px;                  /* 描述字体大小 */  
    float: left;                       /* 左浮动 */  
    display: inline;                   /* 行内元素 */  
    margin-left: 10px;                /* 添加间距 */  
}  

.b_wanttogo .hd .tagbox {  
    line-height: 40px;                 /* 行高 */  
    float: right;                      /* 右浮动 */  
    display: inline;                   /* 行内元素 */  
    margin-top: 10px;  
    color: #666;                       /* 字体颜色 */  
    font-size: 14px;                  /* 标签字体大小 */  
    height: 40px;                      /* 固定高度 */  
}
.ct1 {
  margin-left: 100px;
  width: 100%;
  height: 500px;
}
.ct1 .list_item {
  _display: inline;
  _zoom: 1;
}

.list_item1 .item {
  position: relative;
  float: left;
  display: inline;
  background-color: #f5f5f5;
  border: #ededed 1px solid;
  height: 28px;
  text-align: center;
  line-height: 28px;
  margin: 0 0 0 10px;
  padding: 0 12px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.list_item1 .item .arrow {
  display: none;
  position: absolute;
  bottom: -8px;
  left: 50%;
  background: url("//source.qunarzz.com/site/images/travel/place/tag_arrow.jpg")
    no-repeat 0 0;
  margin-left: -5px;
  width: 10px;
  height: 7px;
  line-height: 0;
  font-size: 0;
}

.list_item1 .current {
  background-color: #7fc1c5;
  border: #7fc1c5 1px solid;
  color: #fff;
}

.list_item1 .current .arrow {
  display: block;
}

.ct1 {
  margin-top: 15px;
}
.ct1 .list_item .item {
  position: relative;
  height: 474px;
  display: none;
}
.ct1 .list_item .item .imgbox {
  position: absolute;
  overflow: hidden;
}
.ct1 .list_item .item .imgbox .txt {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 15px;
  background-color: transparent;
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-filter: alpha(opacity=1);
}
.ct1 .list_item .item .imgbox .txt .t {
  display: block;
  font-size: 30px;
  font-family: "microsoft yahei";
  color: #fff;
  line-height: 30px;
}
.ct1 .list_item .item .imgbox .txt .c {
  display: none;
  margin-top: 5px;
  line-height: 22px;
  color: #000;
  zoom: 1;
}
.ct1 .list_item .item .imgbox .txtbg {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 500px;
  height: 50px;
  background: url("//source.qunarzz.com/site/images/travel/place/img_bg_02.png")
    0 0 no-repeat;
  _background: 0;
  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//source.qunarzz.com/site/images/travel/place/img_bg_02.png',sizingMethod='scale');
}
.ct1 .list_item .item .hover .txt {
  background-color: #fff;
  opacity: 0.7;
  filter: alpha(opacity=70);
  -ms-filter: alpha(opacity=0.7);
}
.ct1 .list_item .item .hover .txt .t {
  display: block;
  color: #000;
}
.ct1 .list_item .item .hover .txt .c {
  display: block;
}
.ct1 .list_item .item .box_01 {
  top: 0;
  left: 0;
  width: 350px;
  height: 474px;
}
.ct1 .list_item .item .box_01 .txt {
  width: 320px;
}
.ct1 .list_item .item .box_01 .c {
  width: 320px;
}
.ct1 .list_item .item .box_02 {
  top: 0;
  left: 353px;
  width: 214px;
  height: 207px;
}
.ct1 .list_item .item .box_02 .txt {
  width: 184px;
}
.ct1 .list_item .item .box_02 .c {
  width: 184px;
}
.ct1 .list_item .item .box_03 {
  top: 0;
  left: 570px;
  width: 214px;
  height: 207px;
}
.ct1 .list_item .item .box_03 .txt {
  width: 184px;
}
.ct1 .list_item .item .box_03 .c {
  width: 184px;
}
.ct1 .list_item .item .box_04 {
  top: 0;
  left: 787px;
  width: 214px;
  height: 207px;
}
.ct1 .list_item .item .box_04 .txt {
  width: 184px;
}
.ct1 .list_item .item .box_04 .c {
  width: 184px;
}
.ct1 .list_item .item .box_05 {
  top: 210px;
  left: 353px;
  width: 393px;
  height: 264px;
}
.ct1 .list_item .item .box_05 .txt {
  width: 363px;
}
.ct1 .list_item .item .box_05 .c {
  width: 363px;
}
.ct1 .list_item .item .box_06 {
  top: 210px;
  left: 749px;
  width: 252px;
  height: 264px;
}


.ct1 .list_item .item .box_06 .txt {
  width: 222px;
}
.ct1 .list_item .item .box_06 .c {
  width: 222px;
}
.ct1 .list_item .current {
  display: block;
}

.b_calendar {
  margin-left: 80px;
  margin-top: 35px;
  height: 1200px;
  width: 1300px;
}
.b_calendar .hd {
  color: #333;
  line-height: 50px;
  width: 1000px;
  height: 50px;
}
.b_calendar .hd .tit {
  font-size: 30px;
  font-family: "microsoft yahei";
  float: left;
  display: inline;
}
.b_calendar .hd .more {
  position: relative;
  float: right;
  display: inline;
  color: #666;
  background-color: #f5f5f5;
  border: #ededed 1px solid;
  height: 28px;
  text-align: center;
  line-height: 28px;
  margin: 10px 0 0 10px;
  padding: 0 12px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.b_calendar .hd .more:hover {
  color: #666;
}
.b_calendar .tagbox {
  float: right;
  display: inline;
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  height: 40px;
}
.b_calendar .tagbox .list_item {
  _display: inline;
  _zoom: 1;
}
.b_calendar .tagbox .list_item .item {
  position: relative;
  float: left;
  display: inline;
  background-color: #f5f5f5;
  border: #ededed 1px solid;
  height: 28px;
  text-align: center;
  line-height: 28px;
  margin: 0 0 0 10px;
  padding: 0 12px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.b_calendar .tagbox .list_item .item .arrow {
  display: none;
  position: absolute;
  bottom: -8px;
  left: 50%;
  background: url("//source.qunarzz.com/site/images/travel/place/tag_arrow.jpg")
    no-repeat 0 0;
  margin-left: -5px;
  width: 10px;
  height: 7px;
  line-height: 0;
  font-size: 0;
}
.b_calendar .tagbox .list_item .current {
  background-color: #7fc1c5;
  border: #7fc1c5 1px solid;
  color: #fff;
}
.b_calendar .tagbox .list_item .current .arrow {
  display: block;
}
.b_calendar .imglistbox {
  margin-top: -5px;
  position: relative;
}
.b_calendar .imglistbox .list_item {
  display: none;
  margin-left: -16px;
}
.b_calendar .imglistbox .list_item .item {
  background-color: #f5f5f5;
  width: 235px;
  height: 235px;
  float: left;
  display: inline;
  border: #ebebeb 1px solid;
  margin-top: 20px;
  margin-left: 16px;
  overflow: hidden;
}
.b_calendar .imglistbox .list_item .item .titbox {
  padding-left: 20px;
  line-height: 57px;
}
.b_calendar .imglistbox .list_item .item .titbox .tit {
  color: #333;
  font-size: 20px;
  font-family: "microsoft yahei";
  float: left;
  display: inline;
  white-space: nowrap;
}
.b_calendar .imglistbox .list_item .item .titbox .tit:hover {
  color: #f60;
}
.b_calendar .imglistbox .list_item .item .titbox .area {
  color: #999;
  margin-left: 5px;
  margin-top: 3px;
  float: left;
  display: inline;
  white-space: nowrap;
}
.b_calendar .imglistbox .current {
  display: block;
}

.place-home-box {
  margin: 70px auto 0;
  width: 980px;
  zoom: 1;
}
.place-home-title {
  text-align: center;
  height: 26px;
  line-height: 24px;
  margin: 0 auto 35px;
}
.place-home-title .title {
  font-size: 24px;
  color: #000;
}
.place-home-tab {
  height: 32px;
  margin: 0 0 40px;
  position: relative;
}
.place-home-tab .tab {
  overflow: hidden;
  position: relative;
  text-align: center;
  font-size: 0;
}
.place-home-month .tab li {
  border: none;
  display: inline-block;
  height: 50px;
  line-height: 52px;
  overflow: hidden;
  padding-right: 25px;
  color: #929292;
}
.place-home-month .tab li span {
  height: 50px;
  overflow: hidden;
  display: inline-block;
  width: 50px;
}
.place-home-card3 {
  overflow: hidden;
  width: 983px;
  height: 300px;
  margin: 0;
  position: relative;
}

.place-home-card3 ul {
  position: absolute;
  left: 0;
  top: 0;
  width: 983px;
  height: 300px;
  background-color: #fff;
}
.place-home-card3 li {
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #efefef;
  overflow: hidden;
  width: 190px;
  height: 300px;
  position: relative;
  float: left;
  margin-right: 8px;
  display: list-item;
  text-align: -webkit-match-parent;
}
.place-home-card3 .inner {
  overflow: hidden;
  padding: 0 14px;
  position: relative;
  top: 100%;
  margin-top: -54px;
  transition: margin-top 0.5s;
  -webkit-transition: margin-top 0.5s;
  -moz-transition: margin-top 0.5s;
  -ms-transition: margin-top 0.5s;
  z-index: 11;
  height: 200%;
  display: block;
  text-decoration: none;
}

.place-home-card3 .inner h4,
.place-home-card3 .inner h5 {
  color: #fff;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.place-home-card3 .content {
  font-size: 12px;
  line-height: 1.5;
  color: #fff;
  padding-top: 10px;
}
.place-home-card1 > ul,
.place-home-card2 > ul,
.place-home-card3 > ul,
.place-home-card4 > ul {
  display: none;
}
.place-home-card1 > .center,
.place-home-card2 > .center,
.place-home-card3 > .center,
.place-home-card4 > .center {
  display: block;
}
.place-home-card3 ul .center {
  display: none;
}
.place-home-card3 li:after {
  position: absolute;
  bottom: 0;
  height: 50px;
  background: url(//common2.qyerstatic.com/place/project/images/old/place5/pic_titbg.png)
    repeat-x;
  width: 100%;
  content: "";
}

.place-home-month .tab li.on span,
.place-home-month .tab li:hover span {
  border: none;
  color: #fff;
  border-radius: 50%;
  background-color: #21bf6a;
}
img {
  width: 100%;
  height: auto;
}
</style>

<!-- Initialize Swiper -->
<script setup>
const searchQuery = ref(""); // 使用 Vue 的响应式引用来存储输入框的值

import { ref, onMounted } from "vue";
  
import { useRouter } from 'vue-router'; // 导入 Vue Router  

const router = useRouter(); // 创建路由实例  

// 城市数据，包括城市名称和对应的图片  
const cities = ref([  
  {  
    name: '北京', 
    urls: [  
      "https://img1.baidu.com/it/u=1545652371,4013125760&fm=253&fmt=auto&app=138&f=JPEG?w=627&h=418",  // 天安门广场  
      "https://img1.baidu.com/it/u=3042929548,3171680401&fm=253&fmt=auto?w=1200&h=800",  // 故宫  
      "https://img2.baidu.com/it/u=2654323199,2659467762&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=756",  // 颐和园  
    ],  
  },  
  {  
    name: '三亚',  
    urls: [  
      "https://img0.baidu.com/it/u=95688748,449150903&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500",  // 天涯海角  
      "https://img1.baidu.com/it/u=1029985468,2528300154&fm=253&fmt=auto?w=1067&h=800",  // 亚龙湾  
       "https://img1.baidu.com/it/u=3140230352,3372460500&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1728838800&t=a03e3717e2ab1881404d191d253a015a" ],  
  },  
  {  
    name: '重庆',  
    urls: [  
      "https://img0.baidu.com/it/u=2760406094,2412463298&fm=253&fmt=auto&app=138&f=JPEG?w=513&h=342",  // 解放碑  
      "https://img2.baidu.com/it/u=3380745068,3647073136&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",  // 洪崖洞  
      "https://img2.baidu.com/it/u=3376819188,984132214&fm=253&fmt=auto?w=1450&h=800",  // 长江索道  
    ],  
  }  
]);

// 跳转到对应城市详细介绍页面  
const goToCity = (cityName) => {  
  router.push(`/cityviews/${encodeURIComponent(cityName)}`); // 确保城市名称被正确编码  
};  
const urls = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://img0.baidu.com/it/u=2698432831,1732202373&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1728838800&t=6b1d55e6b1da2ad843657dd09e7de4f1",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
];

let url = ref([
  "https://img2.baidu.com/it/u=925160915,678086374&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422",
  "https://img0.baidu.com/it/u=3453583988,1185647649&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1728838800&t=ec8665fbc7a5d579efffecde6d3df6e6",
  "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5e555603c5e2235a897aee0a3823cd08.jpg_r_214x207x95_615cb506.jpg",
  "https://img2.baidu.com/it/u=3230120138,3516765540&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
  "https://img2.baidu.com/it/u=1108302668,2485988276&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728838800&t=a7577650e6fe5b05907efc365f400514",
]);
// 初始时 isActive 为 false
const id = ref(1);
function toggleActive(Tid) {
  id.value = Tid;
}
const yid = ref(1);
function ytoggleActive(TTid) {
  yid.value = TTid;
  console.log( yid.value)
}
// 初始时 isActive 为 false
const Rid = ref(1);
function RoggleActive(pid) {
  Rid.value = pid;
  console.log(Rid.value);
}

// 定义一个函数来发送跨域请求并检查CORS设置

// Import Swiper Vue.js components
</script>

<template>
  <div class="b_wanttogo" id="js_wanttogo">
    <div class="hd clrfix">
      <div class="tagbox">
        <ul class="list_item1 clrfix">
          <li
            data-beacon="Recommended_theme"
            :class="{ current: id == 1 }"
            class="item"
            @click="toggleActive(1)"
          >
            <div class="arrow"></div>
            初秋好去处
          </li>
         
          <li
            data-beacon="Recommended_theme"
            :class="{ current: id == 3 }"
            class="item"
            @click="toggleActive(3)"
          >
            <div class="arrow"></div>
            古镇里有好风光
          </li>
          <li
            data-beacon="Recommended_theme"
            :class="{ current: id == 4 }"
            class="item"
            @click="toggleActive(4)"
          >
            <div class="arrow"></div>
            翻滚吧！吃货
          </li>
        </ul>
      </div>
      <div class="tit">还没想好去哪儿？</div>
    </div>
  </div>

  <div class="ct1" :key="componentKey">
    <ul class="list_item">
      <li :class="{ current: id == 1 }" class="item">
        <RouterLink
          class="imgbox box_01"
          :to="`/cityviews/苏州`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">苏州</div>
            <div class="c">赴日本赏枫必拜访的景点，号称天下第一美溪</div>
          </div>
          <div class="txtbg"></div>
          <img alt="苏州" width="350" height="474" :src="url[0]" />
        </RouterLink>
        <RouterLink
          class="imgbox box_02"
          :to="`/cityviews/杭州`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">杭州</div>
            <div class="c">梯云村落,晒秋人家</div>
          </div>
          <div class="txtbg"></div>
          <img alt="杭州" width="214" height="207" :src="url[1]" />
        </RouterLink>
        <RouterLink
          class="imgbox box_03"
          :to="`/cityviews/大兴安岭`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">大兴安岭</div>
            <div class="c">茫茫林海，大兴安岭秋意正浓</div>
          </div>
          <div class="txtbg"></div>
          <img alt="大兴安岭" width="214" height="207" :src="url[2]" />
        </RouterLink>
        <RouterLink
          class="imgbox box_04"
          :to="`/cityviews/青海`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">青海湖</div>
            <div class="c">追寻湖畔秋色，静谧时光在这里流淌</div>
          </div>
          <div class="txtbg"></div>
          <img alt="青海" width="214" height="207" :src="url[3]" />
        </RouterLink>
        <RouterLink
          :to="`/cityviews/长春`"
          class="imgbox box_05"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">净月潭</div>
            <div class="c">蓝色星球上的最后一片净土</div>
          </div>
          <div class="txtbg"></div>
          <img alt="长春" width="393" height="264" :src="url[4]" />
        </RouterLink>
        <RouterLink
          class="imgbox box_06"
          :to="`/cityviews/南京`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">梧桐树</div>
            <div class="c">户外爱好者的天堂，宛若仙境</div>
          </div>
          <div class="txtbg"></div>
          <img alt="梧桐树" width="252" height="264" :src="urls[1]" />
        </RouterLink>
      </li>
     
      <li :class="{ current: id == 3 }" class="item">
        <RouterLink
          class="imgbox box_01"
          :to="`/cityviews/长沙`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">靖港古镇</div>
            <div class="c">靖港小镇带你清新游长沙</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="靖港古镇"
            width="350"
            height="474"
            src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5d619d642139bd9129a63cd47f1c2ec9.jpg_r_350x474x95_b67b8491.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_02"
          :to="`/cityviews/腾冲`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">和顺古镇</div>
            <div class="c">一品云南腾冲，和顺美好</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="和顺古镇"
            width="214"
            height="207"
            src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/dbbed60e233f0e80b014f360b4eac6e5.jpg_r_214x207x95_75ea7944.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_03"
          :to="`/cityviews/上海`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">七宝古镇</div>
            <div class="c">上海有七宝，一景一故事</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="七宝古镇"
            width="214"
            height="207"
            src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/af669667e1f6eb9fc7176002e091ae1f.jpg_r_214x207x95_80fbfa1d.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_04"
          :to="`/cityviews/苏州`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">同里古镇</div>
            <div class="c">在苏州同里，感受水乡古镇的静谧</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="同里古镇"
            width="214"
            height="207"
            src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5ae396b4b9e33329d7811d4e3c7ecf12.jpg_r_214x207x95_91f8b41b.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_05"
          :to="`/cityviews/湖州`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">南浔古镇</div>
            <div class="c">初夏，留一份眷恋在南浔</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="南浔古镇"
            width="393"
            height="264"
            src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c9ac3c1d77ffc1ffef41a05bf3d2dc53.jpg_r_393x264x95_511dd5b1.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_06"
          :to="`/cityviews/贺州`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">黄姚古镇</div>
            <div class="c">千年黄姚解幽梦，自在逍遥在广西</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="黄姚古镇"
            width="252"
            height="264"
            src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5186f39718d04e6d5e839d50f69eeb3e.jpg_r_252x264x95_5c2fdc1b.jpg"
          />
        </RouterLink>
      </li>
      <li :class="{ current: id == 4 }" class="item">
        <RouterLink
          class="imgbox box_01"
          :to="`/cityviews/成都`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">成都</div>
            <div class="c">吃着火锅撸着串</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="成都"
            width="350"
            height="474"
            src="https://img1.qunarzz.com/travel/poi/1804/2a/93fb6022ed937a37.jpg_r_350x474x95_30a76476.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_02"
          :to="`/cityviews/佛山`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">佛山</div>
            <div class="c">食在广东，厨出凤城</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="佛山"
            width="214"
            height="207"
            src="https://img1.qunarzz.com/travel/poi/1804/d8/d558d303948237.jpg_r_214x207x95_fa50b8da.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_03"
          :to="`/cityviews/香港`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">香港</div>
            <div class="c">寻冰室，食港味</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="香港"
            width="214"
            height="207"
            src="https://img1.qunarzz.com/travel/poi/1804/10/65af9d4603e83037.jpg_r_214x207x95_366fec45.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_04"
          :to="`/cityviews/奥门`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">澳门</div>
            <div class="c">中西合璧葡国菜</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="澳门"
            width="214"
            height="207"
            src="https://img1.qunarzz.com/travel/poi/1804/67/2789ed23eb5f1137.jpg_r_214x207x95_c10b4e91.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_05"
          :to="`/cityviews/长沙`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">长沙</div>
            <div class="c">火辣辣，油粑粑</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="长沙"
            width="393"
            height="264"
            src="https://img1.qunarzz.com/travel/poi/1804/d6/5809c18040eef437.jpg_r_393x264x95_6f12e3be.jpg"
          />
        </RouterLink>
        <RouterLink
          class="imgbox box_06"
          :to="`/cityviews/西安`"
          target="_blank"
          data-beacon="Recommended_theme"
        >
          <div class="txt" data-beacon="Recommended_picture_theme">
            <div class="t">西安</div>
            <div class="c">泡馍里解不开的面食情结</div>
          </div>
          <div class="txtbg"></div>
          <img
            alt="西安"
            width="252"
            height="264"
            src="https://img1.qunarzz.com/travel/poi/1804/a4/59fc422fc4d35b37.jpg_r_252x264x95_ce4f91fb.jpg"
          />
        </RouterLink>
      </li>
    </ul>
  </div>

 <div class="cities-container">  
    <div class="demo-image__lazy" v-for="(city, index) in cities" :key="index">  
      <span class="font-nav">{{ city.name }}</span>  
      <div @click="goToCity(city.name)">  
        <el-image v-for="(url, idx) in city.urls" :key="idx" :src="url" lazy />  
      </div>  
    </div>  
  </div>  

  <div class="place-home-box">
    <h3 class="place-home-title">
      <span class="title"> 季度推荐 </span>
    </h3>
    <div class="place-home-tab place-home-month">
      <ul class="tab" id="js-tab-3">
        <li :class="{ on: yid == 1 }" data-bn-ipg="place-index-monthlytab-1"   @click="ytoggleActive(1) ">
          <span> 春季 </span>
        </li>
        <li data-bn-ipg="place-index-monthlytab-2" :class="{ on: yid == 2}"    @click="ytoggleActive(2)">
          <span> 夏季 </span>
        </li>
        <li data-bn-ipg="place-index-monthlytab-3" :class="{ on: yid == 3}"  @click="ytoggleActive(3)">
          <span> 秋季 </span>
        </li>
        <li data-bn-ipg="place-index-monthlytab-4" :class="{ on: yid == 4}"  @click="ytoggleActive(4)">
          <span> 冬季 </span>
        </li>
        
      </ul>
    </div>
    <div class="place-home-card3" id="js-container-3">
      <ul data-lazyload="true" :class="{ center: yid == 4 }">  
 <li  
    data-origin="https://img2.baidu.com/it/u=2271774108,2042743677&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=896cf253c8aa8f96ab26f8829a2dc810g"  
    style="  
      background-image: url('https://img2.baidu.com/it/u=2271774108,2042743677&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=896cf253c8aa8f96ab26f8829a2dc810');  
    "  
  >  
    <RouterLink  
      :to="`/cityviews/长白山`"  
      target="_blank"  
      class="inner"  
      data-bn-ipg="place-index-monthly-0-0"  
    >  
      <h4>长白山</h4>  
      <div class="content">  
        冬季的北京虽然寒冷，但壮丽的雪景与历史悠久的故宫、颐和园交相辉映，既可赏雪，又能感受浓厚的文化氛围。  
      </div>  
    </RouterLink>  
  </li>  
  <li  
    data-origin="https://img2.baidu.com/it/u=3650875149,2433540536&fm=253&fmt=auto?w=1178&h=800"  
    style="  
      background-image: url('https://img2.baidu.com/it/u=3650875149,2433540536&fm=253&fmt=auto?w=1178&h=800');  
    "  
  >  
    <RouterLink  
      :to="`/cityviews/哈尔滨`"  
      target="_blank"  
      class="inner"  
      data-bn-ipg="place-index-monthly-0-1"  
    >  
      <h4>哈尔滨</h4>  
      <div class="content">  
        冬天的哈尔滨是冰雪的王国，著名的哈尔滨冰雪大世界吸引无数游客，是体验冬季乐趣的最佳地点。  
      </div>  
    </RouterLink>  
  </li>  
  <li  
    data-origin="https://img1.baidu.com/it/u=2824401695,922628344&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=90b1055891bc79b1517cb389315019d7"  
    style="  
      background-image: url('https://img1.baidu.com/it/u=2824401695,922628344&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=90b1055891bc79b1517cb389315019d7');  
    "  
  >  
    <RouterLink  
      :to="`/cityviews/西安`"  
      target="_blank"  
      class="inner"  
      data-bn-ipg="place-index-monthly-0-2"  
    >  
      <h4>西安</h4>  
      <div class="content">  
        桂林山水甲天下，冬季峰峦叠嶂，水墨画般的美景让人心旷神怡，适合享受轻松的假期。  
      </div>  
    </RouterLink>  
  </li>  
  <li  
    data-origin="https://img2.baidu.com/it/u=1172995836,1890638363&fm=253&fmt=auto?w=1422&h=800"  
    style="  
      background-image: url('https://img2.baidu.com/it/u=1172995836,1890638363&fm=253&fmt=auto?w=1422&h=800');  
    "  
  >  
    <RouterLink  
      :to="`/cityviews/雪乡`"  
      target="_blank"  
      class="inner"  
      data-bn-ipg="place-index-monthly-0-3"  
    >  
      <h4>雪乡</h4>  
      <div class="content">  
        雪乡以其美丽的雪景和独特的民俗文化而闻名，冬季的雪白世界仿佛走进了童话，吸引众多游客。  
      </div>  
    </RouterLink>  
  </li>  
  <li  
    data-origin="https://example.com/image5.jpg"  
    style="  
      background-image: url('https://example.com/image5.jpg');  
    "  
  >  
    <RouterLink  
      :to="`/cityviews/西藏`"  
      target="_blank"  
      class="inner"  
      data-bn-ipg="place-index-monthly-0-4"  
    >  
      <h4>西藏</h4>  
      <div class="content">  
        冬季的西藏，阳光明媚，空气清新，是追寻内心宁静、探索神秘文化的理想之地。  
      </div>  
    </RouterLink>  
  </li>  
</ul>
      <ul data-lazyload="true" :class="{ center: yid == 2 }">
        <li
          data-origin="https://img2.baidu.com/it/u=44850005,3454182166&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=b79c18da7edd2c2cb5ce4cf734286306"
          style="
            background-image: url('https://img2.baidu.com/it/u=44850005,3454182166&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=b79c18da7edd2c2cb5ce4cf734286306');
          "
        >
          <RouterLink
            :to="`/cityviews/桂林`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-1-0"
          >
            <h4>桂林</h4>
            <div class="content">
              伊斯坦布尔古称君士坦丁堡，自古都是王者之地。曾作为奥斯曼帝国的首都，帝国极盛之时，势力波及欧亚非三大洲，君主苏丹更是将自己视为天下之主，然兵败于一战，帝国的大厦轰然倒塌。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://img0.baidu.com/it/u=1727043108,3473172700&fm=253&fmt=auto?w=1199&h=800"
          style="
            background-image: url('https://img0.baidu.com/it/u=1727043108,3473172700&fm=253&fmt=auto?w=1199&h=800');
          "
        >
          <RouterLink
            :to="`/cityviews/苏州`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-1-1"
          >
            <h4>苏州</h4>
            <div class="content">
              希瓦是乌兹别克的一座古城，也曾是丝路重镇，王朝旧都。古为西域之地，其民风淳淳，如茗之烟。你大可以随意走进一家街边的餐馆，店主会轻巧一笑示意你落座，仿佛你不是他乡客，倒像是旧相识。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://img0.baidu.com/it/u=2964878885,1617480353&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=54efce2afad2921bf58a5c8cac9fe6a9"
          style="
            background-image: url('https://img0.baidu.com/it/u=2964878885,1617480353&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=54efce2afad2921bf58a5c8cac9fe6a9');
          "
        >
          <RouterLink
            :to="`/cityviews/洛阳`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-1-2"
          >
            <h4>洛阳</h4>
            <div class="content">
              这个季节的香港没有夏天的潮热，气温上更加舒适。三五天时间，飞去吃吃喝喝，顺便逛个小街，不能更舒服了。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://img0.baidu.com/it/u=999747662,2275727287&fm=253&fmt=auto?w=1201&h=800"
          style="
            background-image: url('https://img0.baidu.com/it/u=999747662,2275727287&fm=253&fmt=auto?w=1201&h=800');
          "
        >
          <RouterLink
            :to="`/cityviews/三亚`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-1-3"
          >
            <h4>三亚</h4>
            <div class="content">
              这个今年免签的彩色国度，每年11月至3月为旅行旺季。利用春节长假，骑骆驼深入撒哈拉，躺卧着看一亿颗星星；探索梅克内斯、菲斯和马拉喀什三大古城，以及瓦卢比利斯、阿伊特·本·哈杜村共5处世界文化遗产，穿越回《一千零一夜》的岁月。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063119785572?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063119785572?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-1-4"
          >
            <h4>瑞典</h4>
            <div class="content">
              不管是不是最后一年的极光大爆发，每年的2月都是绝佳的看极光时机。瑞典具备观赏条件，而且性价比最高还”免签”，一起去做追光少年吧！
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 3 }">
        <li
          data-origin="https://img0.baidu.com/it/u=389894598,3471898607&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=20b73f715bf4533e8fdc0517cbc6bf4f"
          style="
            background-image: url('https://img0.baidu.com/it/u=389894598,3471898607&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=20b73f715bf4533e8fdc0517cbc6bf4f');
          "
        >
          <RouterLink
            :to="`/cityviews/黄山`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-2-0"
          >
            <h4>武汉</h4>
            <div class="content">
              在荷兰，赏花地首推库肯霍夫公园。库肯霍夫号称世界上最美的春季公园，也是世界上最大的球茎花卉公园，园中各类花卉达600万株以上，是世界上被拍摄最多的地点，也是最受荷兰人钟爱的地方。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://img0.baidu.com/it/u=3697455285,3067966886&fm=253&fmt=auto?w=1200&h=800"
          style="
            background-image: url('https://img0.baidu.com/it/u=3697455285,3067966886&fm=253&fmt=auto?w=1200&h=800');
          "
        >
          <RouterLink
            :to="`/cityviews/南京`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-2-1"
          >
            <h4>南京</h4>
            <div class="content">
              每年3月15日至4月15日是日本的“樱花节”，正是樱花最盛放的时候。穿一袭和服，漫步在樱花雨下，会不会也和下雪天一样，一不小心就走到了白头。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://img1.baidu.com/it/u=708874221,3203586088&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=2e41024b2db54fb7336c8754f11174b4"
          style="
            background-image: url('https://img1.baidu.com/it/u=708874221,3203586088&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=2e41024b2db54fb7336c8754f11174b4');
          "
        >
          <RouterLink
            :to="`/cityviews/上海`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-2-2"
          >
            <h4>上海</h4>
            <div class="content">
              济州岛是韩国春天最早到来的地方，每到初春，油菜花便会率先开放。樱花的嫩粉和油菜花的艳黄，想象起来有些不搭调，不过在三月的济州岛，大自然给了我们一场精彩而又和谐的撞色T台秀。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://img2.baidu.com/it/u=1377501705,1154568577&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=9898308c97280c60e30900baada016d6"
          style="
            background-image: url('https://img2.baidu.com/it/u=1377501705,1154568577&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=9898308c97280c60e30900baada016d6');
          "
        >
          <RouterLink
            :to="`/cityviews/成都`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-2-3"
          >
            <h4>成都</h4>
            <div class="content">
              印度的色彩节就在三月。这是一个用色彩来迎接春天的节日，预示着灰暗的冬天的结束，五彩斑斓的春天即将到来。这一天，人们纷纷走上街头，跳舞狂欢，将彩色粉末涂满全身或是涂在他人额头表示祝福。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063121238892?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063121238892?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-2-4"
          >
            <h4>爱尔兰·都柏林</h4>
            <div class="content">
              爱尔兰有个节日叫“绿帽子节”，人人都要带着绿帽子上街狂欢，它是为了纪念爱尔兰的守护神圣帕特里克，故又名圣帕特里克节。有些酒吧在节日期间还会出售特制的绿色啤酒，麦当劳也会出售绿色的奶昔。有机会一定要尝一尝。
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 1 }">
        <li
          data-origin="https://img1.baidu.com/it/u=3513490429,3378729605&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=90200e038f3a66063f797f62cacc62f3"
          style="
            background-image: url('https://img1.baidu.com/it/u=3513490429,3378729605&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=90200e038f3a66063f797f62cacc62f3');
          "
        >
          <RouterLink
            :to="`/cityviews/杭州`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-3-0"
          >
            <h4>杭州</h4>
            <div class="content">
              四月，春季，最适合来加州赏花。这个时候加州各个赏花胜地已经争奇斗艳起来了，风里都飘满着花香，空气里仿佛有糖一般，让身体和神经都在清新的空气里放松下来。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://img1.baidu.com/it/u=1445988599,415011986&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=9489832d489144a2e853bde9e70cf57f"
          style="
            background-image: url('https://img1.baidu.com/it/u=1445988599,415011986&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1728493200&t=9489832d489144a2e853bde9e70cf57f');
          "
        >
          <RouterLink
            :to="`/cityviews/青岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-3-1"
          >
            <h4>青岛</h4>
            <div class="content">
              第一次知道春天的呐喊垦丁音乐节是因为五月天的一首歌，歌词说“爽要呐喊，不爽更要喊，用力的呐喊，喊到流汗，喊到没遗憾，一生能有几次，跟世界宣战。”一生能有几次机会不顾一切地呐喊，不顾一切地狂欢，垦丁音乐节给你这个机会。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://img2.baidu.com/it/u=3376819188,984132214&fm=253&fmt=auto?w=1450&h=800"
          style="
            background-image: url('https://img2.baidu.com/it/u=3376819188,984132214&fm=253&fmt=auto?w=1450&h=800');
          "
        >
          <RouterLink
            :to="`/cityviews/重庆`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-3-2"
          >
            <h4>重庆</h4>
            <div class="content">
              在曼谷、在芭提雅，到处都是蜂拥而至的人群，大家相互泼水、狂欢，享受清凉的“宋干节”。白天有灿烂的阳光、细腻的沙滩还有丰富的水上运动；夜晚则是另一种精彩：酒吧、音乐、表演，让整个城市充满激情，彻夜不眠。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://img0.baidu.com/it/u=1172582244,2995569202&fm=253&fmt=auto?w=1194&h=800"
          style="
            background-image: url('https://img0.baidu.com/it/u=1172582244,2995569202&fm=253&fmt=auto?w=1194&h=800');
           
          "
        >
          <RouterLink
            :to="`/cityviews/长春`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-3-3"
          >
            <h4>长春</h4>
            <div class="content">
              复活节是西方国家的重要节日之一，但在希腊，复活节的庆祝活动却要比圣诞还丰富热闹。复活节期间，希腊的许多博物馆和景点都免费开放。趁着复活节，去希腊一探究竟，看看这个古老的国度真实的模样。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063177542001?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063177542001?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-3-4"
          >
            <h4>新加坡</h4>
            <div class="content">
              4月是新加坡美食节，被称为“活的美食博物馆”。美食节期间，新加坡的到处是美食优惠信息，各个商家工厂也都在赶工，为了提供丰富的美食。一天五顿，顿顿都吃得爽快，把保持身材这种恼人的事尽情抛到脑后。
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 5 }">
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063177804688?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063177804688?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-4-0"
          >
            <h4>法国·巴黎</h4>
            <div class="content">
              去巴黎，当然不能不去大大小小的博物馆，却不可避免地总是在大太阳底下排着长队。5月20日是巴黎的博物馆之夜。当晚，巴黎无数的博物馆将会免费开放。有一个免费在夜晚参观博物馆的机会当然不能错过，没准还会有像《博物馆奇妙夜》一样的奇遇呢。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063178103002?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063178103002?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-4-1"
          >
            <h4>伊朗·卡尚</h4>
            <div class="content">
              玫瑰是卡尚旅游的一大主题。每年5月，全城充满了沁人心脾的玫瑰芬芳。在来自伊朗全国和世界各地的数万名游客注视下，当地人每天清晨摘下晶莹带露的“穆罕默迪”玫瑰花瓣，经过蒸馏等工艺，制成高品质玫瑰水。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063178333864?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063178333864?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-4-2"
          >
            <h4>捷克·布拉格</h4>
            <div class="content">
              五月，是前往布拉格最好的时候。每年从5月12日起在捷克布拉格市内举行“布拉格之春国际音乐节”，开展为期三个礼拜的音乐活动。各种音乐流派在这里荟萃，它既是捷克最大型的音乐盛会，也是世界闻名的音乐节。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063178537285?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063178537285?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-4-3"
          >
            <h4>古巴·哈瓦那</h4>
            <div class="content">
              穿梭在哈瓦那老城，迷宫般的大街小巷，路边一辆辆飞驰的复古车辆，仿佛穿越到了五十年代。古巴女郎、雪茄、朗姆酒、拉丁舞，一些属于古巴的名词让地方散发着迷人性感又神秘的气息。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063178799935?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063178799935?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-4-4"
          >
            <h4>美国·塞班</h4>
            <div class="content">
              五月，塞班的凤凰花开的正旺盛。碧海蓝天，火红的凤凰花，红蓝的碰撞，给这个初夏一点不一样的色彩。背倚热带植被覆盖的山脉，穿过道路两旁郁郁葱葱的椰树展现在面前的是纯净透澈的蓝绿色菲律宾海，置身其中，仿佛身心都得到了净化。如果世上有天堂，大概就是这个模样。
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 6 }">
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063179093414?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063179093414?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-5-0"
          >
            <h4>俄罗斯·圣彼得堡</h4>
            <div class="content">
              6月的俄罗斯清凉宜人，十分适合避暑度假。特别是圣彼得堡——这个世界上少数有“白夜”的城市，会在每年6月21日迎来盛大的节日——白昼节。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063179339482?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063179339482?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-5-1"
          >
            <h4>澳大利亚·塔斯马尼亚</h4>
            <div class="content">
              正在发愁夏天看不到极光？不要怕，没有北极光，还可以有南极光。塔斯马尼亚岛，是澳洲最接近南极圈的地方，也是观赏南极光的最佳位置。现在出发，还能拥有极夜的独特体验。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063179534617?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063179534617?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-5-2"
          >
            <h4>坦桑尼亚</h4>
            <div class="content">
              6月-9月的非洲，由于旱季的到来，数以百万计的野生动物将会上演地球上最壮观的大迁徙场面——从坦桑尼亚的塞伦盖蒂保护区前往肯尼亚的马赛马拉国家公园。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063179808729?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063179808729?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-5-3"
          >
            <h4>巴厘岛</h4>
            <div class="content">
              6月的巴厘岛，迎来了一年当中最舒适的凉季——天气干爽，气候宜人。几乎不会下雨，夜晚清凉舒适。无论是阿勇河上的漂流、金巴兰海滩上完美的落日、还是圣泉寺里信徒虔诚的洗礼，都是一次最净化心灵的旅行。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063201187270?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063201187270?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-5-4"
          >
            <h4>阿根廷</h4>
            <div class="content">
              每年六月阿根廷开始进入滑雪季，大部分滑雪胜地都全面开放，想要避暑滑雪，就不要错过六月的阿根廷啦。更何况，前些日子，阿根廷刚对中国开放了十年往返签证，是时候去世界的尽头看看了。
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 7 }">
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180058975?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180058975?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-6-0"
          >
            <h4>美国·华盛顿</h4>
            <div class="content">
              每年的7月4号是美国的国庆日，又称独立日，为的是纪念1776年的这一天《独立宣言》的签署。而作为美利坚合众国的首都，华盛顿自然要举行一系列庆祝活动。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180286457?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180286457?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-6-1"
          >
            <h4>法国·巴黎</h4>
            <div class="content">
              7月的巴黎，除了一年一度的夏季打折季和沙滩节之外，14日的法国国庆节也非常值得期待，法国国庆是为了纪念1789年的这一天巴黎人民攻占巴士底狱，那是个改变了法国乃至整个欧洲的日子。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180529953?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180529953?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-6-2"
          >
            <h4>蒙古·乌兰巴托</h4>
            <div class="content">
              蒙古的国庆节在每年的7月11号，为了纪念1921年的这天蒙古人民革命党领导的人民革命取得胜利。而在国庆当天，也会举行盛大的那达慕大会开幕仪式。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180739684?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180739684?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-6-3"
          >
            <h4>意大利·翁布里亚</h4>
            <div class="content">
              翁布里亚爵士音乐节也会在每年七月举行，这是世界上几大之知名的爵士音乐节之一，会持续一周左右的时间，每年这个时候，大区首府佩鲁贾都是游人云集，热闹非凡，爱好音乐的朋友一定不能错过。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180919477?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063180919477?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-6-4"
          >
            <h4>挪威</h4>
            <div class="content">
              7月的挪威非常凉爽，历史均温也不过十余度上下。挪威旅行最大的看点就是那刀凿斧琢般的海岸线上无数风景壮美的峡湾了，其间还散落着许多地质奇观。布道石，奇迹石，恶魔之舌……光听名字就令人神往。
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 8}">
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063182097782?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063182097782?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-7-0"
          >
            <h4>非洲·马赛马拉</h4>
            <div class="content">
              每年夏天，在东非广袤的大地上，为了追逐丰美的水草，上百万头食草动物都会长途跋涉3000多公里，上演这个星球上最壮观的迁徙。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063182655936?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063182655936?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-7-1"
          >
            <h4>俄罗斯·贝加尔湖</h4>
            <div class="content">
              贝加尔湖古称北海，当年苏武便是于此牧羊。八月时节，原始森林葳蕤蓊郁，贝加尔湖瑰丽壮阔，气候宜人，生物成群。乘环湖火车赏景，湖边或可见一树一树的野花花开正盛，微风过处，落一地粉嫩鹅黄。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063183149792?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063183149792?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-7-2"
          >
            <h4>斐济</h4>
            <div class="content">
              8月的斐济，天气较他时更为凉爽，且受热带风暴袭击的概率较低，适宜旅行。若能约上三两好友，在海岛上度过几天懒散闲适的生活，更复何求？
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063190007489?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063190007489?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-7-3"
          >
            <h4>西班牙·布尼奥尔</h4>
            <div class="content">
              每年8月的最后一个星期三，卡车都会在小镇上倾倒上百吨熟透的番茄，人们可以肆意地拿着番茄相互投掷，整个小镇都会成为红色的海洋。很少有这样的机会，可以将孩童的天性如此无拘无束地释放。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063192584048?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063192584048?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-7-4"
          >
            <h4>乌兹别克斯坦·撒马尔罕</h4>
            <div class="content">
              撒马尔罕是乌兹别克斯坦的旧都，中亚大地最传奇的城市。这里是曾经的丝路重镇，八方通衢。世纪之初跻身世界文化遗产，被称为“文化交汇之地”。
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 9 }">
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063193461701?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063193461701?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-8-0"
          >
            <h4>新西兰·皇后镇</h4>
            <div class="content">
              有人说，上帝先到了这里，然后才创造了天堂。9月的皇后镇开始进入春季，繁花似锦，是一年中最美的时候。除了绝美的自然风光之外，皇后镇还被誉为“冒险之都”，在这里可以体验许多世界顶级的户外活动。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063193772668?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063193772668?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-8-1"
          >
            <h4>意大利·米兰</h4>
            <div class="content">
              9月的米兰天气日趋凉爽，除了宏伟的米兰大教堂和达芬奇的最后的晚餐真迹外，2017春夏米兰时装周也将于当地时间9月21日-9月26日举办。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063193951177?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063193951177?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-8-2"
          >
            <h4>德国·慕尼黑</h4>
            <div class="content">
              九月下旬慕尼黑会举办举世闻名的啤酒节，人们用华丽的马车运送啤酒，身着传统巴伐利亚民族服饰盛装游行，在巨大的啤酒帐篷里开怀畅饮，欣赏巴伐利亚铜管乐队演奏的民歌乐曲。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063194196170?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063194196170?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-8-3"
          >
            <h4>加拿大</h4>
            <div class="content">
              魁北克省和安大略省可以观赏加拿大的秋景，有万山红遍，层林尽染的美景。这里不仅有落基山空明澄澈的湖水、冰原大道千年不化的积雪、还有魁北克古城石板街的温婉浪漫、尼亚加拉大瀑布的恢宏壮阔和卡尔加里牛仔节魅力四射的激情……万千美景，集于一身。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063194398009?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063194398009?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-8-4"
          >
            <h4>突尼斯</h4>
            <div class="content">
              9月下旬是突尼斯夏秋交替之季。此时地中海岸鲜花盛开，撒哈拉地区气温也开始转凉，是沙漠观景的好时节。这里也是欧洲人最喜爱的旅游胜地，一边是地中海的万顷碧波，一边是撒哈拉的无垠沙漠。在突尼斯感受三毛与荷西的撒哈拉平凡爱情也会是充满特殊浪漫的旅程。
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 10 }">
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195165470?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195165470?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-9-0"
          >
            <h4>俄罗斯·莫斯科</h4>
            <div class="content">
              俄罗斯的十月入秋不久，气温稍凉，秋风飒爽。作为俄罗斯的首都，莫斯科是世界上绿化最好的城市之一，这时候来莫斯科，还可以看到最美的金秋。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195318081?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195318081?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-9-1"
          >
            <h4>瑞士</h4>
            <div class="content">
              10月份是瑞士入秋的季节，这时候很适合徒步，并且游人较少。来这里，可以在国庆错峰出行，真正深入当地，体会民俗风情。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195606923?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195606923?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-9-2"
          >
            <h4>匈牙利·布达佩斯</h4>
            <div class="content">
              布达佩斯一直享受着“多瑙河上的小明珠”之称号，美丽的多瑙河流经这座浪漫而又文艺的城市。走在秋季的布达佩斯，犹如进入了电影的世界。一年一度的秋季艺术节也在这个10月里举行。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195721579?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195721579?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-9-3"
          >
            <h4>南非</h4>
            <div class="content">
              10月份南非刚刚开春，在开普敦等地区开满了鲜花，是旅行观光的最好时机。如果你不喜欢秋天，那么就去南非看花开吧。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195968635?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063195968635?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-9-4"
          >
            <h4>澳大利亚</h4>
            <div class="content">
              每年的10月~次年2月是澳大利亚的夏季，也是澳大利亚最适合旅行的季节，阳光下的炫目海岸有无限诱惑力哦。澳洲是一个充满了生机的岛国，除了袋鼠和考拉，这里还有很多值得人们去体验的东西。比如花园城市墨尔本的有轨电车、大堡礁浮潜、黄金海岸的海鲜美味……
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 11}">
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063198674358?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063198674358?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-10-0"
          >
            <h4>迪拜</h4>
            <div class="content">
              11月至次年3月是迪拜的最佳旅行季节，这时的迪拜气候适宜、阳光和煦，在舒适的气候中更好的领略当地风情。作为目前世界上最高的建筑，高耸入云的迪拜塔已然成为迪拜的绝对地标。来迪拜游览这些独特的建筑，就能从中看到这几十年来穆斯林文化和西方文化碰撞的火花。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063198923238?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063198923238?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-10-1"
          >
            <h4>柬埔寨</h4>
            <div class="content">
              如果你去过柬埔寨，你一定会被当地的古迹和历史气息震撼到，在吴哥窟林立的古迹中漫步，就好像看到了神秘的高棉历史。热带气候的柬埔寨，旱雨季交替明显。旱季（11月至4月）高温少雨，其中11月至1月属于凉季，气温在26摄氏度左右，非常宜人，很适合出游。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063199154028?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063199154028?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-10-2"
          >
            <h4>越南</h4>
            <div class="content">
              越南沿着海岸线的狭长地带，河内与胡志明市这两座城市连起了顺化、岘港、会安、芽庄、美奈、大叻这一串美丽的小城。这就是越南，惊险之中却有别样风情的国家。刚刚结束暴雨季节的越南，进入凉季，也是越南最美的季节。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063199354994?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063199354994?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-10-3"
          >
            <h4>埃及</h4>
            <div class="content">
              埃及冬季平均气温最高19. 9℃，最低9.
              7℃，夏季温度最高可达三四十度。如果你想选择一个气温最舒适的时间去旅行，那么9至11月的埃及是最佳的选择。。金字塔，神庙，木乃伊，无一不是吸引着全世界各地的人们前往这里的理由。除此之外，埃及还有漂亮的红海，迷人的亚历山大港，淳朴热情的民众。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063199631400?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063199631400?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-10-4"
          >
            <h4>马尔代夫</h4>
            <div class="content">
              十一月份可以避开圣诞的旅游高峰，也能享受到马尔代夫最舒适的少雨季节。
              曾有人如此评价它：“如果你一生中有很多次出国旅游的机会，那你一定要来马尔代夫；如果你一生中只有一次出国旅游的机会，那你更要来马尔代夫”。
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul data-lazyload="true" :class="{ center: yid == 12 }">
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063199925233?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063199925233?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-11-0"
          >
            <h4>日本·白川乡</h4>
            <div class="content">
              如果要去日本看雪，也许你第一个想到的是北海道。除了北海道之外，也许你可以尝试去一趟白川乡。白川乡是坐落于日本中部的岐阜县，是个四面环山、水田纵横、河川流经的安静村落。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063200096420?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063200096420?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-11-1"
          >
            <h4>芬兰·罗瓦涅米</h4>
            <div class="content">
              大家都以为圣诞老人只是童话而已，但实际上芬兰就存在真正的圣诞老人。熟悉圣诞老人历史的人就会知道，他的家乡在拉普兰的罗瓦涅米。想去一睹圣诞老人的真容么？
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063200367525?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063200367525?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-11-2"
          >
            <h4>美国</h4>
            <div class="content">
              冬季的美国虽然没有夏季那么多有趣的玩乐项目，但你来这里却可以看到更加真实的它,遇到和美剧《老友记》中一样的普通人。圣诞节的时候，美国大街小巷上都会装饰起来，热闹的节日气氛感染着每一个人。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063200538908?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063200538908?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-11-3"
          >
            <h4>苏格兰·爱丁堡</h4>
            <div class="content">
              如果你看过电影《一天》，那么你肯定记住了爱丁堡这座山城。整个城市浓郁而独特的文化气息，会让你置身于一个完全不同的世界中。当新年到来之时，你来到爱丁堡街头，绝对会被这新年的气氛所感染，和大家一起高呼、一起载歌载舞。
            </div>
          </RouterLink>
        </li>
        <li
          data-origin="https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063200714407?imageMogr2/interlace/1|imageslim"
          style="
            background-image: url('https://pic.qyer.com/public/place/themeinfo/2017/09/25/15063200714407?imageMogr2/interlace/1|imageslim');
          "
        >
          <RouterLink
            :to="`/cityviews/泰国苏梅岛`"
            target="_blank"
            class="inner"
            data-bn-ipg="place-index-monthly-11-4"
          >
            <h4>台北</h4>
            <div class="content">
              台湾没有太多壮丽的山水，却有对景点细致的发掘。而跨年来这里，最不能错过的就是在台北101观景台体会「在烟火里看烟火」的奇妙经验。在迎接新年的时候，爬到台北101的89楼俯瞰整个城市，天空中绽放着整片整片的眼花。
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>

  <div class="allcity">全部城市</div>
  <div class="contbox current">
    <dl class="listbox">
      <dl class="hd">直辖市</dl>
      <dd class="ct">
        <dl class="sub_list">
          <ul class="list_item clrfix">
            <li class="item">
              <RouterLink :to="`/cityviews/北京`" class="link" target="_blank"
                >北京</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/上海`" class="link" target="_blank"
                >上海</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/重庆`" class="link" target="_blank"
                >重庆</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/天津`" class="link" target="_blank"
                >天津</RouterLink
              >
            </li>
          </ul>
        </dl>
      </dd>
    </dl>
    <dl class="listbox">
      <dl class="hd">华东</dl>
      <dd class="ct">
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">福&nbsp;&nbsp;&nbsp;&nbsp;建：</li>

            <li class="item">
              <RouterLink :to="`/cityviews/厦门`" class="link" target="_blank"
                >厦门</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/福州`" class="link" target="_blank"
                >福州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/漳州`" class="link" target="_blank"
                >漳州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/泉州`" class="link" target="_blank"
                >泉州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/龙岩`" class="link" target="_blank"
                >龙岩</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/三明`" class="link" target="_blank"
                >三明</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/南平`" class="link" target="_blank"
                >南平</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/宁德`" class="link" target="_blank"
                >宁德</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/莆田`" class="link" target="_blank"
                >莆田</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">浙&nbsp;&nbsp;&nbsp;&nbsp;江：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/杭州`" class="link" target="_blank"
                >杭州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/宁波`" class="link" target="_blank"
                >宁波</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/嘉兴`" class="link" target="_blank"
                >嘉兴</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/绍兴`" class="link" target="_blank"
                >绍兴</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/温州`" class="link" target="_blank"
                >温州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/舟山`" class="link" target="_blank"
                >舟山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/金华`" class="link" target="_blank"
                >金华</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/台州`" class="link" target="_blank"
                >台州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/湖州`" class="link" target="_blank"
                >湖州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/丽水`" class="link" target="_blank"
                >丽水</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/衢州`" class="link" target="_blank"
                >衢州</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/四明山`" class="link" target="_blank"
                >四明山</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">江&nbsp;&nbsp;&nbsp;&nbsp;苏：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/南京`" class="link" target="_blank"
                >南京</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/苏州`" class="link" target="_blank"
                >苏州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/扬州`" class="link" target="_blank"
                >扬州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/无锡`" class="link" target="_blank"
                >无锡</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/常州`" class="link" target="_blank"
                >常州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/连云港`" class="link" target="_blank"
                >连云港</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/南通`" class="link" target="_blank"
                >南通</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/徐州`" class="link" target="_blank"
                >徐州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/镇江`" class="link" target="_blank"
                >镇江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/盐城`" class="link" target="_blank"
                >盐城</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/淮安`" class="link" target="_blank"
                >淮安</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/泰州`" class="link" target="_blank"
                >泰州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/宿迁`" class="link" target="_blank"
                >宿迁</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/太湖`" class="link" target="_blank"
                >太湖</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">山&nbsp;&nbsp;&nbsp;&nbsp;东：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/青岛`" class="link" target="_blank"
                >青岛</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/威海`" class="link" target="_blank"
                >威海</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/济南`" class="link" target="_blank"
                >济南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/烟台`" class="link" target="_blank"
                >烟台</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/日照`" class="link" target="_blank"
                >日照</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/泰安`" class="link" target="_blank"
                >泰安</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/淄博`" class="link" target="_blank"
                >淄博</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/临沂`" class="link" target="_blank"
                >临沂</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/潍坊`" class="link" target="_blank"
                >潍坊</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/济宁`" class="link" target="_blank"
                >济宁</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/东营`" class="link" target="_blank"
                >东营</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/聊城`" class="link" target="_blank"
                >聊城</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/枣庄`" class="link" target="_blank"
                >枣庄</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/莱芜`" class="link" target="_blank"
                >莱芜</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/菏泽`" class="link" target="_blank"
                >菏泽</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/滨州`" class="link" target="_blank"
                >滨州</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/德州`" class="link" target="_blank"
                >德州</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">安&nbsp;&nbsp;&nbsp;&nbsp;徽：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/合肥`" class="link" target="_blank"
                >合肥</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/芜湖`" class="link" target="_blank"
                >芜湖</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/马鞍山`" class="link" target="_blank"
                >马鞍山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/安庆`" class="link" target="_blank"
                >安庆</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/池州`" class="link" target="_blank"
                >池州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/宣城`" class="link" target="_blank"
                >宣城</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/巢湖`" class="link" target="_blank"
                >巢湖</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/六安`" class="link" target="_blank"
                >六安</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/蚌埠`" class="link" target="_blank"
                >蚌埠</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/滁州`" class="link" target="_blank"
                >滁州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/亳州`" class="link" target="_blank"
                >亳州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/淮南`" class="link" target="_blank"
                >淮南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/铜陵`" class="link" target="_blank"
                >铜陵</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/阜阳`" class="link" target="_blank"
                >阜阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/淮北`" class="link" target="_blank"
                >淮北</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/宿州`" class="link" target="_blank"
                >宿州</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/黄山`" class="link" target="_blank"
                >黄山</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">江&nbsp;&nbsp;&nbsp;&nbsp;西：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/南昌`" class="link" target="_blank"
                >南昌</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/九江`" class="link" target="_blank"
                >九江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/景德镇`" class="link" target="_blank"
                >景德镇</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/宜春`" class="link" target="_blank"
                >宜春</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/赣州`" class="link" target="_blank"
                >赣州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/上饶`" class="link" target="_blank"
                >上饶</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/吉安`" class="link" target="_blank"
                >吉安</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/鹰潭`" class="link" target="_blank"
                >鹰潭</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/抚州`" class="link" target="_blank"
                >抚州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/萍乡`" class="link" target="_blank"
                >萍乡</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/新余`" class="link" target="_blank"
                >新余</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/武功山`" class="link" target="_blank"
                >武功山</RouterLink
              >
            </li>
          </ul>
        </div>
      </dd>
    </dl>
    <dl class="listbox">
      <dt class="hd">华北东北</dt>
      <dd class="ct">
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">辽&nbsp;&nbsp;&nbsp;&nbsp;宁：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/大连`" class="link" target="_blank"
                >大连</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/沈阳`" class="link" target="_blank"
                >沈阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/葫芦岛`" class="link" target="_blank"
                >葫芦岛</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/丹东`" class="link" target="_blank"
                >丹东</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/鞍山`" class="link" target="_blank"
                >鞍山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/营口`" class="link" target="_blank"
                >营口</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/抚顺`" class="link" target="_blank"
                >抚顺</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/锦州`" class="link" target="_blank"
                >锦州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/本溪`" class="link" target="_blank"
                >本溪</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/盘锦`" class="link" target="_blank"
                >盘锦</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/辽阳`" class="link" target="_blank"
                >辽阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/朝阳`" class="link" target="_blank"
                >朝阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/铁岭`" class="link" target="_blank"
                >铁岭</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/阜新`" class="link" target="_blank"
                >阜新</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">河&nbsp;&nbsp;&nbsp;&nbsp;北：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/承德`" class="link" target="_blank"
                >承德</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/秦皇岛`" class="link" target="_blank"
                >秦皇岛</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/石家庄`" class="link" target="_blank"
                >石家庄</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/保定`" class="link" target="_blank"
                >保定</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/张家口`" class="link" target="_blank"
                >张家口</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/唐山`" class="link" target="_blank"
                >唐山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/邯郸`" class="link" target="_blank"
                >邯郸</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/廊坊`" class="link" target="_blank"
                >廊坊</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/邢台`" class="link" target="_blank"
                >邢台</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/沧州`" class="link" target="_blank"
                >沧州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/衡水`" class="link" target="_blank"
                >衡水</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/雄安新区`"
                class="link"
                target="_blank"
                >雄安新区</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews坝上`" class="link" target="_blank"
                >坝上</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">黑龙江：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/哈尔滨`" class="link" target="_blank"
                >哈尔滨</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/大兴安岭`"
                class="link"
                target="_blank"
                >大兴安岭</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/牡丹江`" class="link" target="_blank"
                >牡丹江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/大庆`" class="link" target="_blank"
                >大庆</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/齐齐哈尔`"
                class="link"
                target="_blank"
                >齐齐哈尔</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/黑河`" class="link" target="_blank"
                >黑河</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/伊春`" class="link" target="_blank"
                >伊春</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/佳木斯`" class="link" target="_blank"
                >佳木斯</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/鸡西`" class="link" target="_blank"
                >鸡西</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/鹤岗`" class="link" target="_blank"
                >鹤岗</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/双鸭山`" class="link" target="_blank"
                >双鸭山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/绥化`" class="link" target="_blank"
                >绥化</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/七台河`" class="link" target="_blank"
                >七台河</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">山&nbsp;&nbsp;&nbsp;&nbsp;西：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/太原`" class="link" target="_blank"
                >太原</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/大同`" class="link" target="_blank"
                >大同</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/运城`" class="link" target="_blank"
                >运城</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/晋城`" class="link" target="_blank"
                >晋城</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/临汾`" class="link" target="_blank"
                >临汾</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/晋中`" class="link" target="_blank"
                >晋中</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/长治`" class="link" target="_blank"
                >长治</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/忻州`" class="link" target="_blank"
                >忻州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/朔州`" class="link" target="_blank"
                >朔州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/阳泉`" class="link" target="_blank"
                >阳泉</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/吕梁`" class="link" target="_blank"
                >吕梁</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">内蒙古：</li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/呼和浩特`"
                class="link"
                target="_blank"
                >呼和浩特</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/赤峰`" class="link" target="_blank"
                >赤峰</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/呼伦贝尔`"
                class="link"
                target="_blank"
                >呼伦贝尔</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/鄂尔多斯`"
                class="link"
                target="_blank"
                >鄂尔多斯</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/锡林郭勒盟`"
                class="link"
                target="_blank"
                >锡林郭勒盟</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/阿拉善盟`"
                class="link"
                target="_blank"
                >阿拉善盟</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/包头`" class="link" target="_blank"
                >包头</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/通辽`" class="link" target="_blank"
                >通辽</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/乌兰察布`"
                class="link"
                target="_blank"
                >乌兰察布</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/兴安盟`" class="link" target="_blank"
                >兴安盟</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/乌海`" class="link" target="_blank"
                >乌海</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/巴彦淖尔`"
                class="link"
                target="_blank"
                >巴彦淖尔</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">吉&nbsp;&nbsp;&nbsp;&nbsp;林：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/长春`" class="link" target="_blank"
                >长春</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/吉林市`" class="link" target="_blank"
                >吉林市</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/延边`" class="link" target="_blank"
                >延边</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/白山`" class="link" target="_blank"
                >白山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/通化`" class="link" target="_blank"
                >通化</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/四平`" class="link" target="_blank"
                >四平</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/松原`" class="link" target="_blank"
                >松原</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/白城`" class="link" target="_blank"
                >白城</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/辽源`" class="link" target="_blank"
                >辽源</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/长白山`" class="link" target="_blank"
                >长白山</RouterLink
              >
            </li>
          </ul>
        </div>
      </dd>
    </dl>
    <dl class="listbox">
      <dt class="hd">华南华中</dt>
      <dd class="ct">
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">海&nbsp;&nbsp;&nbsp;&nbsp;南：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/三亚`" class="link" target="_blank"
                >三亚</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/海口`" class="link" target="_blank"
                >海口</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/琼海`" class="link" target="_blank"
                >琼海</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/五指山`" class="link" target="_blank"
                >五指山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/东方`" class="link" target="_blank"
                >东方</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/文昌`" class="link" target="_blank"
                >文昌</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/万宁`" class="link" target="_blank"
                >万宁</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/陵水`" class="link" target="_blank"
                >陵水</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/儋州`" class="link" target="_blank"
                >儋州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/乐东`" class="link" target="_blank"
                >乐东</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/定安`" class="link" target="_blank"
                >定安</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/屯昌`" class="link" target="_blank"
                >屯昌</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/昌江`" class="link" target="_blank"
                >昌江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/琼中`" class="link" target="_blank"
                >琼中</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/保亭`" class="link" target="_blank"
                >保亭</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/临高`" class="link" target="_blank"
                >临高</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/三沙`" class="link" target="_blank"
                >三沙</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/白沙`" class="link" target="_blank"
                >白沙</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/澄迈`" class="link" target="_blank"
                >澄迈</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">广&nbsp;&nbsp;&nbsp;&nbsp;西：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/桂林`" class="link" target="_blank"
                >桂林</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/北海`" class="link" target="_blank"
                >北海</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/南宁`" class="link" target="_blank"
                >南宁</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/柳州`" class="link" target="_blank"
                >柳州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/百色`" class="link" target="_blank"
                >百色</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/贺州`" class="link" target="_blank"
                >贺州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/梧州`" class="link" target="_blank"
                >梧州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/玉林`" class="link" target="_blank"
                >玉林</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/钦州`" class="link" target="_blank"
                >钦州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/防城港`" class="link" target="_blank"
                >防城港</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/河池`" class="link" target="_blank"
                >河池</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/崇左`" class="link" target="_blank"
                >崇左</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/来宾`" class="link" target="_blank"
                >来宾</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/贵港`" class="link" target="_blank"
                >贵港</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">广&nbsp;&nbsp;&nbsp;&nbsp;东：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/广州`" class="link" target="_blank"
                >广州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/深圳`" class="link" target="_blank"
                >深圳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/珠海`" class="link" target="_blank"
                >珠海</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/东莞`" class="link" target="_blank"
                >东莞</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/清远`" class="link" target="_blank"
                >清远</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/佛山`" class="link" target="_blank"
                >佛山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/惠州`" class="link" target="_blank"
                >惠州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/中山`" class="link" target="_blank"
                >中山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/肇庆`" class="link" target="_blank"
                >肇庆</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/韶关`" class="link" target="_blank"
                >韶关</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/河源`" class="link" target="_blank"
                >河源</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/江门`" class="link" target="_blank"
                >江门</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/汕头`" class="link" target="_blank"
                >汕头</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/湛江`" class="link" target="_blank"
                >湛江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/潮州`" class="link" target="_blank"
                >潮州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/阳江`" class="link" target="_blank"
                >阳江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/梅州`" class="link" target="_blank"
                >梅州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/茂名`" class="link" target="_blank"
                >茂名</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/汕尾`" class="link" target="_blank"
                >汕尾</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews揭阳`" class="link" target="_blank"
                >揭阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/云浮`" class="link" target="_blank"
                >云浮</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/潮汕地区`"
                class="link"
                target="_blank"
                >潮汕地区</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">湖&nbsp;&nbsp;&nbsp;&nbsp;南：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/张家界`" class="link" target="_blank"
                >张家界</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/长沙`" class="link" target="_blank"
                >长沙</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/岳阳`" class="link" target="_blank"
                >岳阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/湘西`" class="link" target="_blank"
                >湘西</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/怀化`" class="link" target="_blank"
                >怀化</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/郴州`" class="link" target="_blank"
                >郴州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/常德`" class="link" target="_blank"
                >常德</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/衡阳`" class="link" target="_blank"
                >衡阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/永州`" class="link" target="_blank"
                >永州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/湘潭`" class="link" target="_blank"
                >湘潭</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/株洲`" class="link" target="_blank"
                >株洲</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/益阳`" class="link" target="_blank"
                >益阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/邵阳`" class="link" target="_blank"
                >邵阳</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/娄底`" class="link" target="_blank"
                >娄底</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">河&nbsp;&nbsp;&nbsp;&nbsp;南：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/洛阳`" class="link" target="_blank"
                >洛阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/郑州`" class="link" target="_blank"
                >郑州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/开封`" class="link" target="_blank"
                >开封</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/焦作`" class="link" target="_blank"
                >焦作</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/南阳`" class="link" target="_blank"
                >南阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/安阳`" class="link" target="_blank"
                >安阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/平顶山`" class="link" target="_blank"
                >平顶山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/新乡`" class="link" target="_blank"
                >新乡</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/商丘`" class="link" target="_blank"
                >商丘</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/三门峡`" class="link" target="_blank"
                >三门峡</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/信阳`" class="link" target="_blank"
                >信阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/周口`" class="link" target="_blank"
                >周口</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/济源`" class="link" target="_blank"
                >济源</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/鹤壁`" class="link" target="_blank"
                >鹤壁</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/许昌`" class="link" target="_blank"
                >许昌</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/濮阳`" class="link" target="_blank"
                >濮阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/驻马店`" class="link" target="_blank"
                >驻马店</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/漯河`" class="link" target="_blank"
                >漯河</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">湖&nbsp;&nbsp;&nbsp;&nbsp;北：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/武汉`" class="link" target="_blank"
                >武汉</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/神农架`" class="link" target="_blank"
                >神农架</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/十堰`" class="link" target="_blank"
                >十堰</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/恩施`" class="link" target="_blank"
                >恩施</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/宜昌`" class="link" target="_blank"
                >宜昌</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/襄阳`" class="link" target="_blank"
                >襄阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/黄石`" class="link" target="_blank"
                >黄石</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/咸宁`" class="link" target="_blank"
                >咸宁</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/荆门`" class="link" target="_blank"
                >荆门</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/黄冈`" class="link" target="_blank"
                >黄冈</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/孝感`" class="link" target="_blank"
                >孝感</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/随州`" class="link" target="_blank"
                >随州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/荆州`" class="link" target="_blank"
                >荆州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/鄂州`" class="link" target="_blank"
                >鄂州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/潜江`" class="link" target="_blank"
                >潜江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/天门`" class="link" target="_blank"
                >天门</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/仙桃`" class="link" target="_blank"
                >仙桃</RouterLink
              >
            </li>
          </ul>
        </div>
      </dd>
    </dl>
    <dl class="listbox">
      <dt class="hd">西南西北</dt>
      <dd class="ct">
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">四&nbsp;&nbsp;&nbsp;&nbsp;川：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/成都`" class="link" target="_blank"
                >成都</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/阿坝`" class="link" target="_blank"
                >阿坝</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/雅安`" class="link" target="_blank"
                >雅安</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/乐山`" class="link" target="_blank"
                >乐山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/宜宾`" class="link" target="_blank"
                >宜宾</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/广安`" class="link" target="_blank"
                >广安</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/绵阳`" class="link" target="_blank"
                >绵阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/自贡`" class="link" target="_blank"
                >自贡</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/南充`" class="link" target="_blank"
                >南充</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/甘孜藏族自治州`"
                class="link"
                target="_blank"
                >甘孜藏族自治州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/攀枝花`" class="link" target="_blank"
                >攀枝花</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/广元`" class="link" target="_blank"
                >广元</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/德阳`" class="link" target="_blank"
                >德阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/泸州`" class="link" target="_blank"
                >泸州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/凉山`" class="link" target="_blank"
                >凉山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/遂宁`" class="link" target="_blank"
                >遂宁</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/眉山`" class="link" target="_blank"
                >眉山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/达州`" class="link" target="_blank"
                >达州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/内江`" class="link" target="_blank"
                >内江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/巴中`" class="link" target="_blank"
                >巴中</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink :to="`/cityviews/资阳`" class="link" target="_blank"
                >资阳</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">云&nbsp;&nbsp;&nbsp;&nbsp;南：</li>
            <li class="item">
              <RouterLink :to="`/cityviews/丽江`" class="link" target="_blank"
                >丽江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/昆明`" class="link" target="_blank"
                >昆明</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/大理`" class="link" target="_blank"
                >大理</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/西双版纳`"
                class="link"
                target="_blank"
                >西双版纳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/迪庆`" class="link" target="_blank"
                >迪庆</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/保山`" class="link" target="_blank"
                >保山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/楚雄州`" class="link" target="_blank"
                >楚雄州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/怒江`" class="link" target="_blank"
                >怒江</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/红河`" class="link" target="_blank"
                >红河</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/玉溪`" class="link" target="_blank"
                >玉溪</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/德宏`" class="link" target="_blank"
                >德宏</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/曲靖`" class="link" target="_blank"
                >曲靖</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/文山`" class="link" target="_blank"
                >文山</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink :to="`/cityviews/临沧`" class="link" target="_blank"
                >临沧</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/昭通`"
                class="link"
                target="_blank"
                >昭通</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/普洱`"
                class="link"
                target="_blank"
                >普洱</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">陕&nbsp;&nbsp;&nbsp;&nbsp;西：</li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/西安`"
                class="link"
                target="_blank"
                >西安</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/延安`"
                class="link"
                target="_blank"
                >延安</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/汉中`"
                class="link"
                target="_blank"
                >汉中</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/咸阳`"
                class="link"
                target="_blank"
                >咸阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/宝鸡`"
                class="link"
                target="_blank"
                >宝鸡</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/安康`"
                class="link"
                target="_blank"
                >安康</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/榆林`"
                class="link"
                target="_blank"
                >榆林</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/渭南`"
                class="link"
                target="_blank"
                >渭南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/商洛`"
                class="link"
                target="_blank"
                >商洛</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/铜川`"
                class="link"
                target="_blank"
                >铜川</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/青木川`"
                class="link"
                target="_blank"
                >青木川</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">西&nbsp;&nbsp;&nbsp;&nbsp;藏：</li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/拉萨`"
                class="link"
                target="_blank"
                >拉萨</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/林芝`"
                class="link"
                target="_blank"
                >林芝</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/日喀则`"
                class="link"
                target="_blank"
                >日喀则</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/阿里`"
                class="link"
                target="_blank"
                >阿里</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/山南`"
                class="link"
                target="_blank"
                >山南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/昌都`"
                class="link"
                target="_blank"
                >昌都</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/那曲`"
                class="link"
                target="_blank"
                >那曲</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">甘&nbsp;&nbsp;&nbsp;&nbsp;肃：</li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/兰州`"
                class="link"
                target="_blank"
                >兰州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/天水`"
                class="link"
                target="_blank"
                >天水</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/嘉峪关`"
                class="link"
                target="_blank"
                >嘉峪关</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/甘南`"
                class="link"
                target="_blank"
                >甘南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/酒泉`"
                class="link"
                target="_blank"
                >酒泉</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/张掖`"
                class="link"
                target="_blank"
                >张掖</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/武威`"
                class="link"
                target="_blank"
                >武威</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/平凉`"
                class="link"
                target="_blank"
                >平凉</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/陇南`"
                class="link"
                target="_blank"
                >陇南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/定西`"
                class="link"
                target="_blank"
                >定西</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/庆阳`"
                class="link"
                target="_blank"
                >庆阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/临夏`"
                class="link"
                target="_blank"
                >临夏</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/金昌`"
                class="link"
                target="_blank"
                >金昌</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/白银`"
                class="link"
                target="_blank"
                >白银</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">新&nbsp;&nbsp;&nbsp;&nbsp;疆：</li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/乌鲁木齐`"
                class="link"
                target="_blank"
                >乌鲁木齐</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/吐鲁番`"
                class="link"
                target="_blank"
                >吐鲁番</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/喀什`"
                class="link"
                target="_blank"
                >喀什</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/哈密`"
                class="link"
                target="_blank"
                >哈密</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/阿勒泰`"
                class="link"
                target="_blank"
                >阿勒泰</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/巴音郭楞`"
                class="link"
                target="_blank"
                >巴音郭楞</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/和田`"
                class="link"
                target="_blank"
                >和田</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/伊犁`"
                class="link"
                target="_blank"
                >伊犁</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/阿克苏`"
                class="link"
                target="_blank"
                >阿克苏</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/克拉玛依`"
                class="link"
                target="_blank"
                >克拉玛依</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/昌吉`"
                class="link"
                target="_blank"
                >昌吉</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/石河子`"
                class="link"
                target="_blank"
                >石河子</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/塔城`"
                class="link"
                target="_blank"
                >塔城</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/博尔塔拉`"
                class="link"
                target="_blank"
                >博尔塔拉</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/阿拉尔`"
                class="link"
                target="_blank"
                >阿拉尔</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/五家渠`"
                class="link"
                target="_blank"
                >五家渠</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/图木舒克`"
                class="link"
                target="_blank"
                >图木舒克</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/克孜勒苏柯尔克孜`"
                class="link"
                target="_blank"
                >克孜勒苏柯尔克孜</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/卡亚木库卡库卡`"
                class="link"
                target="_blank"
                >卡亚木库卡库卡</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/北屯`"
                class="link"
                target="_blank"
                >北屯</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/北疆`"
                class="link"
                target="_blank"
                >北疆</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/铁门关`"
                class="link"
                target="_blank"
                >铁门关</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/双河`"
                class="link"
                target="_blank"
                >双河</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/可克达拉`"
                class="link"
                target="_blank"
                >可克达拉</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/北疆`"
                class="link"
                target="_blank"
                >北疆</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/昆玉`"
                class="link"
                target="_blank"
                >昆玉</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/新星`"
                class="link"
                target="_blank"
                >新星</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/胡杨河`"
                class="link"
                target="_blank"
                >胡杨河</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">贵&nbsp;&nbsp;&nbsp;&nbsp;州：</li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/贵阳`"
                class="link"
                target="_blank"
                >贵阳</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/黔东南`"
                class="link"
                target="_blank"
                >黔东南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/遵义`"
                class="link"
                target="_blank"
                >遵义</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/安顺`"
                class="link"
                target="_blank"
                >安顺</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/黔南`"
                class="link"
                target="_blank"
                >黔南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/铜仁`"
                class="link"
                target="_blank"
                >铜仁</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/黔西南`"
                class="link"
                target="_blank"
                >黔西南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/毕节`"
                class="link"
                target="_blank"
                >毕节</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/六盘水`"
                class="link"
                target="_blank"
                >六盘水</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">宁&nbsp;&nbsp;&nbsp;&nbsp;夏：</li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/银川`"
                class="link"
                target="_blank"
                >银川</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/中卫`"
                class="link"
                target="_blank"
                >中卫</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/固原`"
                class="link"
                target="_blank"
                >固原</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/吴忠`"
                class="link"
                target="_blank"
                >吴忠</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/石嘴山`"
                class="link"
                target="_blank"
                >石嘴山</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="sub_list">
          <ul class="list_item patch_pl clrfix">
            <li class="item-special">青&nbsp;&nbsp;&nbsp;&nbsp;海：</li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/西宁`"
                class="link"
                target="_blank"
                >西宁</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/玉树`"
                class="link"
                target="_blank"
                >玉树</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/海南藏族自治州`"
                class="link"
                target="_blank"
                >海南藏族自治州</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/海西`"
                class="link"
                target="_blank"
                >海西</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/海北`"
                class="link"
                target="_blank"
                >海北</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/黄南`"
                class="link"
                target="_blank"
                >黄南</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/海东`"
                class="link"
                target="_blank"
                >海东</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/果洛`"
                class="link"
                target="_blank"
                >果洛</RouterLink
              >
            </li>
            <li class="item">
              <RouterLink
                :to="`/cityviews/可可西里`"
                class="link"
                target="_blank"
                >可可西里</RouterLink
              >
            </li>
            <li class="item last">
              <RouterLink
                :to="`/cityviews/青海湖`"
                class="link"
                target="_blank"
                >青海湖</RouterLink
              >
            </li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
</template>
