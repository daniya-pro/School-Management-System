import React from "react";
import './index.css'
const LoginPage = ()=>{
return(
<div className="center"> 

<div className="flex justify-center items-center min-h-[90vh]">
<form className="">
 <span className="border-[3px] border-solid border-black text-center inline-block">
       <h1 className="text-2xl">Welcome Back</h1>
 <label><b>Username</b></label>
    <input type="text" className="border-2 border-gray-200" placeholder="Enter Username" required/><br/> 

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" required/><br/>
        <br/>
    <button type="submit">Login</button>
    <label><br/>
      <input type="checkbox" checked="checked"/> Remember me
    </label>    <span>Forgot <a href="#">password?</a></span>

  </span>
</form>
</div>
</div>
)



}
export default LoginPage


















/* <div>
<label>Username/Gmail :</label>
<br/><input type="text"/>
</div><div><label>Password:</label><br/>
<input type="text"/>
</div> */










/** */