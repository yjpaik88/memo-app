<template>
  <div id="app">
    <div>
      <button v-on:click="help">도움말</button>
    </div>
    <h2>짧은 일기</h2>
    <div class="memo-form">
      <div>
        <label
          >제목<input type="text" maxlength="100" v-model="memo.title"
        /></label>
      </div>
      <div>
        <label>내용 <textarea v-model="memo.content"></textarea></label>
      </div>
      <button v-on:click="addMemo">추가</button>
    </div>
    <MemoList :memoList="memoList" />
  </div>
</template>

<script>
import MemoList from "./components/MemoList.vue";
import firebase from "firebase";

export default {
  components: {
    MemoList,
  },
  data() {
    return {
      memoList: [],
      memo: {
        title: null,
        content: null,
      },
    };
  },
  methods: {
    help() {
      alert(
        "모든 내용은 모두에게 공개됩니다." +
          "\n" +
          "\n" +
          "추가: Ctrl + Enter"
      );
    },
    listMemo() {
      firebase
        .firestore()
        .collection("posts")
        .get()
        .then((qs) => {
          const temp = [];
          qs.forEach((doc) => {
            const serverPost = doc.data();
            const post = {
              id: doc.id,
              title : serverPost.title,
              content: serverPost.content,
              createAt: serverPost.createAt.toDate().toLocaleString()
            };
            temp.push(post);
            console.log(temp);

          });
          // 날짜로 내림차순 정렬(최신순) 한 뒤 meomList에 넣기!
          temp.sort((a, b) => {
            return a.createAt < b.createAt ? 1: -1;
          });
          this.memoList = temp;
        });
    },
    addMemo() {
      // let memo = {
      //   content: this.memo.content,
      // };
      //this.$store.commit("addMemo", memo);
      firebase.firestore().collection("posts").doc().set({
        title: this.memo.title,
        content: this.memo.content,
        createAt: new Date(),
      }).then(()=>{

      this.memo.title = "";
      this.memo.content = "";
      alert("추가 되었습니다.");
      this.listMemo();
      })
    },
  },

  created(){
    this.listMemo();
  }
};
</script>

<style lang="scss">
</style>
