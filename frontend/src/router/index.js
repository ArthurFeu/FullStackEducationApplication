import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import EditStudentPage from '@/pages/editStudent.vue'; // edit student route

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes, // automatic routes
    {
      path: '/editStudent/:studentId', // now I can access the studentId in the editStudent page
      name: 'EditStudent',
      component: EditStudentPage,
      props: true,
    },
  ],
});

export default router;
