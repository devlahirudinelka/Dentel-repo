import React,{useState} from "react";
import axios from "axios";
import "./Feedback.css";


export default function AddFeedback(){

  const [feedback_id, setFeedback_id] = useState("");
  const [patient_name, setPatient_name] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [dentist_name, setDentist_name] = useState("");
  const [rating, setRating] = useState("");
  const [feedback_description, setFeedback_description] = useState("");
  

  function sendData(e){
    e.preventDefault();

      const newFeedback ={

        feedback_id,
        patient_name,
        diagnosis,
        dentist_name,
        rating,
        feedback_description

      }

    axios.post("http://localhost:8070/feedback/add",newFeedback).then(()=>{
      alert("Feedback Added")

    }).catch((err)=>{
      alert(err)
    })
  }

    return(
      
      <div className="feedbackBody">
     <div className="feedback-container"> 
     <h1>Add New Feedback</h1>
      <form onSubmit={sendData} className="add-feedback">

 
  
  <div class="form-group">
    <label for="patient_name">Patient Name</label>
    <input type="text" class="form-control" id="patient_name" maxlength="20" size="20" required 
    onChange={(e)=>{

      setPatient_name(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="diagnosis">Diagnosis</label>
    <input type="text" class="form-control" id="diagnosis" placeholder="Enter Service Type"
    onChange={(e)=>{

      setDiagnosis(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="dentist_name">Dentist Name</label>
    <input type="text" class="form-control" id="dentist_name" placeholder="Enter Service Type"
    onChange={(e)=>{

      setDentist_name(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="rating">Rating</label>
    <input type="text" class="form-control" id="rating" placeholder="Enter Rating from 1-3"
    onChange={(e)=>{

      setRating(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="feedback_description">Feedback_description</label>
    <input type="text" class="form-control" id="feedback_description"
    onChange={(e)=>{

        setFeedback_description(e.target.value);

    }}/>
  </div>

 
  <br></br>

  <center>
  <div class="form-group">
    <button type="submit" class="btn btn-primary" id = "subButton">Submit</button>
  </div>
  </center>
</form>
</div>
</div>
    )
}