
export function getImgSize(imgUrl, width, height = width){
    return imgUrl+`?param=${width}x${height}`
}