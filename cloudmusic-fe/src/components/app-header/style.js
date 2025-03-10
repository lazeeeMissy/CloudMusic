import styled from "styled-components";

// 没有自适应
//总体样式
export const HeaderWrapper = styled.div`
    font-size: 14px;
    color: #fff;
    background-color: ${props => props.theme.color.topBg};
    .content {
        height: 70px;
        ${props => props.theme.mixin.wrapv1}
        //通过混入插入样式
        display: flex;
    }

    .divider {
        height: 5px;
        background-color:${props=>props.theme.color.primary};
    }

`
//两边样式
export const HeaderLeft = styled.div`
    display: flex;

    .logo{
        display: block;
        width: 176px;
        height: 70px;
        background-position: 0 0 ;
    }

    .title-list{
        display: flex;
        color: #ccc;
        cursor: pointer;
        line-height: 70px;

        .item{
            position: relative; 
            
            a{
                display: block;
                padding: 0 20px;
                color: #ccc;
            }

            :last-of-type a{
                position: relative;
                ::after{
                    display: block;
                    position: absolute;
                    content: '';
                    width: 40px;
                    height: 20px;
                    background-image: url('/src/assets/img/fram/topbar.png'); 

                    background-position: -200px 0;
                    top:20px;
                    right: -15px;
                }
            }

            &:hover a,
            .active{
                color: #fff;
                background-color: #000;
            }

            .active .icon{
                position:absolute;
                bottom:-2px;
                left: 45%;
                height: 8px;
                width: 13px;
                background-position: -226px 0;
            }

        }
      
    }
 
    

`
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    color: #787878;
    margin-left: 10px;
    font-size: 12px;
    .search{
        width: 158px;
        height: 32px;
        border-radius: 15px;
        font-size: 12px;

        input{
            &::placeholder{
                color: #9b9b9b;
            }
        }
    }

    .createrCenter{
        cursor: pointer;
        width: 90px;
        height: 32px;
        color: #cccccc;
        border: 1px solid #666;
        border-radius: 15px;
        line-height: 32px;
        margin:  0 16px  ;
        text-align: center;
    }
    .createrCenter:hover{
        border: 1px solid #fff;
        color: #fff;

    }
    .login:hover{
        color: #777777;
        text-decoration: underline;
        cursor: pointer;
    }
  
`