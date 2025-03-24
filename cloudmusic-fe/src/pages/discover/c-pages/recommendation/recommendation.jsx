import Banners from "../../../../components/discover-banners/banners";
import './style'
import { LeftWrapper, RecmdContent, RecommendationWrapper, RightWrapper,HotWrapperUl } from "./style";
import AreaTopBar from "../../../../components/recommend-area-topbar/area-topbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRankListAction, fetchRecommendationData } from "../../../../store/discover/recommend";

import RecommenPicture from "../../../../components/recommen-pic-compo/recommenpicture";
import NewAlbum from "./newalbum/newalbum";
import RankList from "./ranklist/ranklist";

// 推荐里有banners
const Recommendation = () => {
  ///playlist/hot 可以获取歌单
  const hotRecommendation = {
    title: "热门推荐",
    tabs: ["华语", "流行", "摇滚", "民谣", "电子"],
    link: '/discover/playlist'
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecommendationData());
    dispatch(fetchRankListAction())
  }, [dispatch])

  
  const {banners, hotPlaylist, newAlbums, rankings} = useSelector((state) => ({
    //优化
    hotPlaylist: state.recommend.hotPlaylist,
    banners:state.recommend.banners,
    newAlbums: state.recommend.newAlbums,
    rankings: state.recommend.rankings,
  }))
  //Fisher-Yates 洗牌算法
  const shuffleList = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];//exchange the item
    }
    return shuffled;
  }

  const randomHotPlaylist = shuffleList(hotPlaylist).slice(0, 8)

  return (
    <div>
      <Banners banners={banners} />
      <RecommendationWrapper >
        <RecmdContent >
          <LeftWrapper>
            <AreaTopBar {...hotRecommendation} />
            <HotWrapperUl>
              {
                randomHotPlaylist?.map(item => {
                  return (
                    <li  key={item.id} >
                      <div className="hotItem">
                        <RecommenPicture id={item.id} picUrl={item.picUrl} name={item.name} playCount={item.playCount} />
                      </div>
                      <a className="dec" href="/discover">{item.name}</a>

                    </li>
                  )
                })
              }
            </HotWrapperUl>
            <NewAlbum newAlbums = {newAlbums}/>
            <RankList rankings = {rankings}/>
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