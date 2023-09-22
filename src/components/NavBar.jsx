import React, { useState } from 'react';
import { Menu } from 'antd';

const items = [
    {
        label: 'Home',
        key: 'summary',
        icon: <BankOutlined />,
    },
    {
        label: 'Skills',
        key: 'skills',
        icon: <MailOutlined />,
    },
    {
        label: 'Projects',
        key: 'projects',
        icon: <ApartmentOutlined />,
    }
]

const App = () => {
    const [current, setCurrent] = useState();
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Menu theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            onClick={onClick}
            selectedKeys={[current]}
            items={items} />
    );
};
export default App;