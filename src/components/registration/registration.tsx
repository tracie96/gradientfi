import React from "react";
import { Link } from "react-router-dom";
import "../../assets/main.css";
import "../../assets/util.css";
const Side = require("../../assets/bg-01.jpg");

export interface Props {
  setEmail: any;
  setPassword: any;
  title: string;
  handleAction: any;
}
export default function Registration(props: Props) {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-43">Create Account</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                id="email"
                onChange={(e) => props.setEmail(e.target.value)}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                id="password"
                onChange={(e) => props.setPassword(e.target.value)}
                name="pass"
              />
              <span className="focus-input100"></span>
              <span className="label-input100">Password</span>
            </div>

            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100">Remember me</label>
              </div>

              <div>
                <Link to="/login" className="txt1">
                  Login
                </Link>
              </div>
            </div>

            <div className="container-login100-form-btn">
              <button
                className="login100-form-btn"
                type="submit"
                onClick={props.handleAction}
              >
                Register
              </button>
            </div>
          </form>

          <div className="login100-more"></div>
        </div>
      </div>
    </div>
  );
}
