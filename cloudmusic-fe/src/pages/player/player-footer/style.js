import styled from "styled-components";
import background from "../../../assets/img/fram/playbar.png"
import pip from "../../../assets/img/icon-pip.png"
import quality from "../../../assets/img/audio-quality.png"
import quality_hover from "../../../assets/img/audio-quality-hover.png"

export const PlayerFooterWrapper = styled.div`
    width: 100%;
    height: 53px;
    z-index: 1001;
    position: fixed;
    bottom: 0;
    zoom: 1;
    margin: 0 auto;

    .content{
        
        height: 53px;
        width: calc(100% - 67px);
        background: url(${background}) repeat-x;
        background-position: 0 0 ;
        position: absolute;
        z-index: 1;
    }

    .expand{
        cursor: pointer;
        position: absolute;
        top: -10px;
        height: 20px;
        width: 100%;
    }
`

export const PlayerLockWrapper = styled.div`
    width: 67px;
    .locker-left{
        position: absolute;
        height: 67px;
        width: 52px;
        right: 15px;
        top:-14px;
        background: url(${background}) no-repeat;
        background-position: 0 -380px;
        .lock-btn{
            display: block;
            width: 18px;
            height: 18px;
            margin: 6px 0 0 17px;
            background: url(${background}) no-repeat;
            background-position: -100px -380px;
            cursor: pointer;
            &:hover{
                background-position: -100px -400px;
                
            }
        }
    }
    .locker-right{
        position: absolute;
        height: 54px;
        width: 15px;
        right: 0;
        top:-1px;
        background: url(${background}) no-repeat;
        background-position: -52px -393px;
    }
    
`

export const PlayerFooterContentWrapper = styled.div`
    position: absolute;
    left: calc(22% - 67px);
    top: 6px;
    z-index: 15;
    width: 1030px;
    height: 47px;
    margin: 0 auto;
    .content-div{
        position: relative;
        float: left;
    }
    .play-btns{
        width: 137px;
        float: left;
        padding: 6px 0 0 0;
        span{
            float: left;
            width: 28px;
            height: 28px;
            margin-right: 8px;
            margin-top: 5px;
            background: url(${background}) no-repeat;
            cursor: pointer;
        }
        .prev{
            background-position: 0 -130px ;
            &:hover{
                background-position: -30px -130px ;
            }
        }
        .play-btn{
            width: 36px;
            height: 36px;
            margin-top: 0;
        }
        .play-btn.pause{
                background-position: 0 -204px ;
                &:hover{background-position: -40px -204px;}
            }
        .play-btn.play{
                background-position: 0 -165px ;
                &:hover{background-position: -40px -165px;}
            }
        
        .next{
            background-position: -80px -130px ;
            &:hover{
                background-position: -110px -130px ;
            }
        }

    }
    .img-div{
        height: 34px;
        width: 34px;
        margin: 6px 15px 0 0;
     
        .mask{
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
            width: 34px;
            height: 34px;
            background: url(${background}) no-repeat;
            background-position: 0 -80px;
            text-indent: -9999px;
        }
    }
    .play-bar{
        width: 581px;
        display: block;
        .song-name{
            color: #e1e1e1;
            position: relative;
            top:8px;
            left: 8px;
        }
        .singer-name{
            position: relative;
            color: #a1a1a1;
            margin-left: 12px;
            top:8px;

        }
        .progress-com{
            display: flex;
            .progress-bar{
                width: 490px;
                .ant-slider{
                    position: relative;
                    top:-3px;
                    width: 493px;
                    margin-right: 10px;
                }
                .ant-slider-rail{
                    height: 9px;
                    background:url(${require('../../../assets/img/fram/statbar.png')}) right 0;
                }
                .ant-slider-track{
                    height: 9px;
                    background:url(${require('../../../assets/img/fram/statbar.png')}) left -66px;
                }
                .ant-slider-handle{
                    width: 22px;
                    height: 24px;
                    border: none;
                    margin-top: -5px;
                    background:url(${require('../../../assets/img/iconall.png')}) 0 -250px;
                    &:hover{
                    background:url(${require('../../../assets/img/iconall.png')}) 0 -280px;
                    }
                }
                .ant-slider-handle::after{
                    display: none;
                }
            }
            
        }
        .time-wrapper{
            align-content: center;
            .current-time{
                color: #a1a1a1;
            }
        }
        em{
            color: #797979;
            text-decoration: none;
            font-size: 12px;
        }
    }

    .icons{
        float: left;
        width: 25px;
        height: 25px;
        margin: 11px 2px 0 0;
        text-indent: -9999px;
        background: url(${background}) no-repeat;
        cursor: pointer;
    }

    .operators{
        width: 87px;
        .pip{
            background: url(${pip}) no-repeat 0 0;

            &:hover{
                background-position: 0 -25px;
            }
        }
        .collect{
            background-position: -88px -163px ;
            &:hover{
                background-position: -88px -189px;
            }
        }
        .share{
            background-position: -114px -163px ;
            &:hover{
                background-position: -114px -189px;
            }
        }
    }
    .ctrl-btns{
        width: 173px;
        .volume{
            background-position: -2px -248px ;
            &:hover{
                background-position: -31px -248px;
            }
        }
        .loop{
            background-position: -3px -344px ;
            &:hover{
                background-position: -33px -344px;
            }
        }

        .addto{
            position: relative;
            zoom: 1;
            float: left;
            width: 59px;
            height: 36px;
            //还没做
            .tip{
                display: none;
            }
            .icn-list{
                display: block;
                float: none;
                width: 38px;
                padding-left: 21px;
                background-position: -42px -68px;
                line-height: 27px;
                text-align: center;
                color: #666;
                text-shadow: 0 1px 0 #080707;
                text-indent: 0;
                text-decoration: none;
                &:hover{
                background-position: -42px -98px;
                }
            }
        }
        
        

        .quality{
            background: url(${quality}) no-repeat;
            background-size: 45px 30px;
            margin-left: 4px;
            width: 41px;
            margin-top: 9px;
            &:hover{
                background: url(${quality_hover}) no-repeat;
                background-size: 45px 30px;

            }
        }
    }

`


