export const validatePassword = () => {
  return (rule: any, value: string, callback: (s?: Error) => void) => {
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
