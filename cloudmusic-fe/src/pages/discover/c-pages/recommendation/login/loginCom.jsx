import './style'
import { LoginWrapper } from './style'
const LoginCom = ()=>{
    return(
        <LoginWrapper>
            <p className='note'>登录网易云音乐, 可以享受无限收藏的乐趣, 并且无限同步到手机</p>
            <a href='/' className='login-btn'>用户登录</a>
        </LoginWrapper>
    )
}

export default LoginCom