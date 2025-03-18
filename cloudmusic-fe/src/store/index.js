import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counter'
import recommendReducer from './discover/recommend'
const store = configureStore({
    reducer:{
        counter: counterReducer,//第一个是重命名
        recommend: recommendReducer,
    }
})

export default store