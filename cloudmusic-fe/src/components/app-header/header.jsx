import { NavLink, useLocation } from "react-router-dom";
import './style'
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import { Button, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

import headerTitles from '@/assets/data/header-titles.json'

const Header = () => {
    const location = useLocation();
    function showTitle(item) {
        if (item.type === "link") {
            return <a href={item.link}>{item.title}</a>
        } else {
            return <NavLink to={item.path}>
                {item.title}
                <sub className="icon topbar" ></sub>
            </NavLink>
        }
    }
    const showDivider = !(location.pathname==="/discover");
    return (
        <HeaderWrapper>
            <div className="content">
                <HeaderLeft>
                    <a className="logo topbar" href="/" />
                    <div className="title-list">
                        {
                            headerTitles.map(item => {
                                return (
                                    <div className="item" key={item.title}>
                                        {showTitle(item)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" prefix={<SearchOutlined/>} placeholder="音乐/视频/电台/用户"/>
                    <span className="createrCenter">创作者中心</span>
                    <span className="login">登录</span>

                </HeaderRight>
            </div>
            {showDivider && <div className="divider"></div> }
        </HeaderWrapper>

    )
}

export default Header;