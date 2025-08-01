import { Spin } from "antd";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom"; // remove BrowserRouter here
import "./global.css";
import AdminLayout from "./Layout/AdminLayout";
import { AdminRoutes } from "./routes/AdminRoutes";
function App() {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <Routes>
        {/* All Admin pages use AdminLayout (with Sidebar) */}
        <Route path="/" element={<AdminLayout />}>
          {AdminRoutes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
