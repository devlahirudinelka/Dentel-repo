import React,{ useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import FooterS from "../../components/Footer/Footer";
import "./DoctorSignin.css";
import { Link } from "react-router-dom";

function SignIn() {
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
  return (

    
    <div className="expenseBody">
      <head>
      
      </head>
      <Navbar />
      <div>
        <h1> Family Dental Care</h1>
      </div>
      <fieldset>
        <div>

          <div>
            <h2> Sign In</h2>


          </div>

        
          <div>
            <form>
              <table>
                <tr>
                  <td className="lable">
                    <label>Email:</label>
                  </td>
                  <td>
                    <input type="text" name="Email" onChange={(e)=>{setEmail(e.target.value);}} />
                  </td>
                </tr>
                <tr>
                <td className="lable">
                  <label> Password: </label>
                </td>
                <td>
                    <input type="Password" name="Password" />
                    </td>
                    </tr>
              
               
              </table>
              <a href ="#" id ="ForgotPassword"> Forgot Password?</a>
              <br/>
              <Link to={`/DoctorProfile/${email}`}>
              <input type="submit" value="Login" id ="DoctorSigninLogin" />
              </Link>
            </form>
            </div>

        </div>
      </fieldset>
      <footer>
      <FooterS/>
      </footer>
    </div>
   
  );


}
export default SignIn;
