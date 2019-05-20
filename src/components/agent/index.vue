<template>
    <div class="pageContainer">
        <div class="leftMenu">
            <left-menu></left-menu>
        </div>
        <div class="mainPage">
            <div :is="componentName"></div>
        </div>
    </div>
</template>
<script>
import leftMenu from './leftMenu/index.vue'
import showResult from './showResult/index.vue'
import chartReset from './chartReset/index.vue'
export default {
    name:'agent',
    components:{
        leftMenu,
        showResult,
        chartReset
    },
    data(){
        return {
            componentName:'showResult',
        }
    },
    methods:{},
}
</script>
<style lang="stylus" scoped>
    .pageContainer {
        width:100%;
        height:100%;
        overflow :hidden;
        position :relative;
        background:#f4f5f6;
        &>div {
            float:left;
        }
        &::after {
            content:'';
            display :block;
            clear:both;
        }
        .leftMenu {
            // box-sizing :border-box;
            width:200px;
            margin-right:10px;
            height:100%;
            background:#fff;
        }
        .mainPage {
            width:calc(100% - 210px);
            height:100%;
            background :#fff;
        }
    }
</style>
