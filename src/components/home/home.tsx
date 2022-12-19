import { count } from "console";
import { stat } from "fs";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = { count: 0, quantity: 0 };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "addOne":
      return { ...state, count: state.count + 1 };
    case "subtractOne":
      return { ...state, count: state.count - 1 };
    case "addQuantity":
      return { ...state, count: state.count + parseInt(state.quantity, 10) };
    case "subtractQuantity":
      return { ...state, count: state.count - parseInt(state.quantity, 10) };
    case "setQuantity":
      return { ...state, quantity: action.payload };
    case "resetCounter":
      return initialState;
    default:
      throw new Error();
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubtractOne = () => {
    dispatch({ type: "subtractOne" });
  };

  const handleAddOne = () => {
    dispatch({ type: "addOne" });
  };

  const handleOnChange = (e: any) => {
    dispatch({ type: "setQuantity", payload: e.target.value });
  };

  const handleSubtractQuantity = () => {
    if (state.quantity) dispatch({ type: "subtractQuantity" });
  };

  const handleAddQuantity = () => {
    if (state.quantity) dispatch({ type: "addQuantity" });
  };

  const handleResetCounter = () => {
    dispatch({ type: "resetCounter" });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <button onClick={handleLogout} className="btn btn-danger">
        Log out
      </button>

      <div className="counterapp">
        <div>
          <div className="count">
            <h3>Count:</h3>
            <h1>{state.count}</h1>
          </div>
          <div className="buttons">
            <button onClick={handleSubtractOne}>-</button>
            <button onClick={handleAddOne}>+</button>
          </div>
        </div>
      </div>
      <h3 className="mt-4">Add / subtract custom counter</h3>
      <div className="addcounter mt-4">
        <input
          type="text"
          value={state.quantity}
          onChange={handleOnChange}
          className={"mr-10"}
        />

        <button
          className="mr-5 width-40 addbtn"
          onClick={handleSubtractQuantity}
        >
          -
        </button>
        <button className="width-40 addbtn" onClick={handleAddQuantity}>
          +
        </button>
      </div>
      <button
        type="button"
        className="btn btn-dark mt-5"
        onClick={handleResetCounter}
      >
        Reset Counter
      </button>
    </>
  );
}
