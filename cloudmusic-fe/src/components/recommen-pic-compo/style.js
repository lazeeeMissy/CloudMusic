import styled from "styled-components";
import cover from "../../assets/img/coverall.png"
import icon from "../../assets/img/iconall.png"

export const CoverWarpper = styled.div`
    width: 140px;
    height: 140px;
    position: relative;
    display: block;

    img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${cover}) no-repeat;
        background-position: 0 0 ;
    }
    .bottom{
        position: absolute;
        bottom:0;
        left: 0;
        width: 100%;
        height: 27px;
        background: url(${cover}) no-repeat;
        background-position: 0 -537px;
    }
    .icon-headset{
        float: left;
        width: 14px;
        height: 11px;
        background: url(${icon}) no-repeat;
        background-position: 0 -24px;
        margin: 8px 8px 10px 10px;
    }
    .playCount{
        float: inline-start;
        margin-top: 5px;
    }
    .play{
        float: right;
        width: 18px;
        height: 18px;
        margin: 5px 6px 0 0;
        background: url(${icon}) no-repeat;
        background-position: 0 0;
    }
  
`