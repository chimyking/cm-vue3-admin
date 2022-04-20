// user.js 模块，用于处理所有和 用户相关 的内容
//
import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import { setTimeStamp } from '@/utils/auth'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state: { token: any }, token: any) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state: { userInfo: any }, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * 登录请求动作
     * @param {*} context
     * @param {*} userInfo
     * @returns
     */
    login(context: any, userInfo: { username: any; password: any }) {
      const { commit } = context
      const { username, password } = userInfo
      // 不管成功和失败都是可以处理的
      return new Promise(
        (resolve: (arg0?: any) => void, reject: (arg0: any) => void) => {
          login({
            username,
            password: md5(password)
          })
            .then((data: any) => {
              commit('user/setToken', data.token)
              // 保存登录时间
              setTimeStamp()
              router.push('/')
              resolve()
            })
            .catch((err: Error) => {
              commit('user/setToken', '12345678')
              // 保存登录时间
              setTimeStamp()
              router.push('/')
              // reject(err)
              console.error(err)
              resolve()
            })
        }
      )
    }
  }
}
