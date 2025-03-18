import request from "./request";
//这里如果是({url:'/banner'})的话不能正确获取数据
export async function getBanners(){
    return await request.get('/banner');
}


// recommendation
export async function getHomeHotPlaylist(){
    return await request.get('/personalized');

}