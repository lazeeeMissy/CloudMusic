import './style'
import AreaTopBar from '../../../../../components/recommend-area-topbar/area-topbar';
import { RankWrapper, ContentWrapper } from './style';
import ItemList from './content/itemlist';
const RankList = ({rankings})=>{
    
    return(
        <RankWrapper>
        <AreaTopBar title="榜单" link="/discover/toplist"/>
        <ContentWrapper>
            {
                rankings.map((type)=>{
                    return(
                        <ItemList key={type.id} list = {type}/>
                    )
                })
            }
        </ContentWrapper>
    </RankWrapper>
    )
}

export default RankList;