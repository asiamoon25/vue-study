<template>
<div>
  <p>메인 페이지입니다</p>
  <v-btn @click="goBoard">게시판</v-btn>
  <v-btn @click="goWrite">글쓰기</v-btn>
  <div v-if="showInput">
    <v-text-field placeholder="글쓰기~" v-model="inputText"/> <!-- v-model 로 양방향으로 데이터 전달이 가능하다. -->
    <v-text-field placeholder="작성자" v-model="writer"/>
    <v-btn @click="save">저장</v-btn> <!-- v-on 이 @로 되 있다. -->
    <v-btn @click="can">취소</v-btn>
  </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Main',
  data: () => ({ // data 는 함수여야 한다. 인스턴스가 실행될 때를 보면 data 가 return 되는 것을 볼 수 있다.
    inputText: '',
    showInput: false,
    writer: '',
  }),
  methods: {
    goBoard() {
      // eslint-disable-next-line no-unused-vars
      this.$router.push('/test').catch((err) => {});
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

<style>

</style>
