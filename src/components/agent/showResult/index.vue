<template>
    <div class="resultPage">
        <div class="btnGroup">
            <btn-group></btn-group>
        </div>
    </div>
</template>
<script>
import btnGroup from './btnGroup/index.vue'
export default {
    name:'showResult',
    components:{
        btnGroup,
    },
}
</script>
<style lang="stylus" scoped>
    .resultPage {
        width:calc(100% - 40px);
        height:calc(100% - 20px);
        padding:10px 20px;
        overflow :hidden;
        position:relative;
        background:#fff;
        .btnGroup {
            width:100%;
            height:500px;
        }
    }
</style>
