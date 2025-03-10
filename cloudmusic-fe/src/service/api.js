import request from "./request";

export const getDiscover = ()=>{
    return  request.get('homepage/block/page');
}