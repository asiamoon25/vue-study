<template>
<v-container class="align-center">
  <v-row justify="center">
     <p>여기에다가 게시판을 만들겠습니다.</p>
  </v-row>
  <v-row justify="center">
    <v-col>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              작성자
            </th>
            <th class="text-left">
              내용
            </th>
            <th class="text-left">
              작성일
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="(b,i) in bd"
            :key="i"
          >
            <td>{{ b.writer }}</td>
            <td>{{ b.inputText }}</td>
            <td>{{ b.writedate }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="pageCount"
          total-visible="5"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          @input="movePage"
        ></v-pagination>
      </div>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

export default {
  name: 'Test',
  data: () => ({
    page: 1,
  }),
  computed: {
    bd() {
      return this.$store.state.bd;
    },
    pageCount() {
      return this.$store.state.pageCount;
    },
  },
  beforeCreate() {
    let pageNo = this.$route.params.page;
    if (pageNo === 'index') {
      pageNo = 1;
    }
    this.$store.dispatch('getBoardData', pageNo);
    this.$store.dispatch('pagination');
  },
  methods: {
    movePage(page) {
      Number(page);
      // eslint-disable-next-line no-unused-vars
      this.$router.push(`/test/${page}`).catch((err) => {});
      this.$store.dispatch('getBoardData', page);
    },
  },
};
</script>

<style scoped>

</style>
