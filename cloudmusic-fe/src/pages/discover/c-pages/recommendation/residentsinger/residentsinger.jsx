import './style'
import { ContentWrapper, ResidentSingerWrapper,SingersUL } from './style'
import Singers from "@/assets/data/resident-singers.json"
const ResidentSinger = ()=>{
    function showSinger(item){
        //href = /user/home?id=xxx
        return (
            <li key = {item.id}>
                <a href='/'>
                    <ContentWrapper>
                        <div className='content-img'>
                        <img src = {item.img} />

                        </div>
                        <div className='info'>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                        </div>
                    </ContentWrapper>
                </a>
            </li>
        )
    }
    return(
        <ResidentSingerWrapper>
            <div className='head'>
                <h3 className='title'><span>入驻歌手</span>
                <a className='view-all' href='/'>查看全部 &gt;</a>
                </h3>
            </div>
            <SingersUL>
                {
                    Singers.map(item=>showSinger(item))
                }
            </SingersUL>
            <a href='/' className='apply-btn'>申请成为网易音乐人</a>
        </ResidentSingerWrapper>
    )
}
export default ResidentSinger;