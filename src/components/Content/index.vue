<template>
  <div class="content">
    <div class="pic">
      <img :src="require('../../assets/'+information.imgUrl)" alt=""/>
    </div>
    <div class="mid">
      
      <h4>{{information.name}}</h4>
      <p>{{information.message}}</p>
    </div>
    <div class="time">
      <p>{{information.time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'Content',
  props:{
    information:Object
  }
  
}
</script>

<style lang="less">
  .content{
    width: 100%;
    height: 100px;
    background-color: #e8e2e2;
    display: flex;
    margin-top:2px;
    position: relative;
    .pic{
      margin:10px 10px;
      background-color:#fff;
      border-radius: 50%;
      img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      }
      
    }
    .mid{
        margin: 25px 0;
        p{
          margin: 20px 0;
          font-size: 14px;
          line-height: 14px;
          color:#4e4c4c;
        }
      }
    .time{
      width: 50px;
      height: 12px;
      position:absolute;
      right:8px;
      bottom: 20px;
      font-size: 12px;
      line-height: 12px;
      color:#4e4c4c
    }
  }

</style>