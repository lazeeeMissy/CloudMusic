import { Carousel } from "antd";
import classNames from "classnames";
import './style'
import { useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchBannersAction } from '../../store/discover/recommend';
import { BannerControl, BannerWrapper, LeftContent, RightContent, ContentWrapper } from './style';
import { wait } from "@testing-library/user-event/dist/utils";
// banner组成: 一个背景图(模糊效果);一个淡入淡出的banner; 一个下载客户端的图片;一个左右按钮;一个圆圈显示
const Banners = () => {
    //获取数据
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(0)
    const { banners } = useSelector((state) => ({
        banners: state.recommend.banners
    }), shallowEqual) //复习
    useEffect(() => {
        dispatch(fetchBannersAction());

    }, [dispatch])
    //设置背景
    const [bgImgURL, setBgImgURL] = useState(banners[0]?.imageUrl+"?imageView&blur=40x20");
    const handleAfterChange = (next)=>{
        wait(500)
        setBgImgURL(banners[next]?.imageUrl+"?imageView&blur=40x20")
        setCurrentIndex(next)
    }
    // 左右按钮跳转
    const carouselRef = useRef(null) //用ref获取 Carousel里的数据
    const handleLeftButton = () => {
        carouselRef.current.prev()
    }
    const handleRightButton = () => {
        carouselRef.current.next()
    }

    //轮播图下面的红色小按钮点击事件
    const handleSpanClick = (index)=>{
        console.log(carouselRef.current)
        setCurrentIndex(index);
//这里不用currentIndex是因为setCurrentIndex可能是异步的, 不能及时更新.
        carouselRef.current.goTo(index);
    }

    return (
        <BannerWrapper style={{background :`url('${bgImgURL}') center center /6000px`}}>
            <ContentWrapper>
                <LeftContent>
                    <Carousel autoplay autoplaySpeed={4000} fade speed={700} dots={false}
                        beforeChange={(_, next)=>handleAfterChange(next)} ref ={carouselRef}
                    >
                        {
                            banners.map((item, index) => {
                                return (
                                    <div className="item" key={index} >
                                        <img src={item.imageUrl} alt="" className="item-img" />
                                    </div>
                                ) })
                        }
                    </Carousel>
                    <ul className="dots">
                        {
                            banners.map((item, index)=>{
                                return (
                                    <li key={index}>
                                        <span className={classNames("item", {active : index === currentIndex})}
                                            onClick={()=>handleSpanClick(index)}></span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </LeftContent>

                <RightContent>
                    <a className="download-btn" href="/download" />
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </RightContent>
            </ContentWrapper>
            <BannerControl>
                       <a className="left-flag-btn" onClick={handleLeftButton}> 》 </a>
                       <a className="right-flag-btn" onClick={handleRightButton}>《 </a>
            </BannerControl>
        </BannerWrapper>
    )
}
export default Banners;