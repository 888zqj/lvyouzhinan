<script setup>
import {ref} from "vue";
import {ElMessage} from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {User, Lock, ChatLineSquare} from "@element-plus/icons-vue";
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";

// 定义路由
const emit = defineEmits(['changeShow']);
const router = useRouter()
// 账户加密码校验
// 准备表单对象
const formLogin = ref({
  email: '',
  password: '',
  agree: false
})
const formRegister = ref({
  email: '',
  username: '',
  password: '',
  retryPwd: '',
  agree: false
})

// 准备规则对象
const rulesRegister = {
  email: [
    {required: true, message: '邮箱不能为空', trigger: 'blur'},
    {
      validator: (rule, value, callback) => {
        var emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        var emailRegExp1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if ((!emailRegExp.test(value) && value !== '') || (!emailRegExp1.test(value) && value !== '')) {
          callback(new Error('请输入有效邮箱格式！'));
        } else {
          callback();
        }
      }
    }
  ],
  username: [
    {required: true, message: '用户名不能为空！', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'},
    {min: 6, max: 14, message: '密码不符合要求', trigger: 'blur'}
  ],
  retryPwd: [
    {required: true, message: '密码不能为空', trigger: 'blur'},
    {min: 6, max: 14, message: '密码不符合要求', trigger: 'blur'},
    {
      validator: (rule, value, callback) => {
        if (value !== formRegister.value.password) {
          callback(new Error('两次密码不一致！'));
        } else {
          callback();
        }
      }
    }
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        // 自定义校验逻辑
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选协议'))
        }
      }
    }
  ]
}
const rulesLogin = {
  email: [
    {required: true, message: '邮箱不能为空', trigger: 'blur'},
    {
      validator: (rule, value, callback) => {
        var emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        var emailRegExp1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if ((!emailRegExp.test(value) && value !== '') || (!emailRegExp1.test(value) && value !== '')) {
          callback(new Error('请输入有效邮箱格式！'));
        } else {
          callback();
        }
      }
    }
  ],
  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'},
    {min: 6, max: 14, message: '密码不符合要求', trigger: 'blur'}
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        // 自定义校验逻辑
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选协议'))
        }
      }
    }
  ]
}
/*这段代码是一个Vue组件中的部分逻辑，用于处理用户登录和注册的功能。以下是对代码的逐行解释：

1. `const formLoginRef = ref(null);`：使用Vue的`ref`函数创建一个引用，用于在模板中绑定登录表单。

2. `const formRegisterRef = ref(null);`：使用`ref`函数创建一个引用，用于在模板中绑定注册表单。

3. `const userStore = useUserStore();`：使用之前定义的`useUserStore`函数来获取用户状态存储的实例。

4. `const doLogin = () => {...}`：定义了一个名为`doLogin`的函数，用于处理用户登录的逻辑。

5. `const {email, password} = formLogin.value`：解构赋值，从登录表单的`value`属性中获取`email`和`password`字段。

6. `formLoginRef.value.validate(async (valid) => {...})`：调用登录表单的`validate`方法，传入一个异步函数，该函数会在表单验证通过后执行。

7. `if (valid) {...}`：如果表单验证通过（`valid`为`true`），则执行以下操作：
   - `await userStore.getUserInfo({email, password})`：调用用户状态存储的`getUserInfo`方法，使用用户输入的邮箱和密码获取用户信息。
   - `emit('changeShow')`：通过Vue的事件系统发出一个自定义事件`changeShow`。
   - `await router.replace(`/user/index/${userStore.userInfo.id}`)`：使用Vue Router的`replace`方法跳转到用户个人页面，页面路径包含用户ID。
   - `ElMessage({type: 'success', message: '登陆成功'});`：显示一个成功提示信息。

8. `const doRegister = () => {...}`：定义了一个名为`doRegister`的函数，用于处理用户注册的逻辑。

9. `const {email, username, password} = formRegister.value`：解构赋值，从注册表单的`value`属性中获取`email`、`username`和`password`字段。

10. `formRegisterRef.value.validate(async (valid) => {...})`：调用注册表单的`validate`方法，传入一个异步函数，该函数会在表单验证通过后执行。

11. `if (valid) {...}`：如果表单验证通过，执行以下操作：
    - `await userStore.userRegister({email, username, password})`：调用用户状态存储的`userRegister`方法，使用用户输入的信息注册新用户。
    - `ElMessage({type: 'success', message: '注册成功'});`：显示一个成功提示信息。
    - `toggleForm()`：调用`toggleForm`函数切换表单的显示状态。

12. `const showWhich = ref(true)`：创建一个响应式引用`showWhich`，用于控制显示登录表单还是注册表单。

13. `const toggleForm = () => {...}`：定义了一个名为`toggleForm`的函数，用于切换登录和注册表单的显示状态。

整体来看，这段代码实现了用户登录和注册的基本流程，包括表单验证、状态管理、路由跳转和消息提示。同时，还提供了一个切换登录和注册表单的逻辑。
*/

// 获取form实例校验
const formLoginRef = ref(null)
const formRegisterRef = ref(null)

// 准备用户

const userStore = useUserStore();//使用之前定义的`useUserStore`函数来获取用户状态存储的实例。

const doLogin = () => {
  const { email, password } = formLogin.value
  formLoginRef.value.validate(async (valid) => {
    if (valid) {
      // 提示用户
      await userStore.getUserInfo({email, password})
      emit('changeShow')
      await router.replace(`/user/index/${userStore.userInfo.id}`)
      ElMessage({type: 'success', message: '登陆成功'})
    }
  })
}
const doRegister = () => {
  const {email, username, password} = formRegister.value
  formRegisterRef.value.validate(async (valid) => {
    if (valid) {
      await userStore.userRegister({email, username, password})
      ElMessage({type: 'success', message: '注册成功'})
      toggleForm()
    }
  })
}

const showWhich = ref(true)
const toggleForm = () => {
  showWhich.value = !showWhich.value
}

</script>

<template>
  <div class="login">
    <div class="box">
      <div class="leftArea">
        <div class="title" style="text-align: center">旅游印记</div>
        <img src="/icon.jpg" class="image" alt="">
      </div>
      <div class="rightArea" v-if="showWhich">
        <div class="title" style="text-align: center">登录</div>
        <div class="form">
          <el-form ref="formLoginRef" :model="formLogin" :rules="rulesLogin" label-position="right" label-width="0"
                   status-icon>
            <el-form-item prop="email" class="inputArea">
              <el-input class="my" v-model="formLogin.email" placeholder="请输入邮箱号" :prefix-icon="User"/>
            </el-form-item>
            <el-form-item prop="password" class="inputArea">
              <el-input class="my" v-model="formLogin.password" placeholder="请输入密码" :prefix-icon="Lock" show-password/>
            </el-form-item>
            <el-form-item prop="agree" label-width="22px" class="inputArea">
              <el-checkbox size="large" v-model="formLogin.agree">
                我已同意隐私条款和服务条款
              </el-checkbox>
            </el-form-item>
            <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
          </el-form>
        </div>
        <el-divider content-position="center">或</el-divider>
        <el-button size="large" class="subBtn" @click="toggleForm()">新用户注册</el-button>
      </div>
      <div class="rightArea" v-if="!showWhich">
        <div class="title" style="text-align: center">注册</div>
        <div class="form">
          <el-form ref="formRegisterRef" :model="formRegister" :rules="rulesRegister" label-position="right"
                   label-width="0"
                   status-icon>
            <el-form-item prop="email" class="inputArea">
              <el-input class="my" v-model="formRegister.email" placeholder="请输入注册邮箱" :prefix-icon="ChatLineSquare"/>
            </el-form-item>
            <el-form-item prop="username" class="inputArea">
              <el-input class="my" v-model="formRegister.username" placeholder="请输入用户名" :prefix-icon="User" maxlength="6" show-word-limit/>
            </el-form-item>
            <el-form-item prop="password" class="inputArea">
              <el-input class="my" v-model="formRegister.password" placeholder="请输入密码" :prefix-icon="Lock" show-password/>
            </el-form-item>
            <el-form-item prop="retryPwd" class="inputArea">
              <el-input class="my" v-model="formRegister.retryPwd" placeholder="请确认输入密码" :prefix-icon="Lock" show-password/>
            </el-form-item>
            <el-form-item prop="agree" label-width="22px" class="inputArea">
              <el-checkbox size="large" v-model="formRegister.agree">
                我已同意隐私条款和服务条款
              </el-checkbox>
            </el-form-item>
            <el-button size="large" class="subBtn" style="margin-top: 30px;" @click="doRegister">点击注册</el-button>
          </el-form>
        </div>
        <el-divider content-position="center">或</el-divider>
        <el-button size="large" class="subBtn" style="margin-top: 0;" @click="toggleForm()">立即登录</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  position: absolute;
  left: 50px;
  top: 150px;
  object-fit: contain;
}

.title {
  margin-top: 50px;
  font-size: 18px;
  color: rgba(51, 51, 51, 0.8);
  font-weight: 600;
  line-height: 120%;
}

.login {
  background-color: white;
  border-radius: 4rem;
  position: absolute;
  left: 350px;
  top: 100px;
}

.box {
  box-shadow: 32px 18px 21px -3px rgba(0, 0, 0, 0.1);
  width: 50rem;
  height: 35rem;
  border-radius: 4rem;
  background-color: transparent;
  border-color: #f3f4f6;
}

.leftArea {
  position: absolute;
  left: 0;
  width: 25rem;
  height: 30rem;
  border-radius: 4rem;
  background-color: transparent;
}

.rightArea {
  position: absolute;
  right: 0;
  width: 25rem;
  height: 30rem;
  border-radius: 4rem;
  background-color: transparent;
}

.subBtn {
  position: relative;
  left: 50px;
  background: #ff2441;
  width: 300px;
  color: #fff;
  margin-top: 30px;
  height: 48px;
  opacity: .5;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
}

.subBtn:hover {
  opacity: 1;
}

.inputArea {
  top: 30px;
  font-size: 16px;
  border-radius: 999px;
  width: 80%;
  position: relative;
  left: 35px;
}

.box::after {
  content: "";
  position: absolute;
  left: 50%;
  display: block;
  width: 2px;
  background-color: #d5d0d0;
  height: 100%;
}
</style>