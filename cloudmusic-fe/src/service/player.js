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