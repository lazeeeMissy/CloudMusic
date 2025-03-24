import styled from "styled-components";
import mask from "../../../../../../assets/img/coverall.png"
import icons from "../../../../../../assets/img/index/index.png"
import add from "../../../../../../assets/img/icon.png"
export const ListWrapper = styled.div`
    width: 229px;
`

export const CoverWrapper = styled.div`
    height: 100px;
    margin: 20px 0 0 19px;
    display: flex;
    position: relative;
    .cover-all{
        width: 80px;
        height: 80px;
    }
    .cover{
    
        display: block;
        border: 0;
    }

    .mask{
        width: 80px;
        height: 80px;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        background: url(${mask}) no-repeat;
        background-position: -145px -57px;
    }

    .title{
        float: left;
        width: 116px;
        margin: 6px 0 0 10px;
        h3{
            color: #333;
        }
        h3:hover{
                text-decoration: underline;
        }

        .btns{
            margin-top: 10px;
            span{
                display: block;
                float: left;
                width: 22px;
                height: 22px;
                margin-right: 10px;
                text-indent: -9999px;
                background: url(${icons}) no-repeat;
                cursor: pointer;
            }
            .play{
                background-position: -267px -205px;
                &:hover{
                    background-position: -267px -235px;
                }
            }
            .collect{
                background-position: -300px -205px;
                &:hover{
                    background-position: -300px -235px;
                }
            }
        }

    }

`

export const ContentWrapper = styled.div`
    padding: 0;
    margin: 0;

    ol {
        padding:0;
        margin: 0;
        line-height: 32px;
    }

    .find-more{
        float: right;
        margin-right: 25px;
        cursor: pointer;
        a{
            color: #000;
            &:hover{
            text-decoration: underline;
        }
        }
        
    }
`

export const ItemCentent = styled.li`
    height: 32px;
    list-style: none;
    cursor: pointer;
    overflow: hidden;
    .num{
        position: relative;
        float: left;
        margin-left: 10px;
        font-size: 16px;
        width: 35px;
        height: 32px;
        text-align: center;

        color: #666666;

    }
    .num.colored{
        color: #c10d0c;
    }

    .function{
        display: flex;
    }
    .item-title{
        flex: 1;
        //color: #666666;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-wrap: normal;
        color:#000;
    
    }
    &:hover .item-title{
        text-decoration: underline;    
    }
 

    .icons{
        display: none;
        float: right;
        width: 82px;
        margin-top: 7px;

        span{
            background: url(${icons}) no-repeat;
            float: left;
            width: 17px;
            height: 17px;
            margin-right: 8px;
            vertical-align: middle;
        }
        .i-play{
            background-position: -267px -268px;
            &:hover{
                background-position: -267px -288px;
            }
        }
        .i-add{
            background:url(${add} )no-repeat;
            background-position: 0 -700px;
            margin-top: 2px;
            &:hover{
                background-position: -22px -700px;
            }
        }
        .i-collect{
            background-position: -297px -268px;
            &:hover{
                background-position: -297px -288px;
            }
        }

    }

    &:hover .icons{
        display: block;
    }

`