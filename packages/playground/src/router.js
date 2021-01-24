import { createWebHistory, createRouter, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import AlertBasic from '../../alert/examples/basic.vue'
import AlertStyled from '../../alert/examples/styled.vue'
import DisclosureBasic from '../../disclosure/examples/basic.vue'
import DisclosureControlled from '../../disclosure/examples/controlled.vue'
import DisclosureTransition from '../../disclosure/examples/transition.vue'
import TabsBasic from '../../tabs/examples/basic.vue'
import TabsControlled from '../../tabs/examples/controlled.vue'

// Automate
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Alert',
    path: '/alert',
    component: RouterView,
    children: [
      {
        name: 'Alert (basic)',
        path: '/alert/basic',
        component: AlertBasic,
      },
      {
        name: 'Alert (styled)',
        path: '/alert/styled',
        component: AlertStyled,
      },
    ],
  },
  {
    name: 'Disclosure',
    path: '/disclosure',
    component: RouterView,
    children: [
      {
        name: 'Disclosure (basic)',
        path: '/disclosure/basic',
        component: DisclosureBasic,
      },
      {
        name: 'Disclosure (controlled)',
        path: '/disclosure/controlled',
        component: DisclosureControlled,
      },
      {
        name: 'Disclosure (transition)',
        path: '/disclosure/transition',
        component: DisclosureTransition,
      },
    ],
  },
  {
    name: 'Tabs',
    path: '/tabs',
    component: RouterView,
    children: [
      {
        name: 'Tabs (basic)',
        path: '/tabs/basic',
        component: TabsBasic,
      },
      {
        name: 'Tabs (controlled)',
        path: '/tabs/controlled',
        component: TabsControlled,
      },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
