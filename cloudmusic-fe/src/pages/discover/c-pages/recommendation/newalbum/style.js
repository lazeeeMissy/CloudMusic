import styled from "styled-components";
import icon from "../../../../../assets/img/index/index.png"
export const AlbumWrapper = styled.div`
    display: block;
    width: 689px;
`

export const DiskWrapper = styled.div`
    position: relative;
  
    height: 186px;
    margin: 20px 0 37px 0;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
   


    .left-btn{
        position: absolute;
        left: 4px;
        top: 78px;
        width: 17px;
        height: 17px;
        background: url(${icon}) no-repeat;
        background-position: -260px -75px;
        border: none;
        z-index: 10;
        &:hover{
            background-position: -280px -75px;
        }
    }

    .right-btn{
        position: absolute;
        right: 4px;
        top: 78px;
        width: 17px;
        height: 17px;
        background: url(${icon}) no-repeat;
        background-position: -300px -75px;
        border: none;
        &:hover{
            background-position: -320px -75px;
        }
    }
    .disk-roll{
        width: 645px;
        height: 180px;
        float: left;
        position: relative;
        padding-left: 20px;
        .item-albums{
            height: 180px;
            display: flex;
        }
    }

`
