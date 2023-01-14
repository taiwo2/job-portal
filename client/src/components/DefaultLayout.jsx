import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ position: "sticky", overflow: "auto", top: 0 }}
      >
        <div className="logo">
          <h2>{collapsed ? "WJP" : "Waliyy job Portal"}</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item key="/" icon={<UserOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<VideoCameraOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="/appliedjobs" icon={<UploadOutlined />}>
            <Link to="/appliedjobs">AppliedJobs</Link>
          </Menu.Item>
          <Menu.Item key="/postjobs" icon={<UserOutlined />}>
            <Link to="/postjobs">PostJobs</Link>
          </Menu.Item>
          <Menu.Item key="/postedjobs" icon={<UserOutlined />}>
            <Link to="/postedjobs">Posted</Link>
          </Menu.Item>
          <Menu.Item key="/login" icon={<UserOutlined />}>
            <Link onClick={logout}>Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: "sticky",
            overflow: "auto",
            top: 0,
            zIndex: 9999,
          }}
        >
          <div className="d-flex justify-content-between">

          <div>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          </div>
          <div>
            <Filter />

          </div>
          <div>

          </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
