import React from "react"
import "./Auth.css"
import Logo from "../../../img/Scrim logo.png"

function Auth() {


  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>Scrim</h1>
                <h6>Lets get Connected</h6>
            </div>
        </div>
        <Login/>
        {/* <Signup/> */}
    </div>
  );
};


function Login(){
    return(
        <div className="a-right">
            <form className="infoForm authForm">

                <h3>Login</h3>
                

                <div>
                    <input type="text" className="infoInput" name="username"
                    placeholder="Username"/>
                </div>
                <div>
                    <input type="text" className="infoInput" name="password"
                    placeholder="Password" />
                    
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Dont have account? SignUp!</span>
                    <button className="button infoButton" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
};




function Signup(){
    return(
        <div className="a-right">
            <form className="infoForm authForm">

                <h3>Sign UP</h3>
                <div>
                    <input type="text" placeholder='First Name' 
                    className="infoInput" name="firstname" />
                    <input type="text" placeholder='Last Name' 
                    className="infoInput" name="lastname" />
                </div>

                <div>
                    <input type="text" className="infoInput" name="username"
                    placeholder="Username"/>
                </div>
                <div>
                    <input type="text" className="infoInput" name="password"
                    placeholder="Password" />
                    <input type="text" className="infoInput" name="confirmpass"
                    placeholder="Confirm Password" />
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already have an account? Login!</span>
                    <button className="button infoButton" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Auth;
