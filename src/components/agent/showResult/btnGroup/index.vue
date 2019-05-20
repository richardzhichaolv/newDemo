<template>
    <div class="btnComponent">
        <div class="pageTitle">数据统计条件选择</div>
        <div class="rowDiv">
            <div class="rowTitle">时间选择：</div>
            <el-radio-group v-model="timeValue">
                <el-radio-button v-for="(toItem,toIndex) in timeOption" :key="toIndex" :label="toItem.label">{{toItem.value}}</el-radio-button>
            </el-radio-group>
        </div>
        <div class="rowDiv">
            <div class="rowTitle"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'btnGroup',
    data(){
        return {
            timeValue:'',
            timeOption:[
                {label:'3',value:'近3个月'},
                {label:'6',value:'近6个月'},
                {label:'12',value:'近12个月'},
            ],
        }
    }
}
</script>
<style lang="stylus" scoped>
    .btnComponent {
        width:100%;
        height:100%;
        overflow :hidden;
        position:relative;
        background:#fff;
    }
</style>
