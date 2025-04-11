
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { Suspense, useEffect } from "react";

import Header from "./components/app-header/header";
import Loading from "./pages/loading/loading";
import Footer from "./components/app-footer/footer";
import PlayerFooter from "./pages/player/player-footer/playerfooter";
import { useDispatch } from "react-redux";
import { fetchCurrentSong } from "./store/player/player";

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    //1918576268
    //185700
    dispatch(fetchCurrentSong(1918576268))
  },[])

  return (
    <div className="App">
      <Header/>
      <Suspense fallback = {<Loading/>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <Footer/>
      <PlayerFooter/>
    </div>
  );
}

export default App;
