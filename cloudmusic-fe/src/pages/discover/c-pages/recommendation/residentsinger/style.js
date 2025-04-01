import styled from "styled-components";
export const ResidentSingerWrapper = styled.div`
    margin: 20px 20px;
    .title{
        font-size: 12px;
        height: 23px;
        border-bottom: 1px solid #ccc;
        position: relative;
    }
    .view-all{
        float: right;
        color: #666;
        font-weight: normal;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }

    .apply-btn{
        display: inline-block;
        width: 205px;
        height: 33px;
        line-height: 33px;
        color: #333;
        padding: 0 5px 0 0;
        margin-top: 15px;
        text-decoration: none;
    
        text-align: center;
        font-weight: 600;
        border:1px solid #d3d3d3;
        background: linear-gradient(to bottom, #fdfdfd 0%, #f1f1f1 50%, #e5e5e5 100%);

        border-radius:5px;
        &:hover{
            background: #fcfcfc;


        }

    }
`

export const SingersUL = styled.ul`
    li{
        margin-top: 14px;
        width: 210px;
        height: 62px;
        float: left;
        background: #fafafa;
        
        cursor: pointer;
    }
`

export const ContentWrapper = styled.div`
    width: 210px;
    height: 62px;
    display: flex;
    .content-img{
        float: left;
        width: 62px;
        height: 62px;
    }
    .info{
        width: 133px;
        height: 60px;
        float: left;
        font-size: 12px;
        padding-left: 14px;
        
        border: 1px solid #ccc;
    }
    h4 {
        color: #000;
        font-weight: 600;
        font-size: 14px;
        margin: 10px 0 ;
    }
    p{
        width: 120px;
        color: #666;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    &:hover{
        background: #f4f4f4;
    }
`