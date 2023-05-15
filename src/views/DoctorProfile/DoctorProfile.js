import React,{ useState, useEffect } from "react";
import {useParams} from "react-router";
import Navbar from "../../components/NavBar/Navbar";
import FooterS from "../../components/Footer/Footer";
import axios from "axios";
import   "./DoctorProfile.css";
import logo from '../../../src/DPBK4896.png'; 
import { Link } from "react-router-dom";

function DoctorProfile() {
    const[doctor_id, setDoctorID]= useState("");
    const[doctor_name, setName]= useState("");
    const[gender, setDocGender]= useState("");
    const[email, setEmail]= useState("");
    const[phone, setPhone]= useState("");
    const[password, setPassword]= useState("");
    const[Oid,setOId]=useState("");
  

const {id} = useParams();
    useEffect(() => {

        function getDoctor() {
      
          axios.get(`http://localhost:8070/Doctor/getByEmail/${id}`)
      
            .then((res) => {
      
             // setExpense(res.data);
      
              console.log(res.data);
              setDoctorID(res.data.doctor.doctor_id);
      
              setName(res.data.doctor.doctor_name);
      
              setDocGender(res.data.doctor.gender);
      
              setOId(res.data.doctor._id);
            
              setEmail(res.data.doctor.email);
      
              setPhone(res.data.doctor.phone);
      
              setPassword(res.data.doctor.password);
      
            })
      
            .catch((err) => {
      
              console.log(err.message);
      
            });
      
        }
      
        getDoctor();
      
      }, []);

      function deleteDoctor(e){
        axios.delete("http://localhost:8070/Doctor/delete/"+Oid).then((res)=>{
            console.log(res.data);
            alert("Delete Successfully");

        }).catch((err)=>{
            alert(err)
        });
        

    }
  return (

    
    <div className="expenseBody">
      <head>
      
      </head>
      
      <div>
        <h1> Family Dental Care</h1>
      </div>
      <fieldset>
        <div>

          <div>
            <h2> Doctor Profile</h2>


          </div>

    
 
            <form>
              <table id="DoctorProfileTbl">
                <tr>
                  <td>
                    <label>Name:</label>
                  </td>
                  <td className="label">
                  <label>{doctor_name}</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Id:</label>
                  </td>
                  <td className="label">
                  <label>{doctor_id}</label>
                  </td>
                </tr>
                <tr>
                <td>
                  <label> Email: </label>
                </td>
                <td className="label">
                <label>{email}</label>
                    </td>
                 
                </tr>
                <tr>
                <td>
                  <label> Phone No:</label>
                  </td>
                  <td className="label">
                  <label>{phone}</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Gender:</label>
                  </td>
                  <td className="label">
                  <label>{gender}</label>
                  </td>
                </tr>
               
              </table>
              <Link to={`/editDoctor/${doctor_id}`}>
              <button id="editBtn" >Edit Profile</button>
              </Link>

                <Link to={"/"}>
              <button id="deleteBtn" onClick={deleteDoctor} >Delete Profile</button>
                </Link>
            </form>
            


        </div>
      </fieldset>
      <footer>
      <FooterS/>
      </footer>
    </div>
   
  );


}
export default DoctorProfile;
