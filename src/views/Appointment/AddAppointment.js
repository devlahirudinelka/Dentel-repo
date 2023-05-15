import React,{useState} from "react";
import axios from "axios";
import "./Appointment.css";


export default function AddAppointment(){

  const [appointment_id, setAppointment_id] = useState("");
  const [patient_name, setPatient_name] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [dentist_name, setDentist_name] = useState("");
  const [phone, setPhone] = useState("");
  const [appointment_date, setAppointment_date] = useState("");
  const [appointment_time, setAppointment_time] = useState("");


  function sendData(e){
    e.preventDefault();

      const newAppointment ={

        appointment_id,
        patient_name,
        diagnosis,
        dentist_name,
        phone,
        appointment_date,
        appointment_time

      }

    axios.post("http://localhost:8070/appointment/add",newAppointment).then(()=>{
      alert("Appointment Added")

    }).catch((err)=>{
      alert(err)
    })
  }
  
    return(
      <div className="appointmentBody">
     <div className="appointment-container"> 
     <h1>Add New Appointment</h1>
      <form onSubmit={sendData} className="add-appointment">

  <div class="form-group">
    <label for="patient_name">Patient Name</label>
    <input type="text" class="form-control" id="patient_name" placeholder="Enter Name" maxlength="20" size="20" required
    onChange={(e)=>{

      setPatient_name(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="diagnosis">Diagnosis</label> 
    <input type="text" class="form-control" id="diagnosis" placeholder="Enter your Diagnosis" required
    onChange={(e)=>{

      setDiagnosis(e.target.value);

    }}/>
     
  </div>
  <br></br>

  <div class="form-group">
    <label for="dentist_name">Dentist Name</label>
    <input type="text" class="form-control" id="dentist_name" placeholder="Enter the name of the Dentist" maxlength="20" size="20" required
    onChange={(e)=>{

      setDentist_name(e.target.value);

    }}/>
  </div>
<br></br>

  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="text" class="form-control" id="phone" placeholder="Enter phone number" maxlength="10" size="10" required 
    onChange={(e)=>{

      setPhone(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="appointment_date">Appointment Date</label>
    <input type="text" class="form-control" id="appointment_date" placeholder="yyyy-mm-dd" required
    onChange={(e)=>{

      setAppointment_date(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="appointment_time">Appointment Time</label>
    <input type="text" class="form-control" id="appointment_time" placeholder="Enter the time" required
    onChange={(e)=>{

      setAppointment_time(e.target.value);

    }}/>
  </div>

  <br></br>
  <br></br>
  
  <center>
  <div class="form-group">
    <button type="submit" class="btn btn-primary" id="SubBtn">Submit</button>
  </div>
  </center>
</form>
</div>  
</div>
    )
}