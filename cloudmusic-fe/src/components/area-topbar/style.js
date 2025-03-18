import styled from "styled-components";

import circle from "../../assets/img/index/index.png"

export const BarWrapper = styled.div`
    background: url(${circle}) no-repeat 0 9999px;
    padding: 0 10px 0 34px;
    height: 33px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    a{
        font-size: 20px;
        color: #333333;
        float: left;
        font-weight: normal;
        line-height: 28px;//this

        &:hover{
            text-decoration: underline;
        }
    }

    .tabs{
        float: left;
        display: flex;
        margin: 7px 0 0 20px;
        align-items: center;
        
        .item{
            position: relative;
            
            .sub-tab{
            font-size: 12px;
            color: #666;
            line-height: 1.5;
            }

            .line{
            margin: 0 10px;
            color: #ccc;
            line-height: 1.5;
            }
        }    
        :last-child{
            .line{
                display: none;
            }
        }   
    }

    .more{
        float: right;
        margin-top: 9px;
        a{
            color: #666;
            cursor: pointer;
            font-size: 12px;
            line-height: 1.2;
            
        }
        .more-pointer{
            background: url(${circle}) no-repeat 0 9999px;
            background-position: 0 -240px;
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 4px;
            vertical-align: middle;
        }
    }

`