import './style'
import { BarWrapper } from './style';

// title, tabs, link
const AreaTopBar = (props) => {
    //const tabs = ["华语", "流行", "摇滚", "民谣"]
    const tabs = props?.tabs
    return (
        <BarWrapper>
            <a href={props?.link}>{props?.title}</a>
            <div className='tabs'>
                {tabs?.map((item) => {
                    return (
                        <div className="item" key={item}>
                            <a href={`${props?.link}/?cat=${item}`} className='sub-tab'>{item}</a>
                            <span className='line'>|</span>
                        </div>
                    )
                })}
            </div>
            <div className='more'>
                <a href={props?.link}>更多</a>
                <i className='more-pointer'></i>
            </div>
        </BarWrapper>
    )
}

export default AreaTopBar;
