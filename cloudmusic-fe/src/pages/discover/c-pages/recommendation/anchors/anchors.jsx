import './style'
import { AnchorsWrapper,AnchorsUL,ContentWrapper } from './style'
import Anchors from "@/assets/data/discover-anchors.json"
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
        <AnchorsWrapper>
            <div className='head'>
                <h3 className='title'><span>热门主播</span></h3>
            </div>
            <AnchorsUL>
                {
                    Anchors.map(item=>showSinger(item))
                }
            </AnchorsUL>

        </AnchorsWrapper>
    )
}
export default ResidentSinger;