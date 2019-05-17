<template>
    <div>
        <my-header>
            <div class="so">
                <span @click="$router.go(-1)"><</span>
                <input type="text" placeholder="输入书名/作者/关键字">
                <span>搜素</span>
            </div>           
        </my-header>
        <div class="history">
            <li>如果蜗牛有爱情</li>
            <li>择爱记</li>
            <li>一夜弃妃</li>
            <li>诛仙</li>
            <li>豪门小老婆</li>
            <li>爱动乾坤</li>
            <li>别那么骄傲</li>
            <li>爱动乾坤</li>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
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
.so{
    width: 100%;
    height: 50px;
    display: flex;
    
}
input{
    width: 70%;
    height: 30px;
    margin: 7px 0;
    padding: 0 15px;
}
.history{
    width: 100%;
    height: 100px;
    float: left;
}
.history li{
    width: auto;
    height: 30px;
    border:1px solid #ccc;
    margin:10px 15px;
    line-height: 30px;
    text-align: center;
    float: left;
    padding: 5px 5px;
    
}
</style>