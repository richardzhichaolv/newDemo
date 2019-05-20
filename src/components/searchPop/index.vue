<template>
    <div id="searchPop">        
        <el-button size="mini" type="success" @click="addTabsLabel">add tabs</el-button>
        <el-tabs v-model="tabsLabelName" type="card" closable @tab-remove="removeTabLabel">
            <el-tab-pane v-for="(tlItem,tlIndex) in tabLabelOption" :key="tlIndex" :label="tlItem.label" :name="tlItem.name">
                {{tlItem.content}}
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import * as echarts from 'echarts'

export default {
    name:'searchPop',
    data(){
        return {
            tabsLabelName:'1',
            tabLabelOption:[],
        }
    },
    mounted(){
        
    },
    created(){
        let self = this;
        self.setTabLabelOption();
    },
    methods: {
        setTabLabelOption(){
            let arr = [];
            for(let i =1;i<5;i++){
                arr.push({label:'tab'+i,name:i+'',content:'tab'+i+'-content'});
            }
            this.tabLabelOption = arr;
        },
        addTabsLabel(){
            console.log("add");
            let len = this.tabLabelOption.length;
            let num = Number(this.tabLabelOption[len-1].name) +1;
            this.tabLabelOption.push({label:'tab'+num,name:num+'',content:'tab'+num+'-content'});
        },
        removeTabLabel(targetName){
            console.log(targetName);
        },
    }
}
</script>
<style lang="stylus" scoped>
    #searchPop {
        width:auto !important;
        height:100%;
        position:relative;
        overflow:hidden;
        background:#fff;
        color:#000;

    }
</style>
<style>
    #searchPop .el-button {
        margin-left:20px;
        text-align:left;
    }
</style>

