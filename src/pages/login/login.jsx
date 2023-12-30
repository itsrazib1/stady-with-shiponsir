import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import './login.css'
const Login = () => {
  // const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      
    });
  };

  return (
      
      <div className="min-h-screen bg-base-200 flex justify-center items-center login-main-body">
        <div className="w-full max-w-md">

          <div className="login-input-body rounded-xl shadow-2xl p-8">
          <h1 className="text-5xl font-bold text-center mb-6 mt-5">
              Login now
            </h1>
            <form onSubmit={handleLogin} className="">
              <div>
                <label htmlFor="email" className="label">
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="input w-[100%] login-input-field"
                />
              </div>
              <div>
                <label htmlFor="password" className="label">
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-[100%] login-input-field"
                  />
                  <span
                    className=" -ms-7"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-[#C2D5E8]">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div></div>
              <div className="flex justify-center">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center mt-4">
              <small>
                New Here?{" "}
                <Link className="text-yellow-700" to="/register">
                  Create an account
                </Link>
              </small>
            </p>
          </div>
        <div className="login-page-home-btn-filed">
        <button className="login-page-home-btn"><a href="/">Home</a></button>
        </div>
        </div>
      </div>
  );
};

export default Login;
