
export function getImgSize(imgUrl, width, height = width){
    return imgUrl+`?param=${width}x${height}`
}

export function getFormattedTime(duration){
    if(duration === null){
        return "00:00"
    }
    var minute = Math.floor(duration/60);
    var seconds = Math.floor(duration%60);
    return String(minute).padStart(2,"0")+":"+String(seconds).padStart(2,"0"); 
}

export function formatLyrics(lyrics){
    const lines = lyrics.split('\n');
    const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/ ;
    const res = [];
    for(const line of lines){
        const match = line.match(timeRegExp);
        if(!match || match.length <1){
            continue;
        }
        const minutes = Number(match[1]);
        const seconds = Number(match[2]);
        const millisecond = Number(match[3].padEnd(3,"0"));
        const timeStamp = (minutes*60+seconds)*1000+millisecond;
        
        const lyric = line.replace(timeRegExp, "");
        res.push({timeStamp, lyric});

    }
    return res;
}