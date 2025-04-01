import styled from "styled-components";
import imgs from "../../../../../assets/img/index/index.png"
export const LoginWrapper = styled.div`
    display:block;
    height: 126px;
    padding-top: 0;
    background: url(${imgs}) no-repeat;
    background-position: 0 0 ;
    justify-items: center;
    .note{
        width: 205px;
        margin: 0 auto;
        padding: 16px 0;
        line-height: 22px;
        color: #666;
    }
    .login-btn{
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        background: url(${imgs}) no-repeat;
        background-position: 0 -195px;
        cursor: pointer;
        &:hover{
            background-position: -110px -195px;
        }
    }

`

