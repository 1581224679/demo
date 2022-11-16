<template>
  <div class="header">
      <div class="search">
        <button></button>
        <input type="text" placeholder="搜索对话框" name="" vlaue=""/>
      </div>
  </div>
</template>

<script>
export default {
  name:'Header'
}
</script>

<style lang="less">
    .header{
    width: 100%;
    height: 100px;
    background-color:#4343f1;
    position:relative;
      .search{
        position:absolute;
        margin: 30px 35px;
        width: 300px;
        height: 40px;
        display: flex;
        // background-color: red;
        input{
          float:right;
          width: 250px;
          height: 40px;
          font-size:18px;
          border-radius:0 20px 20px 0;
          border-left: 0;
        }
        button{
          float: left;
          width: 50px;
          height: 40px;
          background-image: url('../../assets/tubiao/搜索.png');
          background-size: 20px 20px;
          background-repeat: no-repeat;
          background-position: center center;
          border-radius: 20px 0 0 20px;
          border-right: 0;
        }
      }
    }

</style>