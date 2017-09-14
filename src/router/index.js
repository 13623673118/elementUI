import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Jilian from '@/components/jilian'
import Shange from '@/components/shange'
import Icon from '@/components/icon'
import Select from '@/components/select'
import Switch from '@/components/switch'
import Slide from '@/components/slide'
import Carousel from '@/components/carousel'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/shange',
      name: 'shange',
      component: Shange
    },
    {
      path: '/icon',
      name: 'icon',
      component: Icon
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    },
    {
      path: '/jilian',
      name: 'jilian',
      component: Jilian
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/slide',
      name: 'slide',
      component: Slide
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    }
  ]
})
