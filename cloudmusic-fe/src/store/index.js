import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counter'

const store = configureStore({
    reducer:{
        counter: counterReducer,//第一个是重命名
    }
})

export default store