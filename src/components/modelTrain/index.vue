<template>
    <div id="modelTrain">
        <div class="configDiv" style="text-align:left;">
            请输入总数量：<el-input placeholder="请输入总样本数量" size="mini" v-model.trim="totalNum"></el-input>
            最小值：<el-input placeholder="最小值" size="mini" v-model="minNum" disabled></el-input>
            最大值：<el-input placeholder="最大值" size="mini" v-model="maxNum" disabled></el-input>            
        </div>        
        <el-table size="mini" :data="classificationTableData" fit style="width:100%;text-align:center;" :row-class-name="tableRowClassName" stripe>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <i class="el-icon-circle-plus" @click="addRow(scope.$index)"></i>
                    <i class="el-icon-delete" @click="delRow(scope.$index)"></i>
                </template>                
            </el-table-column>
            <el-table-column label="区间段" width='400'>
                <template slot-scope="scope">
                    <el-input size="mini" placeholder="请输入" v-model.trim="scope.row.min" @blur="checkInterval(scope.$index,0)"></el-input>
                    -
                    <el-input size="mini" placeholder="请输入" v-model.trim="scope.row.max" @blur="checkInterval(scope.$index,1)"></el-input>
                    <span v-if="scope.row.showIntervalTip">{{scope.row.intervalTip}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="actualSampleSize" label="实际样本数量" width="200"></el-table-column>
            <el-table-column prop="trainingSampleSize" label="参与训练的样本数量" width="200"></el-table-column>
            <el-table-column label="权重设置" width="300">
                <template slot-scope="scope">
                    <el-input size="mini" v-model.trim="scope.row.weight" @blur="weightSetBlur(scope.$index)">
                        <template slot="append">%</template>
                    </el-input>
                </template>
            </el-table-column>
            <el-table-column label="校验" width="300">
                <template slot-scope="scope">
                    <i class="el-icon-circle-check" style="color:#5ecc49;" v-if="scope.row.actualSampleSize>=scope.row.trainingSampleSize"></i>
                    <span v-else style="color:#fc5043;">
                        <i class="el-icon-circle-close"></i>
                        实际样本数量不足
                    </span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name:'modelTrain',
    data(){
        return {
            intervalArr:[],
            totalNum:null,
            maxNum:100,
            minNum:10,
            tableData:[
                {min:null,max:null,showIntervalTip:false,intervalTip:null,actualSampleSize:0,weight:0},
            ],
        }
    },
    computed:{
        classificationTableData(){
            let self = this;
            self.tableData.forEach(key => {
                self.$set(key , "trainingSampleSize" , key.weight * self.totalNum /100);
            });
            return self.tableData;
        },
    },
    created(){
        let self = this;
        self.getNum();
    },
    methods:{
        getNum(){
            let arr = [];
            for(let i=0;i<400;i++){
                arr.push(parseInt(Math.random()*1000));
            }
            this.intervalArr = arr.filter(key => key % 2 !=0 && key>=5 );
            this.intervalArr.unshift(1000);
            this.totalNum = this.intervalArr.length;
            this.intervalArr.sort((a,b) => a-b );
            this.minNum = this.intervalArr[0];
            this.maxNum = this.intervalArr[this.totalNum-1];
            this.tableData[0].min = this.minNum;
            this.tableData[this.tableData.length-1].max = this.maxNum;
        },
        tableRowClassName({row,rowIndex}){
            if(rowIndex % 2 == 0){
                return 'colorRow'
            }
            return '';
        },
        // weightSetBlur(index){
        //     let targetObj = this.classificationTableData[index];
        //     targetObj.trainingSampleSize = this.totalTrainingSampleSize * targetObj.weightPercent / 100;
        //     console.log(this.classificationTableData);
        // },
        addRow(index){
            let self = this;
            let max = self.tableData[index].max;
            let obj =  {min:null,max:max,showIntervalTip:false,intervalTip:null,actualSampleSize:0,weight:0};
            self.tableData.splice(index+1,0,obj);
            self.tableData[index].max = null;
        },
        delRow(index){
            let self = this;
            let max = self.tableData[index].max;
            let min = self.tableData[index].min;
            if(self.tableData.length>1){
                self.tableData.splice(index,1);
                if(index>0){                
                    self.tableData[index-1].max = max;
                }else{
                    self.tableData[index].min = min;
                }  
            }else{
                this.$message({
                    message:'不可删除',
                    type:'error'
                });
            }
                      
        },
        checkInterval(index,state){
            if(state == 0){
                //min输入框
                if(index == 0){
                    console.log("hello");
                }
            }
        },
    },
}
</script>
<style>
    #modelTrain {
        width:auto !important;
        height:100%;
        position:relative;
        overflow:hidden;
        background:#fff;
        color:#000;
    }
    #modleTrain .el-table .colorRow {
        background:#152d4b;
        color:#a2bfe5;
    }
    #modelTrain .configDiv .el-input{
        width:200px;
    }
    #modelTrain .el-table .el-input{
        width:100px;
    }
</style>

