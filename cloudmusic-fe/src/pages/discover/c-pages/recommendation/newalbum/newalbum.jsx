import './style'
import AreaTopBar from '../../../../../components/recommend-area-topbar/area-topbar';
import { AlbumWrapper, DiskWrapper } from './style';
import { Carousel } from 'antd';
import { useRef } from 'react';
import NewAlbumCom from '../../../../../components/recommen-newalbum/newalbumcom';

const NewAlbum = ({newAlbums}) => {
    const carouselRef = useRef();
    const handleLeftBtn = () => {
        carouselRef?.current.prev();
    }
    const handleRightBtn = () => {
        carouselRef?.current.next();
    }

    return (
        <AlbumWrapper>
            <AreaTopBar title="新碟上架" link="/discover/album" />
            <DiskWrapper>
                <button className='left-btn' onClick={handleLeftBtn} />
                <div className='disk-roll'>
                    <Carousel ref={carouselRef} dots={false} speed={1500} slidesToShow={5} slidesToScroll={5}>
                        {
                            newAlbums.slice(0,10).map(album=>{
                                return(
                                    <NewAlbumCom album = {album} key={album.id}/>
                                )
                            })
                        }
                    </Carousel>
                </div>

                <button className='right-btn' onClick={handleRightBtn} />
            </DiskWrapper>

        </AlbumWrapper>
    )

}

export default NewAlbum;