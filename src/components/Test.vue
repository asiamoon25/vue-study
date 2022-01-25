<template>
<v-container class="align-center">
  <v-row justify="center">
     <p>여기에다가 게시판을 만들겠습니다.</p>
  </v-row>
  <v-row justify="end">
    <v-col cols="4">
      <v-text-field
        v-model="searchText"
        @keydown.native="search"
      ></v-text-field>
    </v-col>
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
import { mapState } from 'vuex';

export default {
  name: 'Test',
  data: () => ({
    searchText: '',
  }),
  computed: {
    ...mapState('boardStore', {
      bd: 'bd',
      pageCount: 'pageCount',
    }),
    page: {
      set() {
        return this.$store.state['boardStore/page'];
      },
      get() {
        return Number(this.$store.getters['boardStore/getPage']);
      },
    },
  },
  beforeCreate() {
    let pageNo = this.$route.query.page;
    if (pageNo === undefined || pageNo === null || pageNo === '' || pageNo === 'undefined') {
      pageNo = 1;
    }
    this.$store.dispatch('boardStore/getBoardData', pageNo);
    this.$store.dispatch('boardStore/pagination');
  },
  methods: {
    movePage(page) {
      // eslint-disable-next-line no-unused-vars
      this.$router.push(`/test?page=${Number(page)}`).catch((err) => {});
      this.$store.dispatch('boardStore/getBoardData', Number(page));
    },
    search() { // 구현 중
      this.$store.dispatch('boardStore/search', this.searchText);
    },
  },
};
</script>

<style scoped>

</style>
