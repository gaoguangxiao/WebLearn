import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>我是一级路由layout组件</div>

      {/* <Outlet> */}
      <Link to="/board">面板</Link>
      <Link to="/about">关于</Link>

      {/* 二级路由出口 */}
      <Outlet />
    </div>
  );
};
export default Layout;
