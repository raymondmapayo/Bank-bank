import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Admin/Sidebar";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
