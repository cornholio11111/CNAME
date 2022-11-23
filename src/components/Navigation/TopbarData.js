import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as ImIcons from 'react-icons/im';

export const LeftSideData = [
    {
        title: '',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: '',
        path: '/profile',
        icon: <GiIcons.GiCharacter />,
        cName: 'nav-text'
    },
    {
        title: '',
        path: '/games',
        icon: <FaIcons.FaGamepad />,
        cName: 'nav-text'
    },
    {
        title: '',
        path: '/catalog',
        icon: <FaIcons.FaStore />,
        cName: 'nav-text'
    },
    {
        title: '',
        path: '/create',
        icon: <RiIcons.RiTeamFill />,
        cName: 'nav-text'
    },
];

export const RightsideData = [
    {
        title: '',
        path: '/login',
        icon: <BiIcons.BiLogIn />,
        cName: 'nav-text',
        hidden: false,
        Id: 'Login'
    },
    {
        title: '',
        path: '/register',
        icon: <ImIcons.ImUserPlus />,
        cName: 'nav-text',
        hidden: false,
        Id: 'Register'
    },
    {
        title: '',
        path: '/settings',
        icon: <ImIcons.ImCog />,
        cName: 'nav-text',
        hidden: true,
        Id: 'Settings'
    },
];