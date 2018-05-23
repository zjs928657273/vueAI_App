import Vue from 'vue'
import Router from 'vue-router'

//依次引入pages里面的组件
import Home from "@/pages/home/Home"
import Audio from "@/pages/audio/Audio"
import Group from "@/pages/group/Group"
import Broadcast from "@/pages/broadcast/Broadcast"
import Mine from "@/pages/mine/Mine"


Vue.use(Router)

export default new Router({
  routes: [
  //为pages下面的单页面配置路由
  	{
  		path:"/",
  		component:Home
  	},
    {
      path: '/home',
      component: Home
    },
    {
      path: '/audio',
      component: Audio
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/broadcast',
      component: Broadcast
    },
    {
      path: '/mine',
      component: Mine
    },
  ]
})
