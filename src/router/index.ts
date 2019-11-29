import Index from '@/view/Index/index'
import Game from '@/view/Game/index.jsx'
import Error404 from '@/view/ErrorPages/404'
import Error500 from '@/view/ErrorPages/500'

class Routers {
  router: Array<Router> = [
    {
      name: 'index',
      path: '/',
      component: Index
    },
    {
      name: 'game',
      path: '/game',
      component: Game
    },
    {
      name: '404',
      path: '/404',
      component: Error404
    },
    {
      name: '500',
      path: '/500',
      component: Error500
    }
  ]
  getRouterMap (): Array<Router> {
    return this.router
  }
}

interface Router {
  name: string
  path: string
  component: any
  options?: Options
}

interface Options {
  meta?: boolean
}

export default Routers
