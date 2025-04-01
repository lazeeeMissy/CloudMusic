import styled from "styled-components";
import bgImg from "../../../../assets/img/fram/wrapper2.png"
export const  RecommendationWrapper  = styled.div`
    ${props=> props.theme.mixin.wrapv2}
    background: url(${bgImg});
`

export const RecmdContent = styled.div`
    display: flex;
`

export const LeftWrapper = styled.div`
    width: 689px;
    padding: 20px 20px 40px 20px;
    display: block;
`
export const RightWrapper = styled.div`
    width: 250px;
    position: relative;
    margin-left: 1px;
    float: right;
    display: block;
    .dis-vip{
        margin-top: 5px;
        width: 100%;
        .vip-img{
            cursor: pointer;
            width: 100%;
        }
    }
`

export const HotWrapperUl = styled.ul`
    margin: 30px 0 0 -42px;
    padding: 0;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    .hotItem{
        margin-bottom: 8px;
    }
    li{
        width: 140px;
        height: 234px;
        padding-left: 42px;
        overflow: hidden;
        display: inline-block;
        line-height: 1.4;
    }
    .dec{
        color: #000;
        font-size: 14px;

        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
`
