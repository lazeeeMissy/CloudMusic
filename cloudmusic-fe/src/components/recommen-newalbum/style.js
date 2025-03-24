import styled from "styled-components";

import imgBG from '../../assets/img/index/index.png'
import mask from '../../assets/img/coverall.png'
import icon from '../../assets/img/iconall.png'

export const AlbumWrapper = styled.div`
    
    height: 150px;
    margin-left: 11px;
    margin-top: 30px;
    background: url(${imgBG}) no-repeat 0 9999px;
    background-position: -260px 100px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;

    .title{
        color: #000;
        cursor: pointer;
        white-space: nowrap;
        &:hover{
            text-decoration: underline;
        }
    }
    .artists{
        color: #666;
        cursor: pointer;
        margin: 0;
     
        &:hover{
            text-decoration: underline;
        }
    }


`
export const CoverWrapper=styled.div`
    position: relative;
    margin-bottom: 7px;

    .cover-mask{
        height: 100px;
        width: 118px;
        position: absolute;
        left: 0;
        top: 0;
        background: url(${mask}) no-repeat;
        background-position: 0 -570px;
        cursor: pointer;
        text-indent: -9999px;
    }
    .cover-play{
        position: absolute;
        float: right;
        right: 25px;
        bottom:5px;
        height: 22px;
        width: 22px;
        background: url(${icon}) no-repeat;
        background-position: 0 -85px;
        text-indent: -9999px;
        display: none;
        &:hover{
            background-position: 0 -110px;
        }
    }

    &:hover .cover-play{
        display: block;
    }

`
