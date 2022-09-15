import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import background from "../../assets/images/bg.png";

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
          
         
            {/* <div>header</div>
            <h2>Sign in to us</h2> */}
            
            <form action="/home" style={{}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>

      <div style={{display: 'flex', flexDirection:'column',justifyContent:'center',padding:10 }}>
        <div style={{display: 'flex',    }}>
        <img style={{width:200,height:150,borderRadius:20 }} src={require('../../assets/images/bg.png')} />
        </div>
        <div style={{display: 'flex', marginLeft:50 }}>
         Celebrating Life
        </div>
      </div>
      <div style={{height:300,width:2,backgroundColor:'gray',margin:10}}></div>
      <div style={{display: 'flex', flexDirection:'column',justifyContent:'center'}}>
      <p>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <label className="right-label"></label>
                    <br/>
                    <input type="password" name="password" required /> <br />
                    <label className="right-label">forgot password</label>
                </p>
                {/* <p style={{width:500,fontSize:10}}>by accessing your account sample's privacy polocy's and trems of services</p> */}
                <p>
                   
                    <button id="sub_btn" type="submit">Sign In</button>
                </p>
                <label>Create Account</label>
                    <label className="right-label">Signup fro free</label>
                </p>
      </div>
    
  </div>

               
            </form>
           
        </div>
    )
}
