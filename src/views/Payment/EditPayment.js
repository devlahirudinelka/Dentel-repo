import React,{ useState, useEffect } from "react";

import axios from "axios";

import {useParams} from "react-router";
import "./Payment.css";
import { Link } from "react-router-dom";



function EditPayment() {

    const[paymentId, setPaymentID]= useState("");
    const[patientName, setName]= useState("");
    const[paymentType, setPaytype]= useState("");
    const[diagnosis, setDiagnosis]= useState("");
    const[doctorFee, setDoctorFee]= useState(0);
    const[entryDate, setDate]= useState("");
    const[Amount, setAmounts]= useState(0);
  


//retrieve relevent data form relavent fields

const [payment, setPayment] = useState("");

const {id} = useParams();

useEffect(() => {

  function getPayment() {

    axios.get(`http://localhost:8070/payment/get/${id}`)

      .then((res) => {

        setPayment(res.data);

        console.log(res.data);
        setPaymentID(res.data.pay.paymentId);
       
        setName(res.data.pay.patientName);

        setPaytype(res.data.pay.paymentType);

      
        setDiagnosis(res.data.pay.diagnosis);

        
        setDoctorFee(res.data.pay.doctorFee);
        setDate(res.data.pay.entryDate);

        setAmounts(res.data.pay.Amount);

      })

      .catch((err) => {

        console.log(err.message);

      });

  }

  getPayment();

}, []);
//update data 

// function calCulateAmount(){
//     var hospitalCharge= 500;
//     var DOctorFee= parseInt(document.getElementById("doctorFee").value);
//   document.getElementById("Amount").value = hospitalCharge+DOctorFee;
//   console.log( hospitalCharge+DOctorFee);
//   //Amount = hospitalCharge+DOctorFee;
  

// }

useEffect(()=>{
  let total = Number(doctorFee) + 500
  setAmounts(total)
},[doctorFee])

function sendUpdatePayment(e){

    e.preventDefault();//prevent submit event default behaviour
  
    const updatePayment = {
      
      paymentId,
      patientName,
      paymentType,
      diagnosis,
      doctorFee,
      entryDate,
      Amount
    }
  
  
  
    axios.put(`http://localhost:8070/payment/update/${id}`, updatePayment).then(()=>{
  
      alert("Update payment sucessfully");
  
    }).catch((err)=>{
  
      // alert(err);

      console.log("error while update>>>",err)
    })
  
  }

  
  
  return (
 
    <div className="paycontainer">
      <br/>
      
      
      <h1>Edit Payment</h1>
    <form onSubmit={sendUpdatePayment}>


  

    <div className="form-group">
  <label for="paymentId">Payment ID</label>
  <input type="text" class="form-control" id="paymentID" value={paymentId} placeholder="Enter Payment ID"
  onChange={(e)=>{
    setPaymentID(e.target.value);
  }} />

  </div>

      <div className="form-group">

  
  <label for="patientName">Patient Name</label>
  <input type="text" class="form-control" id="patientName" value={patientName} placeholder="Enter Client Name"
  onChange={(e)=>{
    setName(e.target.value);
  }} />

  </div>
  <br></br>

  <div className="form-group">
  <label for="paymentType">Payment Type</label>
  <input type="text" class="form-control" id="paymentType" value={paymentType} placeholder="Enter Payment Type"
  onChange={(e)=>{
    setPaytype(e.target.value);
  }} />

  </div>
  <br></br>

 

  <div className="form-group">
  <label for="diagnosis">Diagnosis</label>
  <input type="text" class="form-control" id="diagnosis" value={diagnosis} placeholder="Enter Diagnosis"
  onChange={(e)=>{
    setDiagnosis(e.target.value);
  }} />
  
  </div>
  <br></br>
  <div className="form-group">
  <label for="doctorFee">Doctor Fee</label>
  <input type="text" class="form-control" id="doctorFee" value={doctorFee} placeholder="Enter Doctor Fee"
  onChange={(e)=>{
    setDoctorFee(e.target.value);
    // calCulateAmount();
  }} />
  
  </div>

  <br></br>
  <div className="form-group">
  <label for="entryDate">Entry Date</label>
  <input type="text" class="form-control" id="entryDate" value={entryDate} placeholder="Enter Date"
  onChange={(e)=>{
    setDate(e.target.value);
  }} />
  
  </div>
  <br></br>
  <div className="form-group">
  <label for="Amount">Amount</label>
  <input type="text" class="form-control" id="Amount" placeholder="Enter the Amount"
  // onChange={(e)=>{
  //   setAmounts(e.target.value);
  // }}
  disabled
  value={Amount} />
  
  </div>
  <br></br>
  
  <button type="submit" className="btn btn-success" id="Subbtn">  Update</button>
  &nbsp;
  <Link to="/Payment">

   

<button className="btn btn-danger">CANCEL</button> 

</Link>

</form>
</div>


);

}

export default EditPayment;