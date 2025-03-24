import { getImgSize } from '../../utils/format';
import './style'
import { CoverWarpper } from './style';


const RecommenPicture = ({id, picUrl, name,playCount})=>{
    
    const calculatedCount  = ()=>{
        if(playCount>10000){
            return (playCount/10000).toFixed(0)+"万"
        }else{
            return playCount
        }
    }
//小图片加载得更快
    return (
        <CoverWarpper>
            <img src={getImgSize(picUrl,140)}/>
            <a className='mask' title={name} href='/'></a>
            <div className='bottom' >
                <span className='icon-headset'></span>
                <span className='playCount'>{calculatedCount()}</span>
                <a title='播放' href='/' className='play'></a>
            </div>
        </CoverWarpper>
    )

}

export default RecommenPicture;