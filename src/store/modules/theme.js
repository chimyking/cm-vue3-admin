import {
  getItem,
  setItem
} from '@/utils/storage'
import {
  MAIN_COLOR,
  DEFAULT_COLOR
} from '@/constant'
import variables from '@/styles/variables.scss'
export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables: variables
  }),
  mutations: {
    /**
     * 设置主题色
     */
    setMainColor (state, newColor) {
      state.mainColor = newColor
      state.variables.menuBg = newColor
      setItem(MAIN_COLOR, newColor)
    }
  }
}
