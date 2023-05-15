import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AboutUs.css";
import { Link } from "react-router-dom";

export default function AboutUs(){
    return(
    <div>
        <Navbar/>

        <h1>Welcome To Family Dental care</h1>
        <div className="col-md-4 text-center">
        <p>We provide a wide range of services to meet your dental needs.<br></br> Preventive care is stressed as the ideal way to maintaining your health.</p>
        </div>
        
        

        <img className="AboutUs" src="./image/Dental-Followup.jpg"></img>
        
        <footer>
      <Footer/>
      </footer>
    </div>
     
    )
  
}


    
    
     

      
      