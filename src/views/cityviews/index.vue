<template>  
  <div class="attraction-list">  
    <h1>城市景点</h1>  
    <ul>  
      <li v-for="attraction in attractions" :key="attraction.id" class="attraction-item">  
        <h2>{{ attraction.name }}</h2>  
        <p><strong>地点:</strong> {{ attraction.location }}</p>  
        <p><strong>距离:</strong> {{ attraction.distance }}</p>  
        <p><strong>评论数量:</strong> {{ attraction.comment_num }}</p>  
        <p><strong>评论评分:</strong> {{ attraction.comment_score }}</p>  
        <p><strong>热门评论评分:</strong> {{ attraction.hot_comment_score }}</p>  
        <p><img :src="attraction.picture" alt="Attraction Image" class="attraction-image" /></p>  
        <p><strong>是否免费:</strong> {{ attraction.free_or_not }}</p>  
        <p><strong>价格:</strong> {{ attraction.price }}</p>  
        <p><strong>信息:</strong> {{ attraction.class_information }}</p>  
        <p><strong>是否五A:</strong> {{ attraction.five_a_or_not }}</p>  
      </li>  
    </ul>  
  </div>  
</template>  

<script setup>  
import { ref, onMounted } from 'vue';  
import { useRoute, useRouter } from 'vue-router'; // 引入 useRouter  
import axios from 'axios';  

const route = useRoute();  
const router = useRouter(); // 获取 router 实例  
const cityName = ref(route.params.city);  
const attractions = ref([]);  

const fetchAttractions = () => {  
  axios.get(`http://59.110.231.96:8000/attractions/${cityName.value}`)  
    .then(response => {  
      attractions.value = response.data;  

      // 如果返回的数据为空，跳转到 not found 页面  
      if (!attractions.value.length) {  
        router.push({ path: '/notfound' });  
      }  
    })  
    .catch(error => {  
      console.error("Error fetching attractions:", error);  
      // 发生错误时可跳转到 not found 页面  
      router.push({ path: '/notfound' });  
    });  
};  

onMounted(fetchAttractions);  
</script>  

<style scoped>  
.attraction-list {  
  max-width: 1200px;  
  margin: 0 auto;  
  padding: 20px;  
}  

.attraction-item {  
  border: 1px solid #ddd;  
  border-radius: 8px;  
  padding: 15px;  
  margin-bottom: 20px;  
  background-color: #f9f9f9;  
}  

.attraction-image {
  width: 55%;
  height: auto;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: block; /* 确保元素是块级元素 */
}

h1, h2 {  
  color: #333;  
}  

p {  
  margin: 5px 0;  
}  

strong {  
  color: #555;  
}  
</style>