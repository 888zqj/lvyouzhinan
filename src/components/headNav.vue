<script setup>  
import { ref } from "vue";  
import { Search } from '@element-plus/icons-vue';  
import { useRouter } from "vue-router";  

const router = useRouter();  
// searchInput  
const searchInput = ref('');  

// search  
const searchThings = () => {  
  if (searchInput.value) {  
    router.replace(`/cityviews/${encodeURIComponent(searchInput.value)}`);  
  }  
};  

</script>  

<template>  
  <el-row :gutter="24">  
    <el-col :span="4" style="margin-top: 15px;">  
      <!-- logo  -->  
      <RouterLink to="/">  
    <img src="./icon.jpg" alt="旅行图标" class="transparent-icon"> 
      </RouterLink>  
    </el-col>  
    <el-col :span="16" style="margin-top: 15px;">  
      <el-input  
        v-model="searchInput"  
        placeholder="搜索热门城市..."  
        @keyup.enter="searchThings"  
        :prefix-icon="Search"  
        clearable  
      />  
    </el-col>  
  </el-row>  
</template>  

<style scoped>  
/* 这里可以添加一些样式，来美化输入框和布局 */  
.my {  
  width: 100%; /* 使输入框充满空间 */  
  max-width: 600px; /* 给输入框最大宽度限制 */  
}  
.transparent-icon {  
    background-color: transparent; /* 确保使用透明背景 */  
    opacity: 0.8; /* 这里的值可以根据需要调整，1表示不透明，0表示完全透明 */  
    width: 140px; /* 根据需要设定尺寸 */  
    height: auto; /* 自适应高度 */  
}
</style>