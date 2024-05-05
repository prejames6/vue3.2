import { createStore } from 'vuex'
import ap from './modules/app'
import getters from './getters'
export default createStore({
  modules: {
    ap
  },
  getters
})
