import Index from '@/view/Index/index.jsx'
import Game from '@/view/Game/index.jsx'
import Error404 from '@/view/ErrorPages/404'
import Error500 from '@/view/ErrorPages/500'

class Routes {
    routes = [
        {
            name: 'index',
            path: '/',
            component: Index
        },
        {
            name: 'game',
            path: '/game',
            component: Game,
            subMenu: [
                {
                    name: '射击类',
                    path: '/game/shot',
                    component: () => '射击'
                },
                {
                    name: '赛车类',
                    path: '/game/car',
                    component: () => '赛车'
                }
            ]
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
}

export default Routes
