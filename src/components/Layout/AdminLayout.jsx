import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    UserOutlined,
    HomeOutlined,
    CalendarOutlined,
    EditOutlined,
    MessageOutlined,
    SettingOutlined,
  
    AppstoreAddOutlined 
  } from '@ant-design/icons';
  
  import { Button, Layout, Menu, theme } from 'antd';
  
  import logo from "../../assets/images/logo.png"
  
  import { useEffect, useState } from 'react';
  
  import { Outlet, useNavigate } from 'react-router-dom'
  
  import { ROUTES } from '../../routes/RouterConfig';
  
  
  const styleIcon = {
    fontSize: '18px',
    fontWeight: 'bold',
  }
  
  const { Header, Sider, Content } = Layout;
  
  const keyRouteMap = {
    '1': ROUTES.Admin.Dashboard,
    '2': ROUTES.Admin.AppointmentList,
    '3': ROUTES.Admin.Admin,
    '4': ROUTES.Admin.Patient,
    '5': ROUTES.Admin.Doctor
  }


  const AdminLayout = () => {
  
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
  
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
    const [selectedKey, setSelectedKey] = useState('1');
  
    const onClickMenuItem = (e) => {
      setSelectedKey(e.key);
      navigate(keyRouteMap[e.key])
    }
  
    useEffect(() => {
      const path = window.location.pathname;
      const key = Object.keys(keyRouteMap).find(key => keyRouteMap[key] === path);
      setSelectedKey(key);
    }, [])
  
    const [isCardWhite, setIscardWhite] = useState(true)
  
    return (
      <Layout className='min-h-[100vh] flex'>
        <Sider trigger={null} collapsible collapsed={collapsed}
          width='220px'
          className='p-[10px] py-[20px] bg-primary-10 flex flex-col h-[100vh] min-h-[100vh]'>
          <div className='flex flex-col h-[100%] justify-between'>
            <div>
              <img src={logo} className='h-[80px] object-contain mr-auto' />
              <Menu
                className='mt-[45px] border-[0px] flex flex-col gap-[15px] bg-transparent'
                mode="inline"
                defaultSelectedKeys={['1']}
                selectedKeys={[selectedKey]}
                onClick={onClickMenuItem}
                items={[
                  {
                    key: '1',
                    icon: <HomeOutlined style={styleIcon} />,
                    label: 'Dashboard',
                  },
                  {
                    key: '2',
                    icon: <EditOutlined style={styleIcon} />,
                    label: 'Appointment',
                  },
                  {
                    key: '3',
                    icon: <UserOutlined style={styleIcon} />,
                    label: 'Admin',
                  },
                  {
                    key: '4',
                    icon: <UserOutlined style={styleIcon} />,
                    label: 'Patients',
                  },
                  {
                    key: '5',
                    icon: <UserOutlined style={styleIcon} />,
                    label: 'Doctors',
                  },
                ]}
              />
            </div>
  
            <button className='bg-linear flex gap-[10px] justify-center py-[12px] w-[100%] align text-neutral-1 text-Medium+/Label/Small-Strong rounded-[8px]'> <LogoutOutlined style={styleIcon} /> {
              collapsed ? '' : 'Logout'
            } </button>
          </div>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
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
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet context={{setIscardWhite}}/>
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default AdminLayout;