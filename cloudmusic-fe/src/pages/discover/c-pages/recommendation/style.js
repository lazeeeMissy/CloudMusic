import styled from "styled-components";
import bgImg from "../../../../assets/img/fram/wrapper2.png"
export const  RecommendationWrapper  = styled.div`
    ${props=> props.theme.mixin.wrapv2}
    background: url(${bgImg});
`

export const RecmdContent = styled.div`
    display: flex;
    height: 800px;

`

export const LeftWrapper = styled.div`
    width: 729px;
    height: 800px;
    padding: 20px 20px 40px 20px;
    display: block;
`
export const RightWrapper = styled.div`
    width: 250px;
    position: relative;
    margin-left: 1px;

    float: right;
    display: block;
    height: 800px;

`
