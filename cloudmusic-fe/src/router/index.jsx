// webpack打包的分包处理, 是一种优化(每一个页面内容都比较大) -> 路由的懒加载(组件)
import {  lazy} from "react"
import { Navigate } from "react-router-dom";
// 网易云用的应该是hashRouter 带有‘#’
const Discover = lazy(()=> import("../pages/discover/discover"));
const Download = lazy(()=> import("../pages/download/download"));
const My = lazy(()=> import("../pages/my/my"));
const Friend = lazy(()=> import("@/pages/friend/friend"));

// discover的子页面
const Recommendation = lazy(()=> import("../pages/discover/c-pages/recommendation/recommendation"));
const Toplist = lazy(()=> import("../pages/discover/c-pages/toplist/toplist"));
const Playlist = lazy(()=> import("../pages/discover/c-pages/playlist/playlist"));
const Djradio = lazy(()=> import("../pages/discover/c-pages/djradio/djradio"));
const Artist = lazy(()=> import("../pages/discover/c-pages/artist/artist"));
const Album = lazy(()=> import("../pages/discover/c-pages/album/album"));

const routes = [
    {
        path:'/',
        element:<Navigate to = '/discover'/>,
    },
    {
        path:'/discover',
        element: <Discover/>,
        children:[
            {
                index: true,
                element:<Recommendation/>,
            },
            {
                path:'toplist',
                element:<Toplist/>,
            },
            {
                path:'playlist',
                element:<Playlist/>,
            },
            {
                path:'djradio',
                element:<Djradio/>,
            },
            {
                path:'artist',
                element:<Artist/>,
            },
            {
                path:'album',
                element:<Album/>,
            },
        ]
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
