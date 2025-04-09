import { useDispatch, useSelector } from 'react-redux'
import './style'
import { PlayerFooterWrapper, PlayerLockWrapper, PlayerFooterContentWrapper } from './style'
import { Slider } from 'antd'
import { getFormattedTime, getImgSize } from '../../../utils/format'
import {  useEffect, useRef, useState } from 'react'
import { fetchLyrics, fetchPlayLink, setLyricsIndex } from '../../../store/player/player'

const PlayerFooter = () => {

    const {currentSong,playLink, currentLyrics, lyricsIndex} = useSelector((state)=>({
        currentSong: state.player.currentSong.songs[0],
        playLink:state.player.playLink,
        currentLyrics: state.player.currentLyrics,
        lyricsIndex: state.player.lyricsIndex,
    }))
    const [isPlaying, setIsPlaying] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgree] = useState(0);
    const audioRef = useRef(null);
    const dispatch = useDispatch();
// 获取当前歌曲信息
    useEffect(()=>{
        if (currentSong?.id) {//modify
            dispatch(fetchPlayLink(currentSong.id));
            dispatch(fetchLyrics(currentSong.id));
          }
    },[currentSong,dispatch])
// 获取歌曲播放url
    useEffect(()=>{
        if(audioRef.current && playLink.length>0){
            audioRef.current.src = playLink[0].url;
        }
    },[playLink])
// 播放/暂停按钮
    const handlePlayPause = ()=>{
        if(!audioRef.current) return;
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);

    }
//实时显示时间和进度
    const handleTimeUpdate = ()=>{
        if(!isDragging){
            setCurrentTime(audioRef.current.currentTime);
            setProgree(Math.floor(audioRef.current.currentTime*1000*100/currentSong.dt));
        }
        //按照时间展示歌词, correct place?
     
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
            console.log(currentLyrics[index].lyric)
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
   
    return (
        <PlayerFooterWrapper>
            <div className='expand'/>
            <div className='content'>
                <PlayerFooterContentWrapper>
                    <div className='play-btns'>
                        <span className='prev' title='上一首(ctrl+<-)'/>
                        <span className={`play-btn ${isPlaying? 'play':'pause'}`} title='播放/暂停(P)' onClick={handlePlayPause}/>
                        <span className='next' title='下一首(ctrl+->)'/>
                    </div>
                    <div className='img-div content-div'>
                        <img src={getImgSize(currentSong.al.picUrl, 34)}/>
                        <a href='/' className='mask'>cover</a>
                    </div>
                    <div className='play-bar content-div'>
                        <div>
                            <span className='song-name'>{currentSong.name}</span>
                            <span className='singer-name'>{currentSong.ar[0].name}</span>
                        </div>
                        <div className='progress-com'>
                        <Slider className='progress-bar' value={progress} tooltip={{open:false}} 
                            onChange={(value)=>handleDragging(value)} onChangeComplete={(value)=>handleUpdateProgress(value)}/>
                        <span className='time-wrapper'>
                            <em className='current-time'>{getFormattedTime(currentTime)}</em>
                            <em> / </em>
                            <em className='duration'>{getFormattedTime(currentSong.dt/1000)}</em>
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
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}/>
        </PlayerFooterWrapper>
    )
}

export default PlayerFooter;