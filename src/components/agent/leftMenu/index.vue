<template>
    <div class="menu">
        <div class="collapseMenuBtn" @click="isCollapse=!isCollapse">
            <span style="display:inine-block;width:28px;height:28px;" :class="{isCollapse:isCollapse}">|||</span>
        </div>
        <el-menu
        :default-active='defaultActive'
        class="menuTree"
        :collapse="isCollapse"
        size="mini"
        
        >
            <el-menu-item @click="toggleMenu(moItem.value)" v-for="(moItem,moIndex) in menuOption" :key="moIndex" :index="moItem.value">{{moItem.label}}</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name :'leftMenu',
    data(){
        return {
            defaultActive:'showResult',
            isCollapse:false,
            menuOption:[
                {label:'数据管理',value:'showResult'},
                {label:'图表编排',value:'chartReset'}
            ],
        }
    },
    created(){
        
    },
    methods:{
        toggleMenu(name){
            this.$parent.componentName = name
            
        },
    },
}
</script>
<style lang="stylus" scoped>
    .menu {
        width:100%;
        height:100%;
        position :relative;
        overflow:hidden;
        .collapseMenuBtn {
            width:100%;
            height:28px;
            line-height :28px;
            cursor :pointer;
            border-bottom:1px solid #e5e5e5;
            .isCollapse {                
                transition :all lenear .5s;
                transform: rotate(90deg);
            }
        }
    }
</style>