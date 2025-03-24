import { getImgSize } from '../../utils/format';
import './style'
import { CoverWrapper,AlbumWrapper } from './style';

const NewAlbumCom = ({album})=>{
    return (
        <AlbumWrapper>
            <CoverWrapper>
                <img className='cover-img' src={getImgSize(album.picUrl, 100)} />
                <a className='cover-mask' title={album.name}>mask</a>
            <a className='cover-play' >play</a>

            </CoverWrapper>
            <a className='title' href='/discover/album'>{album.name}</a>
            <p className='artists'>{album.artist.name}
            </p>

        </AlbumWrapper>
    )
}

export default NewAlbumCom;