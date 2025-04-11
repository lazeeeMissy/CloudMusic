import request from "./request";

export async function getPlayLink(id){
    const res = await request.get('/song/url/v1',{
        params:{
            id:id
        }
    }
        
    )
    return res.data;
}

export async function getLyric(id){
    const res = await request.get("/lyric",{
        params:{
            id
        }
    })
    return res.data;
}

export async function getSongDetail(ids){
    const res = await request.get('/song/detail',{
        params:{
            ids
        }
    })
    return res.data;
}