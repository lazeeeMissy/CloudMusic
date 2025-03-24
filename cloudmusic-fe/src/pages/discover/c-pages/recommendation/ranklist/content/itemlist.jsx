
import { CoverWrapper, ListWrapper, ContentWrapper, ItemCentent } from "./style";
import { getImgSize } from "../../../../../../utils/format";
import classNames from "classnames";
const ItemList = ({ list }) => {
    const musicList = list.tracks.slice(0, 10);
    return (
        <ListWrapper>
            <CoverWrapper>
                <div className="cover-all">
                    <img className="cover" src={getImgSize(list.coverImgUrl, 80)} />
                    <a className="mask" href="/discover/toplist"></a>
                </div>
                <div className="title">
                    <a href="/discover/toplist"><h3>{list.name}</h3></a>
                    <div className="btns">
                        <span className="play"></span>
                        <span className="collect"></span>
                    </div>
                </div>
            </CoverWrapper>
            <ContentWrapper>
                <ol className="order">
                    {
                        musicList.map((item, index) => {
                            return (
                                <ItemCentent key={item.id}>
                                    <span className={classNames("num", { colored: index < 3 })}>{index + 1}</span>
                                    <div className="function">
                                        <a className="item-title" href="/discover/toplist" title={item.name} >{item.name}</a>

                                        <div className="icons">
                                            <span className="i-play"></span>
                                            <span className="i-add"></span>
                                            <span className="i-collect"></span>
                                        </div>
                                    </div>

                                </ItemCentent>
                            )
                        })
                    }
                    <li className="find-more">
                        <a>查看全部{'>'}</a>
                    </li>

                </ol>
            </ContentWrapper>

        </ListWrapper>
    )
}

export default ItemList;