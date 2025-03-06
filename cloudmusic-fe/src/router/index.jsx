import Discover from "../pages/discover/discover"
import Download from "../pages/download/download"
import Friend from "../pages/friend/friend"
import My from "../pages/my/my"
// 网易云用的应该是hashRouter 带有‘#’

const routes = [
    {
        path:'/',
        element:<Discover/>,
    },
    {
        path:'/discover',
        element: <Discover/>,
    },
    {
        path:'/my',
        element:<My/>,
    },
    {
        path:'/download',
        element:<Download/>
    },
    {
        path:'/friend',
        element:<Friend/>
    }

]

export default routes
