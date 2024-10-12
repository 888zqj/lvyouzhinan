import {defineStore} from "pinia";
import {ref} from "vue";
import { login, queryUserFocus, Register } from "@/apis/main";
/*
这段代码是使用Vue.js框架和Pinia状态管理库定义的一个用户状态存储（store）。Pinia是Vue.js的官方状态管理库，用于替代Vuex。下面是对这段代码的逐行解释：

1. `import {defineStore} from "pinia";`：从Pinia库导入`defineStore`函数，用于创建状态存储。

2. `import {ref} from "vue";`：从Vue导入`ref`函数，用于创建响应式引用。

3. `import {login, queryUserFocus, Register} from "@/apis/main";`：从`@/apis/main`模块导入`login`、`queryUserFocus`和`Register`函数，这些函数可能用于与后端API进行通信。

4. `export const useUserStore = defineStore('user', ...`：定义并导出一个名为`user`的状态存储。

5. 状态存储内部定义了多个响应式引用（`ref`）：
   - `userInfo`：存储用户信息。
   - `userFocus`：存储用户关注的信息。
   - `userCollect`：存储用户收藏的信息。
   - `userFavorite`：存储用户喜欢的信息。
   - `headersObj`：存储HTTP请求头。

6. `userRegister`：一个异步函数，用于注册用户，调用`Register`函数。

7. `getUserInfo`：一个异步函数，用于获取用户信息，调用`login`和`queryUserFocus`函数，并更新用户信息、关注、收藏和喜欢的数据。

8. `extendUserInfo`：一个函数，用于扩展用户关注、收藏或喜欢的列表。

9. `removeFocus`：一个函数，用于从用户关注、收藏或喜欢的列表中移除指定的ID。

10. `userLogout`：一个异步函数，用于注销用户，清空用户信息并返回注销成功的消息。

11. `changeInfo`：一个函数，用于更改用户信息，如用户名、签名和头像。

12. `return {...}`：返回状态存储的所有响应式引用和函数，使其可以在Vue组件中使用。

13. `, { persist: true, }`：这是一个配置对象，`persist: true`表示启用持久化，即使在页面刷新后也能保持状态存储的数据。

整体来看，这段代码定义了一个用户状态存储，包括用户信息的获取、注册、注销、更新和持久化等功能。

*/

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({});
    const userFocus = ref([]);
    const userCollect = ref([]);
    const userFavorite = ref([]);
    const headersObj = ref({})
    const userRegister = async ({email, username, password}) => {
        await Register({email, username, password});
    };

    const getUserInfo = async ({email, password}) => {
        userInfo.value = await login({email, password});
        const focusResult = await queryUserFocus();
        userFocus.value = focusResult.info.follow;
        userCollect.value = focusResult.info.collected;
        userFavorite.value = focusResult.info.favorites;
        headersObj.value = {Authorization: `Bearer ${userInfo.value.token}`}
    };

    const extendUserInfo = (type, id) => {
        if (type === 1) {
            userFocus.value = [...userFocus.value, id];
        } else if (type === 2) {
            userFavorite.value = [...userFavorite.value, id];
        } else if (type === 3) {
            userCollect.value = [...userCollect.value, id];
        }
    };

    const removeFocus = (type, id) => {
        if (type === 1) {
            const index = userFocus.value.indexOf(id);
            if (index !== -1) {
                userFocus.value.splice(index, 1);
            }
        } else if (type === 2) {
            const index = userFavorite.value.indexOf(id);
            if (index !== -1) {
                userFavorite.value.splice(index, 1);
            }
        } else if (type === 3) {
            const index = userCollect.value.indexOf(id);
            if (index !== -1) {
                userCollect.value.splice(index, 1);
            }
        }
    };

    const userLogout = async () => {
        userInfo.value = {};
        return {info: "成功退出登录"};
    };

    const changeInfo = ({username, signature, avatar}) => {
        userInfo.value.username = username;
        userInfo.value.signature = signature;
        userInfo.value.avatar = avatar;
    };

    return {
        userInfo,
        getUserInfo,
        userLogout,
        userRegister,
        extendUserInfo,
        userFocus,
        removeFocus,
        changeInfo,
        userCollect,
        userFavorite,
        headersObj
    };
}, {
    persist: true,
});
