import styled from "styled-components"
import dowanloadImg from '../../assets/img/index/download.png'
import bannerImg from '../../assets/img/index/banner.png'
export const BannerWrapper = styled.div`
    height: 285px;
    display: flex;
    position: relative;
`
export const ContentWrapper = styled.div`
    ${props=> props.theme.mixin.wrapvs2}
    height: 285px;
    display: flex;
    margin: 0 auto;
`
export const LeftContent = styled.div`
    width: 730px;
    display: inline-block;
    .item{
        height: 285px;

        .item-img{
            cursor: pointer;
            width: 730px;
            height: 285px;
        }
    }

    .dots{
        position: absolute;
        width: 730px;
        height: 20px;
        bottom: 5px;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        li{
            margin: 0 2px;

            .item{
                display: inline-block;
                width: 20px;
                height: 20px;
                background-image: url(${bannerImg})  ;
                background-position: 3px -343px;
                cursor: pointer;

                &:hover,
                &.active{
                background-position: -16px -343px;
            }
            }
            
        }
    }

`
export const RightContent = styled.div`
    width: 254px;
    height: 285px;
    background-position: 0 0;
    background-image: url(${dowanloadImg}) ;

    
    .download-btn{
        position: absolute;
        width: 217px;
        height: 58px;
        display: block;
        margin: 188px 0 0 19px;
        background-image: url(${dowanloadImg});
        background-position: 0 60px;

        opacity: 0;
        &:hover{
            opacity: 1;
        }
    }

    p{
        color: #8d8d8d;
        text-align: center;
        display: block;
        position: absolute;
        bottom: 5px;
        margin-left: 15px;
    }
   
`
export const BannerControl = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    .left-flag-btn{
        width: 37px;
        height: 63px;
        text-indent: -9999px;
        position: absolute;
        top: 50%;
        background: url(${bannerImg});
        background-position: 0 300px;
        margin-top: -31px;
        left: 13%;
        &:hover{
            background-position:0 230px;
        }
    }
    .right-flag-btn{
        width: 37px;
        height: 63px;
        text-indent: -9999px;
        position: absolute;
        top: 50%;
        background: url(${bannerImg});
        background-position: 0 150px;
        margin-top: -31px;
        right: 13%;
        &:hover{
            background-position:0 80px;
        }
    }

`
