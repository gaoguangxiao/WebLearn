import Login from "../page/Login";
import Article from "../page/Article";
import { createBrowserRouter , createHashRouter} from "react-router-dom";
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";
import Notfound from "../page/NotFound";

// 创建router实例对象并且配置路由对应关系

// 两种路由模式createHashRouter和createBrowserRouter
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      // { path: "board",  element: <Board /> },

      { path: "", index: true, element: <Board /> }, //设置默认二级路由

      // { index: true, element: <Board /> }, //设置默认二级路由
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article/:id/:name",
    element: <Article />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default router;
