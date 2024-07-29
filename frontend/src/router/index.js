// router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes'; // Rotas automáticas
import EditStudentPage from '@/pages/editStudent.vue'; // Caminho para a página de edição

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes, // Rotas automáticas
    {
      path: '/editStudent/:studentId',
      name: 'EditStudent',
      component: EditStudentPage,
      props: true, // Passa o parâmetro como prop
    },
  ],
});

export default router;
