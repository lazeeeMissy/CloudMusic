import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHomeHotPlaylist, getHomeNewAlbum } from "../../service/discover-api";
//Promise.all 的作用
//1. 并行处理异步操作，提高性能，减少等待时间。
//2. 错误捕获统一，如果有一个失败，就会进入 catch。
const fetchBannersAction = createAsyncThunk("fetchBanners", async ()=>{
    const res = await getBanners();
    return res.data.banners;
})

const fetchHomeHotPlaylist = createAsyncThunk("fetchHomeHotPlaylist", async ()=>{
    const res = await getHomeHotPlaylist();
    return res.data.result;
})

const fetchNewAlbumAction = createAsyncThunk("fetchNewAlbums",async ()=>{
    const res = await getHomeNewAlbum();
    console.log(res.data.albums);
    return res.data.albums;
})

export const fetchRecommendationData = createAsyncThunk("recommend/fetchRecommendationData", async(_,{dispatch})=>{
    await Promise.all([
        dispatch(fetchBannersAction()),
        dispatch(fetchHomeHotPlaylist()),
        dispatch(fetchNewAlbumAction()),
    ])
})

const recommendSlice = createSlice({
    name:'recommend',
    initialState:{
        banners:[],
        hotPlaylist:[],
        newAlbums:[],
    },
    reducers:{},
    extraReducers:(builder)=>{
    
        builder.addCase(fetchBannersAction.fulfilled, (state, action)=>{
            state.banners = action.payload;
        }).addCase(fetchHomeHotPlaylist.fulfilled, (state, {payload})=>{
            state.hotPlaylist = payload;
        }).addCase(fetchNewAlbumAction.fulfilled, (state, {payload})=>{
            state.newAlbums = payload;
        }).addCase(fetchRecommendationData.pending, ()=>{
            console.log("loading data")
        }).addCase(fetchRecommendationData.rejected,()=>{
            console.log("failed to loading")
        })
    }

})

export default recommendSlice.reducer;