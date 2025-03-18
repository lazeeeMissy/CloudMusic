import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHomeHotPlaylist } from "../../service/discover-api";

export const fetchBannersAction = createAsyncThunk("fetchBanners", async ()=>{
    const res = await getBanners();
    return res.data.banners;
})

export const fetchHomeHotPlaylist = createAsyncThunk("fetchHomeHotPlaylist", async ()=>{
    const res = await getHomeHotPlaylist();
    return res.data.result;
})

const recommendSlice = createSlice({
    name:'recommend',
    initialState:{
        banners:[],
        hotPlaylist:[],
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchBannersAction.pending, (state, action)=>{
            
        })
        .addCase(fetchBannersAction.fulfilled, (state, action)=>{
            state.banners = action.payload;
        }).addCase(fetchBannersAction.rejected, (state, action)=>{
            console.log("Request is rejected!")
        })

        builder.addCase(fetchHomeHotPlaylist.pending, (state)=>{
            console.log("HotPlaylist is loading");
        }).addCase(fetchHomeHotPlaylist.fulfilled, (state, {payload})=>{
            state.hotPlaylist = payload;
        }).addCase(fetchHomeHotPlaylist.rejected, (state)=>{
            console.log("hot playlist request is rejected!");
        })
    }

})

export default recommendSlice.reducer;