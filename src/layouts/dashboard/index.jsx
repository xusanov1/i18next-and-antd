import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  HomeFilled,
  UserOutlined,
  ProductFilled
} from '@ant-design/icons';

import { Uz, Ru, En } from '../../components/icons/flags'
import { Button, Layout, Menu, theme, Dropdown, Flex } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const changeLanguage = (lang) => {
    console.log("change lang" + lang)
  }

  const items = [
    {
      label: <Button type='link' onClick={() => changeLanguage("uz")} >UZ</Button>,
      key: "1",
      icon: <Uz />,
    },
    {
      label: <Button type='link' onClick={() => changeLanguage("ru")} >RU</Button>,
      key: "2",
      icon: <Ru />,
    },
    {
      label: <Button type='link' onClick={() => changeLanguage("eng")} >ENG</Button>,
      key: "3",
      icon: <En />,
    }
  ]
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical cursor-pointer border-b mb-2">
            <div className='p-4 text-white text-2xl '>
              Dashboard
            </div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <HomeFilled />,
                label: <NavLink to='/'>Home</NavLink>,
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: <NavLink to='/users'>Users</NavLink>
              },
              {
                key: '3',
                icon: <ProductFilled />,
                label: <NavLink to='/products'>Products</NavLink>
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Flex justify='space-between' align='center'>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />

            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button style={{marginRight:"20px"}}>ENG</Button>
            </Dropdown>

            </Flex>

          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      <footer className='bg-blue-950'>
        <div className="container mx-auto text-center text-white p-4">
          &copy; 2023 - Powered by Ant Design
        </div>
      </footer>
    </>
  );
};
export default Dashboard;