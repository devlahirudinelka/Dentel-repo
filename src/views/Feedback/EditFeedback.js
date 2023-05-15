import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./Feedback.css";


function EditFeedback(){

  const [feedback_id, setFeedback_id] = useState("");
  const [patient_name, setPatient_name] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [dentist_name, setDentist_name] = useState("");
  const [rating, setRating] = useState("");
  const [feedback_description, setFeedback_description] = useState("");
  

  const {id} = useParams();
  useEffect(() => {
    function getFeedbacks() {
      axios.get(`http://localhost:8070/feedback/get/${id}`)
      .then((res) => {

        console.log(res.data.feedback);
        setFeedback_id(res.data.feedback.feedback_id);
        setPatient_name(res.data.feedback.patient_name);
        setDiagnosis(res.data.feedback.diagnosis);
        setDentist_name(res.data.feedback.dentist_name);
        setRating(res.data.feedback.rating);
        setFeedback_description(res.data.feedback.feedback_description);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getFeedbacks();
  }, []);



  function sendUpdateFeedback(e){
    e.preventDefault();

      const updatefeedback = {

        feedback_id,
        patient_name,
        diagnosis,
        dentist_name,
        rating,
        feedback_description

      }

    axios.put(`http://localhost:8070/feedback/update/${id}`, updatefeedback).then(()=>{
      alert("Feedback Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
      <div className="feedbackBody">
     <div className="feedback-container"> 
     <h1>Edit Feedback</h1>
      <form onSubmit={sendUpdateFeedback} className="add-feedback">


  
  <div class="col-md-12">
    <label for="patient_name">Patient Name</label>
    <input type="text" class="form-control" id="patient_name"  maxlength="20" size="20"
    value={patient_name}
    onChange={(e)=>{

      setPatient_name(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="col-md-12">
    <label for="diagnosis">Diagnosis</label>
    <input type="text" class="form-control" id="diagnosis" placeholder="Enter your diagnosis" 
    value={diagnosis}
    onChange={(e)=>{

      setDiagnosis(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="col-md-12">
    <label for="dentist_name">Dentist Name</label>
    <input type="text" class="form-control" id="dentist_name" placeholder="Enter the name of the Dentist" 
    value={dentist_name}
    onChange={(e)=>{

      setDentist_name(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="col-md-12">
    <label for="rating">Rating</label>
    <input type="text" class="form-control" id="rating" placeholder="Enter Rating from 1-3" 
    value={rating}
    onChange={(e)=>{

      setRating(e.target.value);

    }}/>
  </div>
  <br></br>

  <div class="col-md-12">
    <label for="feedback_description">Feedback_description</label>
    <input type="text" class="form-control" id="feedback_description" 
    value={feedback_description}
    onChange={(e)=>{

      setFeedback_description(e.target.value);

    }}/>
  </div>
  

  
<br></br>
  <center>
  <div class="col-md-12">
    <button type="submit" class="btn btn-success btn-sm" id = "subButton">Update</button>
  </div>
  </center>
</form>
</div> 
</div>
    );
}
export default EditFeedback;