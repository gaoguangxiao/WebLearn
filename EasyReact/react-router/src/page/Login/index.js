import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是登录页
      <br />
      {/* 声明式导航 */}
      {/* <Link to="/article">跳转到文章页</Link> */}
      {/* 编程式导航 */}
      <p>编程式导航</p>
      <button
        onClick={() => {
          navigate("/article");
        }}
      >
        跳转到文章页
      </button>
      <hr />
      {/* 编程式传参 */}
      <p>编程式导航-传参</p>
      <button
        onClick={() => {
          navigate("/article?id=1001&name=jack");
        }}
      >
        searchParams传参
      </button>

      <button
        onClick={() => {
          navigate("/article/1001/jack");
        }}
      >
        params传参
      </button>
    </div>
  );
};
export default Login;
