<template>
    <div>
        <my-header>
            <span>菜单</span>           
            <ul>
                <router-link to="/bookcity" tag="li">书城</router-link>
                <router-link to="/bookshelf" tag="li">书架</router-link>
            </ul>
            <span>个人</span>
        </my-header>      
        <section>
            <search :flag="flag"/>
            <div class="swiper-container banner">
                <div class="swiper-wrapper">
                     <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
                        <img :src="item.ad_pic_url" alt="">
                    </div>
                </div>
            </div>
            <div class="nav">  
                <li>
                    <span></span>
                    <p>限免</p>
                </li>
                 <li>
                   <span></span>
                    <p>女生</p>
                </li>
                 <li>
                   <span></span>
                    <p>男生</p>
                </li>
                 <li>
                    <span></span>
                    <p>分类</p>
                </li>
                 <li>
                    <span></span>
                    <p>排行</p>
                </li>
            </div>

            <div>
                <div class="top">
                    <h3>本周最火</h3>
                </div>
                <div class="content">
                    <!-- <dl>
                        <dt><img src="" alt=""></dt>
                        <dd>书名</dd>
                    </dl> -->
                    <my-list v-for="(item1,index1) in hotList" :key="index1"
                    :img="item1.cover"
                    :title="item1.title"
                    
                    classname="downlist"
                    ></my-list>
                </div>
            </div>

             <div>
                <div class="top">
                    <h3>重磅推荐</h3>
                </div>
                <div class="content">   
                    <my-list v-for="(item1,index1) in remodList" :key="index1"
                    :img="item1.cover"
                    :title="item1.title"
                    :authors="item1.authors"
                    :summary="item1.summary"
                    :id="item1.fiction_id"
                   classname="leftlist"
                    ></my-list>
                </div>
            </div>       
        </section>
    </div>
</template>
<script>
import Swiper from 'swiper';

export default {
    props: {},
    components: {},
    data() {
        return {
            flag:false,
            bannerList:[],
            hotList:[],
            remodList:[]
        };
    },
    computed: {},
    methods: {},
   
     created() {
        console.log(this.$http);
        this.$http.get('/api/home').then((res)=>{
            console.log(res.data);
            this.bannerList = res.data.items[0].data.data;
            this.hotList = res.data.items[1].data.data;
            this.remodList = res.data.items[2].data.data;
            //数据更新之后，dom加载成功之后
            this.$nextTick(()=>{
                new Swiper('.banner');
            });
        });
    },
    mounted() {}
};
</script>
<style scoped lang="">
section{
    width: 100%; 
    height: auto;
    background: #eee; 
}
.banner{
    width: 100%;
    height: 180px;
}
.nav{
  width:100%;
  height: 85px;
  display: flex;
  background: #fff;
  margin: 10px 0; 
}
.nav li{
    width: 20%;
    height: 80px;
    margin: 0 10px; 
}
.nav li span{
    width: 40px;
    height: 40px;
    border-radius: 50%;  
    display: block;
    margin: 10px 10px;
}
.nav li p{
    widows: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
}
.nav li span:nth-child(1){
    background: tomato;
}


.top{
   width: 100%;
    height: 50px;
    line-height: 40px;
    background: #fff;  
}
.top h3{
    width: 90%;
    margin: 0 15px;
    border-bottom:1px solid #ccc;
}
.content{
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    /* margin: 5px 0; */

}






</style>