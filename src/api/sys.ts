import request from '@/utils/request'
/**
 * 登录
 */
export const login = (data: { username: string; password: string }) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}
