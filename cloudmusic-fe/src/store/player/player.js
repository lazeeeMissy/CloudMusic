import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmpData from '../../assets/data/tmp-player.json'
import { getPlayLink } from "../../service/player";

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

const playerSlice = createSlice({
    name:"player",
    initialState:{
        currentSong:tmpData,
        playLink:{},
    },
    reducers:{
        setCuurentSong(state, {payload}){
            state.currentSong = payload;
        },
        setPlayLink(state, {payload}){
            state.playLink = payload;
        }
    }

})

export const {setCuurentSong, setPlayLink} = playerSlice.actions;
export default playerSlice.reducer;