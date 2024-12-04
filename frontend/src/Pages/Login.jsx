import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form">
          <div className="username">
            <input type="email" placeholder="Email" className="login-input" />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
          </div>

          <Link to="/home" className="login-btn">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
