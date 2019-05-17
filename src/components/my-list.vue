<template>

    <dl :class="classname" @click="goToDetail(id)">
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            <span>{{title}}</span>
            <p>{{authors}}</p>
            <p>{{summary}}</p>
            <slot></slot>
        </dd>
    </dl>

    
</template>
<script>
export default {
    props: ['img','title','id','authors','summary','classname'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods: {
        goToDetail(id){
            // console.log(id);
            this.$router.push({name:'detail',params:{id:id},query:{title:this.title}});
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">


dl.downlist{
    width:33.33%;
    height: auto;
    text-align: center;
  background: #fff;

}
dl dt{
    width: 110px;
    height: 150px;  
    margin: 0 15px;
    
}
dl dt img{
    width: 100%;
    height: 100%;
}
dd{
    /* flex: 1; */
    height: 50px;   
    margin: 5px 0; 
}
dl.leftlist{ 
    width: 100%;
    height: 180px;
    display: flex;
    border-bottom: 1px solid #ccc; 
    margin: 10px 10px;
   

}
dl.leftlist img{
    width: 110px;
    margin: 10px 0;
}
dl.leftlist span{
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
   
}


</style>