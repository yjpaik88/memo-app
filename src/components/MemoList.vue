<template>
  <div>
    <div>
      <Memoitem v-bind:memo="memo" v-for="memo in memoList" :key="memo.id"/>
    </div>
  </div>
</template>

<script>
import Memoitem from "./Memoitem.vue";



export default {
  props: ['memoList'],
  components: { Memoitem },
  mounted(){
    console.log('memoList');
  }
};
</script>

<style>
</style>