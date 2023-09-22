import React from 'react';
import { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Home from './Home'
import Summary from './Summary'
import Skills from './Skills'
import Projects from './Projects'
import { Menu, Layout, theme, FloatButton } from 'antd';
import { MailOutlined, BankOutlined, ApartmentOutlined, ContactsOutlined, GithubOutlined } from '@ant-design/icons';


const { Header, Content, Footer } = Layout;
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <BankOutlined />
  },
  {
    label: 'Summary',
    key: 'summary',
    icon: <ContactsOutlined />
  },
  {
    label: 'Skills',
    key: 'skills',
    icon: <MailOutlined />
  },
  {
    label: 'Projects',
    key: 'projects',
    icon: <ApartmentOutlined />
  }
]

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    navigate(e.key, { replace: true })
  };

  const GithubClick = () => {
    const a = document.createElement('a')
    a.href = "https://github.com/owen-zhou20"
    a.click();
  }

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={items}
          style={{ width: '100%' }}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/summary" element={<Summary />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/" element={<Navigate to='/home' />} />
          </Routes>
          <FloatButton
            shape="circle"
            type="primary"
            style={{
              right: 94,
            }}
            icon={<GithubOutlined />}
            description="Github"
            onClick={() => GithubClick()} >
          </FloatButton>
          <FloatButton.BackTop />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Owen's portfolio ©2023 Created by Owen
      </Footer>
    </Layout>
  )
};
export default App;