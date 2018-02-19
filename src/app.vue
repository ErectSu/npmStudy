<style scoped lang="less">
    @import 'styles/common.less';
</style>
<template>
    <div class="msg-wrapper">
        <span>hello!</span>
        <span class="account">{{data.name}}</span>
        <p>你来自{{data.country}}</p>
    </div>
</template>
<script>
    export default {
        name:'Msg',
        data () {
            return {}
        },
        props:{
            data:{
                type:Object
            }
        },
        methods: {

        },
        created(){
            let that = this;
        }
    }
</script>
