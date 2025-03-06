
import { useRoutes } from "react-router-dom";
import routes from "./router";
import Download from "./pages/download/download";

function App() {
  return (
    <div className="App">
      <Download name='missy' age='22' height=''>
        <div>nihao</div>
        <div>hello</div>
      </Download>
      <div className="main">{useRoutes(routes)}</div>
    </div>
  );
}

export default App;
