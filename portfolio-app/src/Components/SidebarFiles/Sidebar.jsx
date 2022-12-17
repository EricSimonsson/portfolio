import React, { useState } from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData'
import './Sidebar.css'
import { IconContext } from 'react-icons'
import Header from '../Header';

export default function Sidebar () {
    const[sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='Sidebar-div'>
                <Link to={"#"} className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'main-menu active' : 'main-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to={"#"} className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li className='navbar-header'>
                        <Header/>
                    </li>
                    {SidebarData.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}