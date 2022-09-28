import React from "react";
import "./index.css";
const LoginPage = () => {
  return (
    <div className="center font-mono">
      <div className="flex justify-center items-center min-h-[90vh]">
        <form className="">
          <span className="border-[3px] border-solid border-black text-center inline-block">
            <br/> <h1 className="text-2xl">Login</h1>
            <br/>
            <div className="text-left padding-l-20x  padding-r-20x">
              <label>Username:</label>
              <br/>
              <input
                type="text"
                className="border-b-2 border-gray-200 w-[100%]"
                placeholder="Enter Username"
                required
              />
              <br/>
            </div>
            <div className="text-left padding-l-20x padding-r-20x">
              <label>Password:</label>
              <br/>
              <input
                type="password"
                placeholder="Enter Password"
                required
                className="border-b-2 border-gray-200 w-[100%]"
              />
              <br/>
            </div>
            <br/>
            <button type="submit">Login</button>
            <label>
              <br/>
              <input type="checkbox" /> Remember me
            </label>
            <span>
           <a href="#">    Forgot password?</a>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;

/* <div>
<label>Username/Gmail :</label>
<br/><input type="text"/>
</div><div><label>Password:</label><br/>
<input type="text"/>
</div> */

/** */
