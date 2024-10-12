<script setup xmlns="http://www.w3.org/1999/html">  
import { computed, onBeforeMount, onMounted, ref } from 'vue'  
import { queryUserPostControl, postDelete, controlUserCollectOrLike, unFollow, removeFan } from "@/apis/main";  
import { ElMessage } from 'element-plus'  
import { useUserStore } from "@/stores/user";  
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'  
import { useTableStore } from "@/stores/tableStore";  
import { InfoFilled } from "@element-plus/icons-vue";  
import { useRouter } from "vue-router";  

const router = useRouter();  
const userStore = useUserStore();  
const checkLogin = () => {  
  if (!userStore.userInfo.id) {  
    router.replace('/login');  
  }  
}  

onBeforeMount(() => checkLogin());  

const locale = zhCn;  // 配置全局语言  
const tableStore = useTableStore();  
const loading = ref(true);  
const value = ref('posts');  
const options = ref([  
  {  
    label: '帖子管理',  
    options: [  
      { value: 'posts', label: '个人帖子管理' },  
      { value: 'fans', label: '粉丝管理' },  
      { value: 'follow', label: '关注管理' },  
    ],  
  },  
]);  

const type = computed(() => (value.value === 'posts' || value.value === 'collected' || value.value === 'favorites') ? 1 : 2);  

const changeShow = async () => {  
  multipleSelection.value = [];  
  const data = tableStore.retrieveData(value.value, 1);  
  loading.value = true;  
  if (!data) {  
    const res = await queryUserPostControl({ offset: 0, types: value.value });  
    if (type.value === 1) {  
      tableData.value = res.info;  
      total_post.value = res.total;  
    } else {  
      userData.value = res.info;  
      total_user.value = res.total;  
    }  
    tableStore.storeMessage(value.value, 1, res.info, res.total);  
  } else {  
    if (type.value === 1) {  
      tableData.value = data.data;  
      total_post.value = data.total;  
    } else {  
      userData.value = data.data;  
      total_user.value = data.total;  
    }  
  }  
  loading.value = false;  
  currentPage.value = 1;  
};  

const tableData = ref([]);  
const userData = ref([]);  
const multipleSelection = ref([]);  
const tableRef = ref(null);  
const getData = async () => {  
  const data = tableStore.retrieveData(value.value, 1);  
  loading.value = true;  

  if (data) {  
    tableData.value = data.data;  
    total_post.value = data.total;  
  } else {  
    const res = await queryUserPostControl({ offset: 0, types: value.value });  
    tableData.value = res.info;  
    total_post.value = res.total;  
    tableStore.storeMessage(value.value, 1, res.info, res.total);  
  }  
  
  loading.value = false;  
};  

const handleSelectionChange = (val) => {  
  multipleSelection.value = val;  
};  

const handleDelete = async (index, row) => {  
  const id = row.id;  
  if (type.value === 1) {  
    // 删除帖子  
    tableData.value.splice(index, 1);  
    const res = await postDelete({ id });  
    ElMessage({ type: 'success', message: res.success });  
  } else {  
    // 删除用户  
    userData.value.splice(index, 1);  
    const res = value.value === 'fans' ? await removeFan({ id }) : await unFollow({ id });  
    ElMessage({ type: 'success', message: res.info });  
  }  
};  

const pageSize = ref(10);  
const currentPage = ref(1);  
const total_post = ref(0);  
const total_user = ref(0);  

const handleCurrentChange = async (val) => {  
  const offset = (val - 1) * pageSize.value;  loading.value = true;  

  const data = tableStore.retrieveData(value.value, val);  
  if (!data) {  
    const res = await queryUserPostControl({ offset, types: value.value });  
    if (type.value === 1) {  
      tableData.value = res.info;  
      total_post.value = res.total;  
      tableStore.storeMessage(value.value, val, res.info, res.total);  
    } else {  
      userData.value = res.info;  
      total_user.value = res.total;  
      tableStore.storeMessage(value.value, val, res.info, res.total);  
    }  
  } else {  
    if (type.value === 1) {  
      tableData.value = data.data;  
      total_post.value = data.total;  
    } else {  
      userData.value = data.data;  
      total_user.value = data.total;  
    }  
  }  
  loading.value = false;  
};  
</script>

<template>  
  <el-config-provider :locale="locale">  
    <el-select v-model="value" @change="changeShow" placeholder="选择管理类型" class="select-box">  
      <el-option-group  
        v-for="group in options"  
        :key="group.label"  
        :label="group.label"  
      >  
        <el-option  
          v-for="item in group.options"  
          :key="item.value"  
          :label="item.label"  
          :value="item.value"  
        />  
      </el-option-group>  
    </el-select>  

    <div class="table-container" v-if="type === 1">  
      <el-table  
          :data="tableData"  
          style="width: 100%"  
          ref="tableRef"  
          :default-sort="{ prop: 'date', order: 'descending' }"  
          @selection-change="handleSelectionChange"  
          v-loading="loading"  
          border  
          stripe  
      >  
        <el-table-column type="selection" width="55"/>  
        <el-table-column label="日期" sortable prop="date"/>  
        <el-table-column label="作者" prop="username"/>  
        <el-table-column label="标题" prop="title"/>  
        <el-table-column label="内容" prop="content" :show-overflow-tooltip='true'/>  
        <el-table-column label="评论量" sortable prop="commentCount"/>  
        <el-table-column label="点赞量" sortable prop="likeCount"/>  
        <el-table-column label="收藏量" sortable prop="collectCount"/>  
        <el-table-column align="center" label="操作">  
          <template #default="scope">  
            <el-button  
                size="small"  
                type="danger"  
                @click="handleDelete(scope.$index, scope.row)"  
                class="delete-button">  
              删除  
            </el-button>  
          </template>  
        </el-table-column>  
      </el-table>  
      <div class="button-area" v-show="multipleSelection.length !== 0">  
        <el-button disabled round class="disabled-button">选中删除</el-button>  
        <el-button @click="tableRef.clearSelection()" round class="clear-button">清空全选</el-button>  
      </div>  
      <div class="pageArea">  
        <el-pagination  
            v-model:current-page="currentPage"  
            v-model:page-size="pageSize"  
            :background="true"  
            layout="prev, pager, next, jumper"  
            :total="total_post"  
            @current-change="handleCurrentChange"  
        />  
      </div>  
    </div>  

    <div class="table-container" v-else>  
      <el-table  
          :data="userData"  
          style="width: 100%"  
          ref="tableRef"  
          @selection-change="handleSelectionChange"  
          border  
          v-loading="loading"  
          stripe  
      >  
        <el-table-column type="selection" width="55"/>  
        <el-table-column align="center" label="头像">  
          <template #default="scope">  
            <el-avatar :src="scope.row.avatar"></el-avatar>  
          </template>  
        </el-table-column>  
        <el-table-column label="用户名" sortable prop="username" :show-overflow-tooltip='true'/>  
        <el-table-column label="粉丝量" prop="fans"/>  
        <el-table-column label="关注量" prop="follow"/>  
        <el-table-column label="笔记数" prop="note"/>  
        <el-table-column align="center" label="操作">  
          <template #default="scope">  
            <el-button  
                size="small"  
                type="danger"  
                @click="handleDelete(scope.$index, scope.row)">  
              移除  
            </el-button>  
          </template>  
        </el-table-column>  
      </el-table>  
      <div class="button-area" v-show="multipleSelection.length !== 0">  
        <el-button disabled round class="disabled-button">选中删除</el-button>  
        <el-button @click="tableRef.clearSelection()" round class="clear-button">清空全选</el-button>  
      </div>  
      <div class="pageArea">  
        <el-pagination  
            v-model:current-page="currentPage"  
            v-model:page-size="pageSize"  
            :background="true"  
            layout="prev, pager, next, jumper"  
            :total="total_user"  
            @current-change="handleCurrentChange"  
        />  
      </div>  
    </div>  
  </el-config-provider>  
</template>

<style scoped>  
.pageArea {  
  margin-top: 20px;  
  display: flex;  
  justify-content: center;  
}  

.table-container {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  margin: 20px 0;  
  background-color: #f9f9f9; /* 背景色 */  
  border-radius: 8px;       /* 圆角 */  
  padding: 20px;            /* 内边距 */  
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影 */  
  width: 100%;  
}  

.select-box {  
  margin: 20px 0;  
  width: 300px; /* 控制下拉框宽度 */  
}  

.button-area {  
  margin-top: 20px;  
}  

.delete-button {  
  background-color: #ff4d4f; /* 删除按钮颜色 */  
  border-color: #ff4d4f; /* 删除按钮边框 */  
}  

.disabled-button {  
  background-color: #e0e0e0; /* 禁用按钮背景色 */  
  border-color: #e0e0e0; /* 禁用按钮边框 */  
}  

.clear-button {  
  background-color: #007bff; /* 清空全选按钮颜色 */  
  color: white; /* 清空全选按钮文字颜色 */  
}  

.el-table-column {  
  text-align: center; /* 表格内容居中 */  
}  

.el-pagination {  
  margin-top: 20px; /* 分页组件间距 */  
}  
</style>