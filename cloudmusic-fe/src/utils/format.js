
export function getImgSize(imgUrl, width, height = width){
    return imgUrl+`?param=${width}x${height}`
}

export function getFormattedTime(duration){
    if(duration==null){
        return "00:00"
    }
    var minute = Math.floor(duration/60);
    var seconds = Math.floor(duration%60);
    return String(minute).padStart(2,"0")+":"+String(seconds).padStart(2,"0"); 
}