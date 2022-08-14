import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    HomeOutlined,
    EyeFilled
} from '@ant-design/icons';
import styled from "styled-components"
import { Menu } from 'antd';
import { Switch, MenuTheme } from 'antd';
import React, { useState } from 'react';

const StyledHeader = styled.div`
    margin-top:50px;
    margin: auto;
    width: 1177px;
    box-shadow: -15px 15px #E7F9F0;
    // border-radius: 25px 86px;
    // height: 65px;
    .ant-menu{
        text-align: center;
        margin: 24px 0px 0px 0px;
        padding: 0px;
        justify-content: center;
        align-items: center;
        background-color:black;
        color:white;
        // border-radius: 25px 86px;
        height: 103px;
        // box-shadow: -15px 15px #E7F9F0;
        & :hover{
            // border-radius: 86px 25px;
            background-color:#019147;
            color:white;
            font-size:15px
        }
    }
    // .ant-menu.ant-menu-dark .ant-menu-item-selected{
    //     background-color: #1890ff;
    //     height: 86px;
    // }
`
const items = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: 'About-Us',
        key: 'about',
        icon: <EyeFilled />,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: 'Navigation Four - Submenu',
        key: 'SubMenu2',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
];
const Header = () => {
    const [current, setCurrent] = useState('home');
    const [theme, setTheme] = useState('light');
    const onClick = (e) => {
        console.log('click ', e)
        setCurrent(e.key)
    };
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    return (
        <StyledHeader>
            {/* <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            /> */}
            <Menu
                theme={theme}
                onClick={onClick}
                defaultOpenKeys={['home']}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
        </StyledHeader>
    )
};
export default Header;