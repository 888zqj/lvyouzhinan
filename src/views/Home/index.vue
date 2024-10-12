<script setup>
//根据现在的网址实时更新渲染的内容
</script>

<template>
  <el-container>
    <el-header>
   
      
      <head-nav/>


    </el-header>
    <el-container>
      <el-aside width="80px">
      


        <aside-nav/>
     



      </el-aside>
      <el-main class="maxSize" id="content">
      
        <RouterView :key="$route.fullPath"/>

      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.maxSize {
  height: 700px;
  overflow-y: scroll;
}
</style>