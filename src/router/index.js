import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Main from '@/components/Main';

Vue.use(VueRouter);

const routes = [ // 라우터 설정을 해서 url 에서 /뒤에 오는 값에 따라 화면을 다르게 보여줄 수 있다.
  {
    path: '/',
    component: Home,
    children: [
      // eslint-disable-next-line max-len
      // nested router 라우터 안에 라우터라고 보면된다. 실제 /는 생략되어서 처음 진입할때는 localhost:8080으로 되 있지만 사실은 localhost:8080//로 되 있다.
      // 위에 eslint 는 문법을 수정해 주는 친구이다.
      {
        path: '/',
        name: 'Main',
        component: Main,
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import(/* webpackChunkName: "test" */ '@/components/Test'),
        // 청크 파일로 lazy loading 을 한다. 이렇게 하는 이유는 싱글페이지의 경우 한번 실행 시킬때 한번에 다 로딩을 하기 때문에 진입에 많은 시간이 걸린다.
        // eslint-disable-next-line max-len
        // 이렇게 되는 경우 유저가 진입을 할 때 싫증을 느끼고 나가버리는 경우가 생길 수 있어서 필요한 부분에 적절하게 로딩을 하도록 청크파일로 빼고 해당 url 로 진입할 때 마다 로딩을 해준다.
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history', // history 모드가 없으면 url 부분에 #가 생긴다. 그것을 없애주기 위한 모드이다. 이것은 깃헙 페이지에 빌드해서 올릴 때 문제가 있는데 그것은 말로 설명
  base: process.env.BASE_URL,
  routes,
});

export default router;
