import { useDispatch, useSelector } from 'react-redux'
import './style'
import { PlayerFooterWrapper, PlayerLockWrapper, PlayerFooterContentWrapper,ContlBtnsWrapper } from './style'
import { message, Slider } from 'antd'
import { getFormattedTime, getImgSize } from '../../../utils/format'
import {  useEffect, useRef, useState } from 'react'
import { changeCurrentSong, changePlayMode, fetchLyrics, fetchPlayLink, setCurrentIndex, setLyricsIndex } from '../../../store/player/player'

const PlayerFooter = () => {

    const {currentSong,playLink, currentLyrics, lyricsIndex,playmode, playList, currentIndex} = useSelector((state)=>({
        currentSong: state.player.currentSong,
        playLink:state.player.playLink,
        currentLyrics: state.player.currentLyrics,
        lyricsIndex: state.player.lyricsIndex,
        playmode: state.player.playMode,
        playList: state.player.playList,
        currentIndex: state.player.currentIndex,
    }))
    const [isPlaying, setIsPlaying] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgree] = useState(0);
    const audioRef = useRef(null);
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();
// 获取当前歌曲信息
    useEffect(()=>{
        if (currentSong?.id) {//modify
            dispatch(fetchPlayLink(currentSong.id));
            dispatch(fetchLyrics(currentSong.id));
          }
    },[dispatch, currentSong])
// 获取歌曲播放url
    useEffect(()=>{
        if(audioRef.current && playLink.length>0){
            audioRef.current.src = playLink[0].url;
            audioRef.current.load()
        
        }
    },[playLink])
// 播放/暂停按钮
    const handlePlayPause = ()=>{
        if(!audioRef.current) return;
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play().catch(err =>{});
        }
        setIsPlaying(!isPlaying);

    }
//实时显示时间和进度
    const handleTimeUpdate = ()=>{
        if(!isDragging){
            setCurrentTime(audioRef.current.currentTime);
            setProgree(Math.floor(audioRef.current.currentTime*1000*100/currentSong.dt));
            
        }
        //按照时间展示歌词
        let index = 0;
        for(const i in currentLyrics){ // const i 的类型是String, 用Number包裹实现正确的索引和比较
            // 最后一个的timeStamp也比currentTime小, 所以展示最后一行
            if(Number(i) === currentLyrics.length-1 || currentLyrics[Number(i)+1]?.timeStamp>currentTime*1000){
                index = i;
                break;
            }
        }
        if(index !== lyricsIndex){
            dispatch(setLyricsIndex(index));
            message.destroy(currentLyrics[index>0? index-1: index].lyric)
            messageApi.open({
                content: currentLyrics[index].lyric,
                className:'custom-message',
                duration:0,
                key: index,
            })
        }
    }
    //
    const handleDragging = (value)=>{
        setIsDragging(true);
        setProgree(value);
        const newTime = (value/100)*currentSong.dt/1000;
        setCurrentTime(newTime);    
    }
    const handleUpdateProgress = (value)=>{
        const newTime = (value/100)*currentSong.dt /1000;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
        setIsDragging(!isDragging);
    }

    const handlePlayModeChange = ()=>{
        dispatch(changePlayMode((playmode+1)%3))
    }

    const handlePlayNext = ()=>{
        setCurrentTime(0);
        if(playmode === 0 || playmode === 2){// sequential / single
            const index = (currentIndex+1)%(playList.length);
            dispatch(setCurrentIndex(index));
            dispatch(changeCurrentSong(index));
        }
    }
    const handlePlayPrev = ()=>{
        setCurrentTime(0);
        console.log(playList);
        if(playmode === 0 || playmode === 2){// sequential / single
            const index = currentIndex === 0? playList.length-1 : (currentIndex-1) %(playList.length);
            console.log(index)
            dispatch(setCurrentIndex(index));
            dispatch(changeCurrentSong(index));
        }
    }
   
    return (
        <PlayerFooterWrapper>
            <div className='expand'/>
            <div className='content'>
                <PlayerFooterContentWrapper>
                    <div className='play-btns'>
                        <span className='prev' title='上一首(ctrl+<-)' onClick={handlePlayPrev}/>
                        <span className={`play-btn ${isPlaying? 'play':'pause'}`} title='播放/暂停(P)' onClick={handlePlayPause}/>
                        <span className='next' title='下一首(ctrl+->)'  onClick={handlePlayNext}/>
                    </div>
                    <div className='img-div content-div'>
                        <img src={getImgSize(currentSong?.al?.picUrl, 34)}/>
                        <a href='/' className='mask'>cover</a>
                    </div>
                    <div className='play-bar content-div'>
                        <div>
                            <span className='song-name'>{currentSong?.name}</span>
                            <span className='singer-name'>{ // 隐式返回
                                currentSong?.ar?.map((item,index)=>(index === 0? item.name:' / '+item.name))
                            }</span>
                        </div>
                        <div className='progress-com'>
                        <Slider className='progress-bar' value={progress} tooltip={{open:false}} 
                            onChange={(value)=>handleDragging(value)} onChangeComplete={(value)=>handleUpdateProgress(value)}/>
                        <span className='time-wrapper'>
                            <em className='current-time'>{getFormattedTime(currentTime)}</em>
                            <em> / </em>
                            <em className='duration'>{getFormattedTime(currentSong?.dt/1000)}</em>
                        </span>
                        
                        
                        </div>
                    </div>
                   
                    <div className='operators content-div'>
                        <span className='pip icons' title='画中画歌词'>画中画歌词</span>
                        <span className='collect icons' title='收藏'>收藏</span>
                        <span className='share icons' title='分享'>分享</span>
                    </div>
                    <div className='divider content-div'>|</div>
                    <ContlBtnsWrapper playmode = {playmode}>
                        <span className='volume icons'/>
                        <span className='loop icons' onClick={handlePlayModeChange}/>
                        <div className='addto'>
                            <span className='tip'>已添加到播放列表</span>
                    
                            <span className='icn-list icons'>0</span>
                        </div>
                        <span className='quality icons'></span>
                    </ContlBtnsWrapper>
                </PlayerFooterContentWrapper>
            </div>

            <PlayerLockWrapper>
                <div className='locker-left'>
                    <span className='lock-btn'/>
                </div>
                <div className='locker-right' />
            </PlayerLockWrapper>
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}/>
            {contextHolder}
        </PlayerFooterWrapper>
        
    )
}

export default PlayerFooter;