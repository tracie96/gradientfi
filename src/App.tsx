import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/login/login";
import { app } from "./components/firebase-config";
import { message, Space } from "antd";
// import "antd/dist/reset.css"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Registration from "./components/registration/registration";
import Home from "./components/home/home";
function App() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleAction = (id: any, e: any) => {
    e.preventDefault();
    const authentication = getAuth(app);
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          console.log(response);
          sessionStorage.setItem("Auth Token", response.user.uid);
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            messageApi.open({
              type: "error",
              content: "Wrong Email and Password.",
            });
          }
          if (error.code === "auth/user-not-found") {
            messageApi.open({
              type: "error",
              content: "User not found.",
            });
          }
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response);
          navigate("/home");
          sessionStorage.setItem("Auth Token", response.user.uid);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            messageApi.open({
              type: "error",
              content: "Email already in use.",
            });
          }
        });
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={(e: any) => handleAction(1, e)}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Registration
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={(e: any) => handleAction(2, e)}
            />
          }
        />

        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
