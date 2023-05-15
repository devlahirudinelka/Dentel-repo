import React,{useState,useEffect} from "react";
import Navbar from "../../components/NavBar/Navbar";
import FooterS from "../../components/Footer/Footer";
import axios from "axios";
import Select from 'react-select';

import "./AddDoctor.css";
import { Link } from "react-router-dom";


export default class AddDoctor extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        doctor_id: "",
        doctor_name: "",
        gender: "",
        email: "",
        phone: 0,
        password: ""
      };

      this.handleChange = this.handleChange.bind(this);
      
      
    }
    
    handleInputChange = (e) => {
      const name  = e.target.name;
      const value = e.target.value;
      
  
      this.setState({
        ...this.state,
        [name]: value
      })
      console.log(e.target.value);
      console.log(e.target.name);
    }

    validateForm = (e) =>{
      var msg = "";
      if(this.state.doctor_id == ""){
        msg = "Doctor Id Cannot be Empty"
      }else if(this.state.doctor_name == ""){
        msg = "Doctor Name Cannot be Empty"
      }else if(this.state.gender == ""){
        msg = "Gender Cannot be Empty"
      }else if(this.state.email == ""){
        msg = "Doctor Email Cannot be Empty"
      }else if(this.state.phone == 0){
        msg = "Doctor Phone number Cannot be Empty"
      }else if(isNaN(this.state.phone)){
        msg = "Phone Number must be a Number"
      }else if(this.state.password == ""){
        msg = "Doctor Password Cannot be Empty"
      }
      return msg;
    }

  onSubmit = (e) => {
    e.preventDefault();

    var errorMsg = this.validateForm();
    if(errorMsg == ""){
      const {  doctor_id, doctor_name, gender, email, phone, password} = this.state;

    const data = {
      doctor_id: doctor_id,
      doctor_name: doctor_name,
      gender: gender,
      email: email,
      phone: phone,
      password: password
    }

    console.log(data)

    axios.post("http://localhost:8070/doctor/add", data).then((res) => {
      alert("Success");
      if (res.data.success) {
        this.setState(
          {
            doctor_id: "",
            doctor_name: "",
            gender: "",
            email: "",
            phone: 0,
            password: ""
            
          }
        )
        
      }
    })
    }else{
      alert(errorMsg);
      
    }

    
  }
     
  
    handleChange(event) {
      this.setState({gender: event.target.value});
    }
  
    

    
    
    render(){

      
        
            return (
          
              <div className="expenseBody">
                
                <div>
                  <h1> Family Dental Care</h1>
                </div>
                <fieldset>
                  <div>
          
                    <div>
                      <h2 id ="AddDoctorheader"> ADD DOCTOR </h2>
          
          
                    </div>
                    <div >
                    <form onSubmit={this.onSubmit}>
                      <table>
                        <tr>
                          <td className="lable">
                            <label>Employ ID:</label>
                          </td>
                          <td>
                            <input type="text" name="doctor_id" onChange={this.handleInputChange} />
                          </td>
                        </tr>
                        <tr>
                        <td className="lable">
                          <label> Doctor Name: </label>
                        </td>
                        <td>
                            <input type="text" name="doctor_name" onChange={this.handleInputChange}  />
                            </td>
                         
                        </tr>
                        <tr>
                        <td className="lable">
                          <label> Gender :</label>
                          </td>
                          
                          <td>
                            <select id ="GenderSelect" value={this.state.value} onChange={this.handleInputChange} name="gender" >
                            <option value="Male" name="gender">Male</option>
                            <option value="Female" name="gender">Female</option>
                            <option value="Other" name="gender">Other</option>
        
                            </select>
                          </td>
                          </tr>
                          <tr>
                          <td className="lable">
                          <label> Email: </label>
                        </td>
                        <td>
                            <input type="text" name="email" onChange={this.handleInputChange}  />
                            </td>
                        </tr>
                        <tr>
                          <td className="lable">
                          <label> Phone No: </label>
                        </td>
                        <td>
                            <input type="text" name="phone" onChange={this.handleInputChange}  />
                            </td>
                        </tr>
                        <tr>
                          <td className="lable">
                          <label> Password: </label>
                        </td>
                        <td>
                            <input type="text" name="password" onChange={this.handleInputChange}  />
                            </td>
                        </tr>
                      </table>
                      
                      <input type="submit" className="docSub" id ="AddDoctorSubmitBtn"  value=" Submit " />
                      
                      <button id="doctorListBtn"  className="docList"><a href="/DoctorList">Doctor List</a></button> 
                      
                    </form>
                    </div>
          
          
                  </div>
                </fieldset>
                
              </div>
             
            );
          
          
          
    }

    
   
}


  

  