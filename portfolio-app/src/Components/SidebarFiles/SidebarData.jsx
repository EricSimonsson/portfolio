import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/Projects',
        icon: <BsIcons.BsFillQuestionSquareFill/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/About',
        icon: <BsIcons.BsFillQuestionSquareFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/Contact',
        icon: <BsIcons.BsFillQuestionSquareFill/>,
        cName: 'nav-text'
    }
]