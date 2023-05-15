import React,{ useState, useEffect } from "react";
import {useParams} from "react-router";
import axios from "axios";
import Navbar from "../../components/NavBar/Navbar";
import FooterS from "../../components/Footer/Footer";
import   "./EditProfile.css";
//import logo from '../../../src/DPBK4896.png'; 

function EditProfile() {
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
      
          axios.get(`http://localhost:8070/Doctor/get/${id}`)
      
            .then((res) => {
      
             // setExpense(res.data);
      
              console.log(res.data);
              setDoctorID(res.data.doctor.doctor_id);
      
              setName(res.data.doctor.doctor_name);
      
              setOId(res.data.doctor._id);
              setDocGender(res.data.doctor.gender)
      
              setPassword(res.data.doctor.password)
              setEmail(res.data.doctor.email);
      
              setPhone(res.data.doctor.phone);
      
              
      
            })
      
            .catch((err) => {
      
              console.log(err.message);
      
            });
      
        }
      
        getDoctor();

        
      
      }, []);

      function updateDoctor(e){
        e.preventDefault();
    
          const updateDoctor = {
    
            doctor_id, 
            doctor_name,
            gender,
            email,
            phone,
            password
    
    
          }
    
        axios.put(`http://localhost:8070/Doctor/update/${Oid}`, updateDoctor).then(()=>{
          alert("Doctor is Updated");
    
        }).catch((err)=>{
          alert(err);
        })
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
            <h2> Edit Profile</h2>


          </div>

          
          
          <div>
            <form onSubmit={updateDoctor}>
              <table>
                <tr>
                  <td className="lable">
                    <label>Name:</label>
                  </td>
                  <td>
                    <input type="text" value={doctor_name} name="name" onChange={(e) =>{
                      setName(e.target.value);
                    }} />
                  </td>
                </tr>
                <tr>
                <td className="lable">
                  <label> Email: </label>
                </td>
                <td>
                    <input type="text" value={email} name="Email" onChange={(e) =>{
                      setEmail(e.target.value);
                    }}  />
                    </td>
                 
                </tr>
                <tr>
                <td className="lable">
                  <label> Phone No:</label>
                  </td>
                  <td>
                    <input type="text" value={phone} name="PhoneNo" onChange={(e) =>{
                      setPhone(e.target.value);
                    }} />
                  </td>
                </tr>
               
              </table>
              <input type="submit" value="Save Changes" />
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
export default EditProfile;
