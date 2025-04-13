import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import tmpData from '../../assets/data/tmp-player.json'
import tmpPlayList from '../../assets/data/tmp-playList.json'
import tmpPrivilege from '../../assets/data/tmp-privilege.json'
import { getLyric, getPlayLink, getSongDetail } from "../../service/player";
import { formatLyrics } from "../../utils/format";

export const fetchCurrentSong = createAsyncThunk("/fetchCurrentSong", (id, {dispatch, getState})=>{
        const list = getState().player.playList;
        const listCopy = [...list];
        const index = listCopy.findIndex(item => item.id === id);
        if(index !== -1){
            dispatch(setCurrentIndex(index));
            dispatch(setCuurentSong(listCopy[index]));
        }else{
            getSongDetail(id).then((res)=>{
                const song = res.songs[0];
                const privilege = res.privileges[0];
                console.log("添加新歌")
                dispatch(addPlayList({song, privilege}));
                dispatch(setCuurentSong(song));
                dispatch(setCurrentIndex(listCopy.length));
            })
        }
        
})

export const fetchPlayLink = (id)=>{
    return async (dispatch)=>{
        try{
            const res = await getPlayLink(id);
            dispatch(setPlayLink(res.data));

        }
        catch(error){
            console.log(error)
        }
    }
}

export const fetchLyrics = createAsyncThunk("player/fetchLyrics", (id, {dispatch})=>{
    
    getLyric(id).then((res)=>{
        // get lyrics
        const lyrics = res.lrc;

        //format time and lyrics
        const formatted = formatLyrics(lyrics.lyric);
        // set lyrics
        dispatch(setCurrentLyrics(formatted));
    })
})

const playerSlice = createSlice({
    name:"player",
    initialState:{
        currentSong:{},
        playLink:{},
        currentLyrics:[],  // {timeStamp, lyric}
        lyricsIndex:0,
        playList:tmpPlayList,
        privileges:tmpPrivilege,
        currentIndex:-1,
        playMode:0, //0 sequential, 1 radom, 2 single
    },
    reducers:{
        setCuurentSong(state, {payload}){
            state.currentSong = payload;
        },
        changeCurrentSong(state, {payload}){
            state.currentSong = state.playList[payload];
        },
        setPlayLink(state, {payload}){
            state.playLink = payload;
        },
        setCurrentLyrics(state,{payload}){
            state.currentLyrics = payload;
        },
        setLyricsIndex(state, {payload}){
            state.lyricsIndex = payload;
        },
        addPlayList(state,{payload}){
            const {song, privilege} = payload;
            state.playList.push(song);
            state.privileges.push(privilege);
            console.log(current(state.playList));
            
        },
        setCurrentIndex(state, {payload}){
            state.currentIndex = payload;
        },
        changePlayMode(state, {payload}){
            state.playMode = payload;
        },
    
    }

})

export const {setCuurentSong, setPlayLink, setCurrentLyrics,setLyricsIndex, addPlayList, setCurrentIndex, 
                changePlayMode, changeCurrentSong
} = playerSlice.actions;
export default playerSlice.reducer;