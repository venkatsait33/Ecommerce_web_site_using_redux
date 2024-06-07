import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TabTitle from "../components/TabTitle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location);
  const { from } = location.state || { from: { pathname: "/" } };
  const auth = useSelector((store) => store.authReducer.isAuth);
  const error = useSelector((store) => store.authReducer.isError);
  //console.log(error);

  const handleLogin = (e) => {
    e.preventDefault();

    let userData = {
      email,
      password,
    };

    // we send the data to the login action to fetch the user data and login the user by using the dispatch hook
    dispatch(login(userData))
      .then(() => {
        navigate("/");
        toast.success("Login Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    setEmail("");
    setPassword("");
  };
   TabTitle("Login");

  return (
    <div className="h-[70vh] flex items-center justify-center">
      <div
        className="w-[50%] p-2 border-[1px] border-solid mx-auto bg-slate-300 rounded-md shadow-sm flex flex-col gap-5 items-center justify-center h-[350px]  "
        auth={auth}
        error={error}
      >
        <h1
          className={`mt-2 text-xl font-bold text-center ${
            auth ? "text-green-500" : "text-red-500"
          }`}
        >
          {auth ? "Login Successfully" : "Login to continue"}
        </h1>
        <h1>eve.holt@reqres.in</h1>

        <input
          type="email"
          placeholder="User email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-[90%] rounded p-2 dark:text-black border-[1px] placeholder:font-black
         ${error ? "border-red-500" : "border-[#5f0fbb]"} `}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-[90%] dark:text-black rounded p-2 border-[1px] placeholder:font-black ${
            error ? "border-red-500" : "border-[#5f0fbb]"
          } `}
        />
        <button
          onClick={handleLogin}
          className="w-[90%] bg-[#5f0fbb] text-white rounded p-2 cursor-pointer hover:bg-[#5f0fbb]/80"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
