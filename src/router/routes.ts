import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    strict: true,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        strict: true,
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/members/',
        name: 'members',
        strict: true,
        component: () => import('pages/MembersPage.vue'),
      },
      {
        path: '/mission-statement/',
        name: 'mission',
        strict: true,
        component: () => import('pages/MissionPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
