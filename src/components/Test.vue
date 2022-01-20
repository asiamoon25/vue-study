<template>
<v-container class="align-center">
  <v-row justify="center">
     <p>여기에다가 게시판을 만들겠습니다.</p>
  </v-row>
  <v-row justify="center">
      <table>
        <thead>
        <tr>
          <td>번호</td>
          <td>제목</td>
          <td>작성 날짜</td>
          <td>작성자</td>
        </tr>
        </thead>
        <tbody  v-for="(b,i) in bd"
                :key="i">
        <tr>
          <td>{{b.writer}}</td>
          <td>{{b.inputText}}</td>
          <td>{{b.writedate}}</td>
        </tr>
        </tbody>
      </table>
  </v-row>
</v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Test',
  data: () => ({
    bd: [],
  }),
  beforeCreate() {
    axios.get('/api/board')
      .then((res) => {
        this.bd = res.data.boardData;
        console.log(this.bd);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
