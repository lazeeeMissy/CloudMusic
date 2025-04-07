import './style'
import { PlayerFooterWrapper, PlayerLockWrapper, PlayerFooterContentWrapper } from './style'
import { Slider } from 'antd'
const PlayerFooter = () => {
    return (
        <PlayerFooterWrapper>
            <div className='expand'/>
            <div className='content'>
                <PlayerFooterContentWrapper>
                    <div className='play-btns'>
                        <span className='prev' title='上一首(ctrl+<-)'/>
                        <span className='play-btn' title='播放/暂停(P)'/>
                        <span className='next' title='下一首(ctrl+->)'/>
                    </div>
                    <div className='img-div content-div'>
                        <img src="https://s4.music.126.net/style/web2/img/default/default_album.jpg"/>
                        <a href='/' className='mask'>cover</a>
                    </div>
                    <div className='play-bar content-div'>
                        <div>
                            <span className='song-name'>title</span>
                            <span className='singer-name'>title</span>
                        </div>
                        <div className='progress-com'>
                        <Slider className='progress-bar' defaultValue={30}  />
                        <span className='time-wrapper'>
                            <em className='current-time'>00:00</em>
                            <em> / </em>
                            <em className='duration'>00:00</em>
                        </span>
                        
                        
                        </div>
                    </div>
                    <div className='operators content-div'>
                        <span className='pip icons' title='画中画歌词'>画中画歌词</span>
                        <span className='collect icons' title='收藏'>收藏</span>
                        <span className='share icons' title='分享'>分享</span>
                    </div>
                    <div className='ctrl-btns content-div'>
                        <span className='volume icons'/>
                        <span className='loop icons'/>
                        <div className='addto'>
                            <span className='tip'>已添加到播放列表</span>
                    
                            <span className='icn-list icons'>0</span>
                        </div>
                        <span className='quality icons'></span>
                    </div>
                </PlayerFooterContentWrapper>
            </div>

            <PlayerLockWrapper>
                <div className='locker-left'>
                    <span className='lock-btn'/>
                </div>
                <div className='locker-right' />
            </PlayerLockWrapper>
        </PlayerFooterWrapper>
    )
}

export default PlayerFooter;