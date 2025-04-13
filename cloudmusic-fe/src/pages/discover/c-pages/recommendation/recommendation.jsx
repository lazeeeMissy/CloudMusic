import Banners from "../../../../components/discover-banners/banners";
import './style'
import { LeftWrapper, RecmdContent, RecommendationWrapper, RightWrapper,HotWrapperUl } from "./style";
import AreaTopBar from "../../../../components/recommend-area-topbar/area-topbar";
import { useDispatch, useSelector} from "react-redux";
import { useMemo } from "react";
import { useEffect } from "react";
import { fetchRankListAction, fetchRecommendationData } from "../../../../store/discover/recommend";

import RecommenPicture from "../../../../components/recommen-pic-compo/recommenpicture";
import NewAlbum from "./newalbum/newalbum";
import RankList from "./ranklist/ranklist";
import vipPic from "../../../../assets/img/dis_vip_card.png"
import LoginCom from "./login/loginCom";
import ResidentSinger from "./residentsinger/residentsinger";
import Anchors from "./anchors/anchors";
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
  }, [])

  
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
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // exchange the item
    }
    return shuffled;
  };

  // 使用 useMemo 来缓存洗牌后的 hotPlaylist
  const shuffledHotPlaylist = useMemo(() => {
    return shuffleList(hotPlaylist?.slice(0, 8));
  }, [hotPlaylist]); // 只有当 hotPlaylist 变化时，才会重新洗牌

  return (
    <div>
      <Banners banners={banners} />
      <RecommendationWrapper >
        <RecmdContent >
          <LeftWrapper>
            <AreaTopBar {...hotRecommendation} />
            <HotWrapperUl>
              {
                shuffledHotPlaylist?.map(item => {
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
            <div className="dis-vip">
              <img src={vipPic} className="vip-img"/>
            </div>
            <LoginCom/>
            <ResidentSinger/>
            <Anchors/>
          </RightWrapper>
        </RecmdContent>
      </RecommendationWrapper>
    </div>
  )
}

export default Recommendation;