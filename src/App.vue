<template>
  <div id="app">
    <Header></Header>
    <Content v-for="item in contentList" :key="item.name" :information="item"></Content>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/index.vue'
import Header from './components/Header/index.vue'
import Content from './components/Content/index.vue'
export default {
  name: 'App',
  components: {
    TabBar,
    Header,
    Content
  },
  data(){
    return{
      contentList:[
        {
          imgUrl:'3.jpg',
          name:'第一图书馆',
          message:'同学，请问你什么时候能到岗',
          time:'18:00'
        },
        {
          imgUrl:'1.jpg',
          name:'第二图书馆',
          message:'同学，不好意思我们招满了',
          time:'17:00'
        },
        {
          imgUrl:'2.jpg',
          name:'计算机学院',
          message:'老师号，请问学院办公室在哪',
          time:'8月10日'
        },
        {
          imgUrl:'3.jpg',
          name:'政管学院',
          message:'老师号，请问学院号需要志愿者嘛',
          time:'8月10日'
        }
      ]
    }
  }

}
</script>

<style lang="less">
    @import './assets/css/base.css';
  
</style>
