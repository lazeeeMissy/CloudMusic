import request from "./request";
//这里如果是({url:'/banner'})的话不能正确获取数据
export async function getBanners(){
    return (await request.get('/banner'));
}


// recommendation
export async function getHomeHotPlaylist(){
    return (await request.get('/personalized'));

}

export async function getHomeNewAlbum(){
    return (await request.get('/album/newest'));
}

export async function getRankList(id){
    const res =  await request.get('/playlist/detail',{
        params:{
            id:id
        }
    })
    return res.data.playlist;
}