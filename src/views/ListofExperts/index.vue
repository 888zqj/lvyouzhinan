
<style>  
body {  
  background-color: #f0f2f5; /* 浅灰色背景 */  
  font-family: 'Arial', sans-serif; /* 清晰的字体 */  
}  

.from, .from1 {  
  border-radius: 20px;  
  border: #2c3e50 1px solid;  
  width: 700px;  
  height: 260px;  
  overflow: auto;  
  padding: 35px 60px;  
  margin: 30px auto; /* 自动水平居中 */  
  background-color: #ffffff; /* 白色背景 */  
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影 */  
}  

.from1 {  
  height: 200px; /* 调整高度 */  
}  

.button {  
  height: 40px;  
  width: 120px;  
  margin: 20px auto; /* 居中按钮 */  
  display: block; /* 使按钮表现为块级元素 */  
}  

p {  
  text-align: center; /* 文本居中 */  
  font-size: 20px;  
  color: #2c3e50; /* 文本颜色 */  
  margin-top: 20px;  
}  

.el-form-item {  
  margin-bottom: 20px; /* 适当的间距 */  
}  

.el-input, .el-date-picker {  
  border-radius: 5px; /* 圆角输入框 */  
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* 添加阴影 */  
}  

.el-button {  
  background-color: #e74c3c; /* 红色按钮 */  
  color: white; /* 白色文本 */  
  border: none; /* 去除边框 */  
  transition: background-color 0.3s; /* 过渡效果 */  
}  

.el-button:hover {  
  background-color: #c0392b; /* 鼠标悬停变深 */  
}  
</style>

<template>  
  <div>  
    <div class="form-container">  
      <el-form :model="form" label-width="auto">  
        <el-form-item label="目的地">  
          <el-input v-model="form.name" placeholder="请输入目的地" />  
        </el-form-item>  

        <el-form-item label="人数">  
          <el-input v-model="form.region" placeholder="请输入人数" />  
        </el-form-item>  

        <el-form-item label="预期花费">  
          <el-input v-model="form.money" placeholder="请输入预算" />  
        </el-form-item>  

        <el-form-item label="出行日期">  
          <el-date-picker  
            v-model="value2"  
            type="datetimerange"  
            start-placeholder="开始日期"  
            end-placeholder="结束日期"  
            format="YYYY-MM-DD HH:mm:ss"  
            date-format="YYYY/MM/DD ddd"  
            time-format="A hh:mm:ss"  
          />  
        </el-form-item>  

        <el-form-item>  
          <el-button type="danger" class="button" @click="sendMessage" round>生成方案</el-button>  
        </el-form-item>  
      </el-form>  
    </div>  

    <div class="travel-plan">  
      <h3>下面为您的旅游计划:</h3>  
      <div v-if="loading" class="loading-message">正在生成，请耐心等待...</div>  
      <div v-if="botReply && !loading">  
        <div class="reply-box">  
        
          <p v-html="formatReply(botReply)"></p>  
        </div>  
      </div>  
    </div>  
  </div>  
</template>  

<script lang="ts" setup>  
import { ref, reactive, computed } from 'vue';  
import axios from 'axios';  

const form = reactive({  
  name: '', // 目的地  
  region: '', // 人数  
  money: '', // 预算  
});  

const value2 = ref([]);  
const botReply = ref('');  
const loading = ref(false); // 新增状态变量  

const query = computed(() => {  
  return `请推荐${form.name}${form.region}人游,日期为从${value2.value[0]}到${value2.value[1]}，预算为${form.money}的旅游计划,包括吃喝玩乐`;  
});  

const formatReply = (reply: string) => {  
  return reply.replace(/\n/g, '<br/>'); // 将换行符替换为 <br/> 标签  
};  

const sendMessage = async () => {  
  if (query.value.trim() === '') return; // 确保用户输入非空  

  loading.value = true; // 开始加载状态  

  try {  
    const response = await axios.post('https://api.coze.cn/v3/chat', {  
      'bot_id': '7422211497469886499',  
      'user_id': '12341234',  
      stream: true,  
      additional_messages: [  
        {  
          role: "user",  
          content: query.value,  
          content_type: "text"  
        }  
      ]  
    }, {  
      headers: {  
        'Authorization': 'Bearer pat_C1y7TIyHoMo2mrCg3CpHn7MtmvIBeIacTItLhk92PPDL0wYArvETSRduQ6hbhJlr',  
        'Content-Type': 'application/json'  
      }  
    });  

    if (response.data) {  
      try {  
        const messages = response.data.split('event:conversation.message.completed');  
        let finalContent = "";  

        messages.forEach(message => {  
          if (message.includes('data:')) {  
            const jsonStringStart = message.indexOf("{");  
            const jsonStringEnd = message.lastIndexOf("}") + 1;  

            if (jsonStringStart !== -1 && jsonStringEnd !== -1) {  
              const jsonString = message.substring(jsonStringStart, jsonStringEnd);  

              try {  
                const jsonData = JSON.parse(jsonString);  

                if (jsonData.type === 'answer' && jsonData.content) {  
                  finalContent = jsonData.content.replace(/\n/g, '\n');  
                }  
              } catch (jsonError) {  
                console.error("JSON 解析错误：", jsonError);  
              }  
            }  
          }  
        });  

        botReply.value = finalContent; // 使用单元格元素显示内容  
      } catch (error) {  
        console.error("处理数据时出错：", error);  
      }  
    }  
  } catch (error) {  
    console.error('发送消息失败:', error);  
  } finally {  
    loading.value = false; // 操作完成，停止加载状态  
  }  
};  
</script>  

<style scoped>  
.form-container {  
  margin-bottom: 20px;  
}  

.travel-plan {  
  border: 1px solid #e4e7ed;  
  border-radius: 4px;  
  padding: 20px;  
  background-color: #f9f9f9;  
}  

.loading-message {  
  color: #ff6600; /* 加载消息颜色 */  
  font-size: 1.2em;  
  font-weight: bold;  
  text-align: center;  
  margin: 20px 0;  
}  

.reply-box h4 {  
  margin-top: 0;  
}  

.reply-box p {  
  font-size: 1.1em;  
  line-height: 1.5;  
  color: #333;  
}  
</style>