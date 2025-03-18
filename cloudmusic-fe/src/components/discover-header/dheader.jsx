import { NavLink } from 'react-router-dom'
import './style'
import { HeaderWrapper } from './style'

import headerTitles from "@/assets/data/discover-header-titles.json"

const DHeader = () => {
    return (
        <HeaderWrapper >
            <div className='content'>
                <ul className='nav'>
                    {headerTitles.map(item => {
                        return (
                            <li className='item' key={item.name}>
                                <NavLink to={item.path} end>{item.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </HeaderWrapper>
    )
}

export default DHeader