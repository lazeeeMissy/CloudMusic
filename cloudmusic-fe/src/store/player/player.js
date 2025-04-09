import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmpData from '../../assets/data/tmp-player.json'
import { getLyric, getPlayLink } from "../../service/player";
import { formatLyrics } from "../../utils/format";

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
        currentSong:tmpData,
        playLink:{},
        currentLyrics:[],  // {timeStamp, lyric}
    },
    reducers:{
        setCuurentSong(state, {payload}){
            state.currentSong = payload;
        },
        setPlayLink(state, {payload}){
            state.playLink = payload;
        },
        setCurrentLyrics(state,{payload}){
            state.currentLyrics = payload;
        }
    }

})

export const {setCuurentSong, setPlayLink, setCurrentLyrics} = playerSlice.actions;
export default playerSlice.reducer;