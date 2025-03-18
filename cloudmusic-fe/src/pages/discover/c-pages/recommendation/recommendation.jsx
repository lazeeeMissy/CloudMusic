import Banners from "../../../../components/discover-banners/banners";
import './style'
import { LeftWrapper, RecmdContent, RecommendationWrapper, RightWrapper } from "./style";
import AreaTopBar from "../../../../components/area-topbar/area-topbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHomeHotPlaylist } from "../../../../store/discover/recommend";
// 推荐里有banners
const Recommendation = ()=>{
    const hotRecommendation = {
      title:"热门推荐",
      tabs:["华语","流行","摇滚","民谣","电子"],
      link:'/discover/playlist'
    }

    const dispatch = useDispatch();
    const {hotPlaylist} = useSelector((state)=>({
      hotPlaylist: state.recommend.hotPlaylist
    }))
    //Fisher-Yates 洗牌算法
    const shuffleList = (arr)=>{
      const shuffled = [...arr];
      for(let i=shuffled.length-1; i>0 ; i--){
        const j = Math.floor(Math.random()*(i+1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];//exchange the item
      }
      return shuffled;
    }
  
    useEffect(()=>{
      dispatch(fetchHomeHotPlaylist())
    },[dispatch])
    const randomHotPlaylist = shuffleList(hotPlaylist).slice(0,8)

    return (
      <div>
        <Banners/>
        <RecommendationWrapper >
          <RecmdContent >
              <LeftWrapper>
                <AreaTopBar {...hotRecommendation}/>
                {
                  randomHotPlaylist?.map(item=>{
                    return (
                      <div key={item.id}>
                          {item.name}

                      </div>
                    )
                  })
                }
              </LeftWrapper>
              <RightWrapper>
                这是右边
              </RightWrapper>
          </RecmdContent>
        </RecommendationWrapper>
      </div>
    )
}

export default Recommendation;