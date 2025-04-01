import styled from "styled-components";

export const AnchorsWrapper = styled.div`
    margin: 20px 20px;
    .title{
        font-size: 12px;
        height: 23px;
        border-bottom: 1px solid #ccc;
        position: relative;
    }

`

export const AnchorsUL = styled.ul`
    li{
        margin-top: 14px;
        width: 210px;
        height: 40px;
        float: left;
        
    }
`

export const ContentWrapper = styled.div`
    width: 210px;
    height: 40px;
    display: flex;
    cursor: pointer;

    .content-img{
        float: left;
        width: 40px;
        height: 40px;
    }
    .info{
        width: 133px;
        height: 40px;
        float: left;
        font-size: 12px;
        padding-left: 8px;
        
    }
    h4 {
        color: #000;
        font-weight: 600;
        font-size: 12px;
        margin: 5px 0 0 0 ;
        &:hover{
            text-decoration: underline;
        }
    }
    p{
        color: #666;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 8px;
    }

`