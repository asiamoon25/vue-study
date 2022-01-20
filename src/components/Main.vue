<template>
<div>
  <p>메인 페이지입니다</p>
  <v-btn @click="goBoard">게시판</v-btn>
  <v-btn @click="goWrite">글쓰기</v-btn>
  <div v-if="showInput">
    <v-text-field placeholder="글쓰기~" v-model="inputText"/>
    <v-text-field placeholder="작성자" v-model="writer"/>
    <v-btn @click="save">저장</v-btn>
    <v-btn @click="can">취소</v-btn>
  </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Main',
  data: () => ({
    inputText: '',
    showInput: false,
    writer: '',
  }),
  methods: {
    goBoard() {
      this.$router.push('test');
    },
    goWrite() {
      this.showInput = true;
    },
    save() {
      axios.post('/api/board-save', null, { params: { inputText: this.inputText, writer: this.writer } })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    can() {
      this.showInput = false;
    },
  },
};
</script>

<style scoped>

</style>
