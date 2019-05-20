<template>
    <div id="testCode">
        <el-container>
            <el-aside style="width:200px;height:100%">
                <el-radio-group v-model="menuName">
                    <el-radio-button type="success" v-for="(item,index) in menuList" :key="index" :label="item.value">{{item.label}}</el-radio-button>
                </el-radio-group>
            </el-aside>
            <el-main>
                <div :is="menuName"></div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import modelTrain from '../modelTrain'
import searchPop from '../searchPop'
import gridLayOut from '../grid-layout'

export default {
    name:'testCode',
    components:{
        modelTrain,
        searchPop,
        gridLayOut
    },
    data(){
        return {
            menuName:'modelTrain',
            menuList:[
                {label:'模型训练table',value:'modelTrain'},
                {label:'模糊查询',value:'searchPop'},
                {label:'grid布局',value:'gridLayOut'},
            ],
        }
    },
}
</script>
<style lang="stylus" scoped>
    #testCode {
        width:auto !important;
        height:100%;
        position:relative;
        overflow: hidden;
    }
</style>
<style>
    #testCode .el-aside .el-radio-group .el-radio-button .el-radio-button__inner {
        width:200px;
        border:none;
        text-align:cneter;
    }
</style>

