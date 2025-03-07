import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "../loading/loading";


const Discover = () => {
    return (
        <div>
            this is the top bar
            <br />
            <br />
            <Link to='/discover'>推荐</Link>
            <Link to='/discover/toplist'>排行榜</Link>
            <Link to='/discover/playlist'>歌单</Link>
            <Link to='/discover/djradio'>主播电台</Link>
            <Link to='/discover/artist'>歌手</Link>
            <Link to='/discover/album'>新碟上架</Link>
            <Suspense fallback={<Loading/>}>
                <Outlet />
            </Suspense>

        </div>
    )
}


export default Discover;