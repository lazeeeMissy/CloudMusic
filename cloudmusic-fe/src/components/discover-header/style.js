import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: ${props => props.theme.color.primary};
    height: 34px;
    .content{
        ${props => props.theme.mixin.wrapv1};
        margin: 0 206px;
        padding: 0;
    }
    .nav{
        font-size: 12px;
        display: flex;
        padding: 0 0 0 175px;
        margin: 0;
        line-height: 34px;

        .item{
            cursor: pointer;
            a{
                margin:5px 20px 0 20px;
                padding: 0 17px;
                color: #fff;
                padding: 3px 17px;
            }
            &:hover a{
                background-color: #9b0909;
                border-radius: 16px;
            }
            .active{
                background-color: #9b0909;
                border-radius: 16px;
            }

            
        }
    }

`
