import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./Appointment.css";

function EditAppointment(){

  const [appointment_id, setAppointment_id] = useState("");
  const [patient_name, setPatient_name] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [dentist_name, setDentist_name] = useState("");
  const [phone, setPhone] = useState("");
  const [appointment_date, setAppointment_date] = useState("");
  const [appointment_time, setAppointment_time] = useState("");
  

  const {id} = useParams();
  useEffect(() => {
    function getAppointments() {
      axios.get(`http://localhost:8070/appointment/get/${id}`)
      .then((res) => {

        console.log(res.data.appointment);
        setAppointment_id(res.data.appointment.appointment_id);
        setPatient_name(res.data.appointment.patient_name);
        setDiagnosis(res.data.appointment.diagnosis);
        setDentist_name(res.data.appointment.dentist_name);
        setPhone(res.data.appointment.phone);
        setAppointment_date(res.data.appointment.appointment_date);
        setAppointment_time(res.data.appointment.appointment_time);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getAppointments();
  }, []);



  function sendUpdateAppointment(e){
    e.preventDefault();

      const updateappointment = {

        appointment_id,
        patient_name,
        diagnosis,
        dentist_name,
        phone,
        appointment_date,
        appointment_time

      }

    axios.put(`http://localhost:8070/appointment/update/${id}`, updateappointment).then(()=>{
      alert("Appointment Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
      <div className="appointmentBody">
     <div className="appointment-container"> 
     <h1>Edit Appointment</h1>
      <form onSubmit={sendUpdateAppointment} className="add-appointment">

  <div class="col-md-12">
    <label for="patient_name">Patient Name</label>
    <input type="text" class="form-control" id="patient_name" placeholder="Enter Name" maxlength="20" size="20" 
    value={patient_name}
    onChange={(e)=>{

      setPatient_name(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="col-md-12">
    <label for="diagnosis">Diagnosis</label> 
    <input type="text" class="form-control" id="diagnosis" placeholder="Enter your Diagnosis" 
    value={diagnosis}
    onChange={(e)=>{

      setDiagnosis(e.target.value);

    }}/>
    
  </div>
  <br></br>

  <div class="col-md-12">
    <label for="dentist_name">Dentist Name</label>
    <input type="text" class="form-control" id="dentist_name" placeholder="Enter the name of the Dentist" maxlength="20" size="20" 
    value={dentist_name}
    onChange={(e)=>{

      setDentist_name(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="col-md-12">
    <label for="phone">Phone</label>
    <input type="text" class="form-control" id="phone" placeholder="Enter phone number" maxlength="10" size="10" 
    value={phone}
    onChange={(e)=>{

      setPhone(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="col-md-12">
    <label for="appointment_date">Appointment Date</label>
    <input type="text" class="form-control" id="appointment_date" placeholder="yyyy-mm-dd" 
    value={appointment_date}
    onChange={(e)=>{

      setAppointment_date(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="col-md-12">
    <label for="appointment_time">Appointment Time</label>
    <input type="text" class="form-control" id="appointment_time" placeholder="Enter the time" 
    value={appointment_time}
    onChange={(e)=>{

      setAppointment_time(e.target.value);

    }}/>
  </div>
  
<br></br>
<br></br>

  <center>
  <div class="col-md-12">
    <button type="submit" class="btn btn-success btn-sm" id="SubBtn">Update Appointment</button>
  </div>
  </center>
</form>
</div>  
</div>
    );
}
export default EditAppointment;