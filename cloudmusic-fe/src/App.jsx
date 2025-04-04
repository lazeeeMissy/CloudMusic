
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { Suspense } from "react";

import Header from "./components/app-header/header";
import Loading from "./pages/loading/loading";
import Footer from "./components/app-footer/footer";
import PlayerFooter from "./pages/player/player-footer/playerfooter";

function App() {


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
