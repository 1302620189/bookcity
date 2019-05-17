<template>
    <header>
       <slot></slot>
    </header>
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
*{
    margin: 0;
    padding: 0;
    list-style: none;
}

header{
    height: 50px;
    width: 100%;
    display: flex;
    background: #eee;
    line-height: 50px;
   
}
header span{
    width: auto;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 0 10px;

}
header ul{
    flex: 1;
    display: flex;
}
header ul li{
    flex: 1;
    text-align: center;
    line-height: 44px;
}
header ul li.router-link-exact-active{
    color: red;
  

}

</style>