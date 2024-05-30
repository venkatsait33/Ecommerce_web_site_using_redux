import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location);

  const auth = useSelector((store) => store.authReducer.isAuth);
  const error = useSelector((store) => store.authReducer.isError);
  //console.log(error);

  const handleLogin = () => {
    let userData = {
      email,
      password,
    };

    // we send the data to the login action to fetch the user data and login the user by using the dispatch hook
    dispatch(login(userData)).then(() => {
      navigate("/");
    });
    setEmail("");
    setPassword("");
  };

  return (
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
      <input
        type="email"
        placeholder="User email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-[90%] rounded p-2 border-[1px] placeholder:font-black
         ${error ? "border-red-500" : "border-[#5f0fbb]"} `}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`w-[90%] rounded p-2 border-[1px] placeholder:font-black ${
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
  );
}

export default Login;
