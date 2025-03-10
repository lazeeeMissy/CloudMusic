import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "../loading/loading";

import DHeader from "../../components/discover-header/dheader";

const Discover = () => {
    return (
        <div>
            <DHeader/>
            
            <Suspense fallback={<Loading/>}>
                <Outlet />
            </Suspense>

        </div>
    )
}


export default Discover;