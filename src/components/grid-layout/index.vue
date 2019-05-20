<template>
    <div  style="width:100%;height:100%;position:relative;overflow:hidden;">
        <div class="wrapper">
            <div class="item item1">1</div>
            <div class="item item2">2</div>
            <div class="item item3">3</div>
            <div class="item item4">4</div>
            <div class="item item5">5</div>
            <div class="item item6">6</div>
            <div class="item item7">7</div>
            <div class="item item8">8</div>
        </div>        
    </div>
</template>
<script>
export default {
    name:'gridLayOut',
    data(){
        return {

        }
    },
    methods:{
        getWidthHeight(){
            let w = document.body.clientWidth;
            let h = document.body.clientHeight;
        },
    },
}
</script>
<style lang="stylus" scoped>
    .wrapper{
            display:grid;
            grid-template-columns:1fr 1fr 1fr 1fr;
            grid-template-rows:1fr 1fr 1fr;
        }
        .item1 {
            grid-column-start: 1;
            grid-column-end: 2;
        }
        
        .item2 {
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 3;
        }
        .item3 {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 4;
            grid-column-end: 5;
        }
        .item4 {
            grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 1;
            grid-column-end: 2;
        }
        .item7 {
            grid-row-start: 3;
            grid-row-end: 4;
            grid-column-start: 2;
            grid-column-end: 4;
        }
        .wrapper>div:last-child{
            background:#ff0;
        }
        .wrapper>div:nth-child(1){
            background:#00f;
        }
        .wrapper>div:nth-child(2){
            background:#0f0;
        }
        .wrapper>div:nth-child(3){
            background:#f0f;
        }
        .wrapper>div:nth-child(4){
            background:#f00;
        }
        .wrapper>div:nth-child(5){
            background:#0ff;
        }
        .wrapper>div:nth-child(6){
            background:#09f;
        }
        .wrapper>div:nth-child(7){
            background:#90f;
        }
</style>

