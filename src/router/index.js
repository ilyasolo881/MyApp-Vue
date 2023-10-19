import { createRouter, createWebHashHistory } from 'vue-router'
import Counter from '../views/CounterView.vue'
import ToDo from '../views/ToDoView.vue'

const routes = [
  {
    path: '/',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/ToDo',
    name: 'ToDo',
    component: ToDo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
