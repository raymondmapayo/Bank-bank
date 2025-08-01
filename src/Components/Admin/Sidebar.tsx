import {
  BarChartOutlined,
  BulbOutlined,
  DollarOutlined,
  HomeOutlined,
  ProfileOutlined,
  SettingOutlined,
  TransactionOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Tooltip } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
      link: "/Manage/Home",
    },
    {
      key: "transaction",
      icon: <TransactionOutlined />,
      label: "Transaction",
      link: "/Admin/Transaction",
    },
    {
      key: "subscription",
      icon: <ProfileOutlined />,
      label: "Subscription",
      link: "/Admin/Subscription",
    },
    {
      key: "loans",
      icon: <DollarOutlined />,
      label: "Loans",
      link: "/Admin/Loans",
    },
    {
      key: "report",
      icon: <BarChartOutlined />,
      label: "Report",
      link: "/Admin/Report",
    },
    {
      key: "saving",
      icon: <WalletOutlined />,
      label: "Saving",
      link: "/Admin/Saving",
    },
    {
      key: "financial-advice",
      icon: <BulbOutlined />,
      label: "Financial Advice",
      link: "/Admin/FinancialAdvice",
    },
    {
      key: "account",
      icon: <UserOutlined />,
      label: "Account",
      link: "/Admin/Account",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
      link: "/Admin/Settings",
    },
  ];

  return (
    <Sider
      width={250}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="min-h-screen font-poppins"
      style={{
        backgroundColor: "rgb(255,255,255)", // Pure white background
        margin: "16px", // space around (makes it "boxed")
        borderRadius: "16px", // round corners
        overflow: "hidden", // keep children inside rounded box
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // subtle shadow for floating effect
      }}
      breakpoint="lg"
      collapsedWidth="80"
    >
      {/* Sidebar Header (Logo + Title) */}
      <div
        style={{
          height: 100,
          margin: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          gap: "12px",
          backgroundColor: "rgb(255,255,255)",
          borderRadius: "12px",
        }}
      >
        {/* Logo */}
        <img
          src="/avatar-1.jpg"
          alt="Logo"
          style={{
            height: "70px",
            width: "70px",
            objectFit: "cover",
            backgroundColor: "#cbd5e1",
            borderRadius: "50%",
            padding: "4px",
            border: "2px solid #94a3b8",
          }}
        />
        {!collapsed && (
          <h1 className="text-lg font-bold" style={{ color: "#1f2937" }}>
            Title [PROJ]
          </h1>
        )}
      </div>

      {/* Menu */}
      <Menu
        mode="inline"
        defaultSelectedKeys={["home"]}
        style={{
          borderRight: 0,
          backgroundColor: "transparent",
          color: "#1f2937",
        }}
        items={menuItems.map((item) => ({
          key: item.key,
          icon: (
            <Tooltip placement="right" title={collapsed ? item.label : ""}>
              {item.icon}
            </Tooltip>
          ),
          label: (
            <Link to={item.link} style={{ color: "#1f2937" }}>
              {item.label}
            </Link>
          ),
        }))}
      />
    </Sider>
  );
};

export default Sidebar;
