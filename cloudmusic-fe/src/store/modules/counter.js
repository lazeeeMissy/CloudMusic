import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:100,
        name:"xixi",
        message:"this is a message"
    },
    reducers:{// state 和payload是reducer自带的包裹的数据
        changeMessageAction(state, {payload}){
            state.message = payload
        }
    }
})

// 按需导出方法
export const {changeMessageAction} = counterSlice.actions
export default counterSlice.reducer