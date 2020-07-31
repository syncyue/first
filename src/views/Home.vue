<template>
  <div class="home">
    <h2>这是home主页</h2>
    <h4>我是引入进来的字体图标</h4>
    <div class="iconfont icon-icon_personal"></div>
    <span class="iconfont icon-gouwuchezhengpin
"></span>
<span class="iconfont icon-shouyeshouye"></span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios'
import request from '../config/request'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    this.getWidth();
    this.getDataList();
  
  },
  methods:{
    getWidth(){
      console.log('屏幕的宽度为:'+window.innerWidth);
      console.log('高度为；'+window.innerHeight);
      // let html = document.querySelector('html');
      // html.style.fontSize = 20 + 'px';
      // console.log(html);

    },
    getDataList(){
       request({
         
       })
      
    }
    

    
  
    
  }
}
</script>
<style lang="less">

h2{
  font-size: 0.75rem;
}
  
</style>