
import { Link, useRoutes } from "react-router-dom";
import routes from "./router";
import { Suspense } from "react";
import Loading from "./pages/loading/loading";
import { useDispatch, useSelector } from "react-redux";
import { changeMessageAction } from "./store/modules/counter";

function App() {
  const {count, message} = useSelector((state)=>({
    count: state.counter.count,
    message: state.counter.message
  }))

  // 处理函数
  const dispatch = useDispatch()
  const handleChangeMessage = (()=>{
    dispatch(changeMessageAction('new message!'))
  })
  return (
    <div className="App">
      <div className="nav">
        <Link to='/discover'>发现音乐</Link>
        <Link to='/my'>我的音乐</Link>
        <Link to='/friend'>关注</Link>
        <Link to='/download'>下载客户端</Link>
      </div>

      <h1>当前计数: {count}</h1>
      <h1>当前消息: {message || "hello redux"}</h1>
      <button onClick={handleChangeMessage}> 修改message</button>
      <Suspense fallback={<Loading />}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

    </div>
  );
}

export default App;
