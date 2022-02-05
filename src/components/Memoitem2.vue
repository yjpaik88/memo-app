<template>
  <div>
    <div>
      <div>{{ memo.createAt }}</div>
      <textarea v-if="isUpdateMode" v-model="memo.content"></textarea>
      <div v-else>{{ memo.content }}</div>
      <div>
        <button v-if="!isUpdateMode" @click="deleteMemo">삭제</button>
        <button v-else @click="changeMode('read')">취소</button>
        <button v-if="isUpdateMode" @click="saveChangedMemo">저장</button>
        <button v-else @click="changeMode('update')">편집모드로 전환</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["memo"],
  data() {
    return {
      isUpdateMode: false,
    };
  },
  methods: {
    saveChangedMemo() {
      this.$store.commit("saveChangedMemo", this.memo);
      this.isUpdateMode = false;
      screenX
    },
    deleteMemo() {
      this.$store.commit("deleteMemo", this.memo.id);
    },
    changeMode(modeType) {
      if (modeType === "update") {
        this.isUpdateMode = true;
      } else if (modeType === "read") {
        this.isUpdateMode = false;
      }
    },
  },
};
</script>

<style>
</style>
