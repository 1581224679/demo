<template>

    <div id="tab_bar">
      <div class="tab_bar_item">
        <img src="../../assets/tubiao/xinxi.png">
        <p>工作</p>
      </div>
      <div class="tab_bar_item">
        <img src="../../assets/tubiao/tongzhi.png">
        <p>消息</p>
      </div>
      
      <div class="tab_bar_item">
        <img src="../../assets/tubiao/shenhe.png">
        <p>我的</p>
      </div>
    </div>
 
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style lang="less">
  #tab_bar{
    width: 100%;
    height: 50px;
    position:fixed;
    bottom: 0;
    background-color: #f6f6f6;
  }
  .tab_bar_item{
    float:left;
    width:33%;
    text-align:center;
    font-size:14px;
    img{
      width: 28px;
      height: 28px;
    }
  }
  
</style>