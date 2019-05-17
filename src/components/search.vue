<template>
    <div class="search" @click="$router.push({path:'/search'})">
        <input type="text" placeholder=" 请输入书名/作者/关键字">    
        <span v-if="flag" @click.stop="$emit('change')">点击</span>
    </div>
</template>
<script>
export default {
    props:['flag'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.search{
    height: 50px;
    line-height: 50px;
    width: 100%;
    display: flex;
    padding: 0 10px;
    box-sizing: border-box; 
    justify-content: space-between;
    background: #fff;

}
input{
    width:80%;
    height: 30px;
    margin: 10px 10px;
    padding: 0 5px;
    border:1px solid #eee;
}
</style>