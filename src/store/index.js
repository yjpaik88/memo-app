import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memoList: [],
    memoSeq: 0
  },
  mutations: {
    addMemo(state, payload) {
      // id생성하면서 seq값 증가시킨 값 넣기
      payload.id = ++state.memoSeq;
      payload.createAt = new Date().toLocaleDateString();
      state.memoList.push(payload);
    },
    deleteMemo(state, payload) {
      let matchedIndex = null;
      for (let i = 0; i < state.memoList.length; i++) {
        const memo = state.memoList[i];
        if (payload === memo.id) {
          matchedIndex = i;
          break;
        }
      }
      state.memoList.splice(matchedIndex, 1);
    },
    saveChangedMemo(state, payload){
      //state.memoList.push(payload);
      let matchedIndex = null;
      let matchedContent = payload.content;
      let matchedCreateAt = payload.createAt;
      for (let i = 0; i <state.memoList.length; i++){
        const memo = state.memoList[i];
        if (payload.id === memo.id){
          matchedIndex = i;
          break;
        }
      }
      payload.id = matchedIndex;
      
      
    }
  },
  actions: {
  },
  modules: {
  }
})
