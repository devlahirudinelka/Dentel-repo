import React,{useState} from "react";
import axios from "axios";
import Navbar from "../../components/NavBar/Navbar";
import FooterS from "../../components/Footer/Footer";
import "./Payment.css";
import "./AddPayment.css";




export default function AddPayment() {
  const[paymentId, setPaymentID]= useState("");
  const[patientName, setName]= useState("");
  const[paymentType, setPaytype]= useState("");
  const[diagnosis, setDiagnosis]= useState("");
  const[hospitalCharge, setHosCharge]= useState("");
  const[doctorFee, setDoctorFee]= useState("");
  const[entryDate, setDate]= useState("");
  const[Amount, setAmounts]= useState("");



  function calCulateAmount(){
      var paymentType= parseInt(document.getElementById("hospitalCharge").value);
      var patientName= parseInt(document.getElementById("doctorFee").value);
    document.getElementById("Amount").value = paymentType+patientName;
    console.log(paymentType+patientName);
    
  }

  function sendData(e){
    e.preventDefault();

    const newpayment ={
      paymentId,
      patientName,
      paymentType,
      diagnosis,
      hospitalCharge,
      doctorFee,
      entryDate,
      Amount
    }

    newpayment.hospitalCharge = document.getElementById("hospitalCharge").value;
    newpayment.doctorFee = document.getElementById("doctorFee").value;
    newpayment.Amount = document.getElementById("Amount").value;

    axios.post("http://localhost:8070/payment/add",newpayment).then(()=>{
       alert("Payment Added")   
    }).catch((err)=>{
       alert(err)
    })

    
  }


    
  return (
     
    <div className="paycontainer">
      <br/>
      
      
      <h1>Add New Payment</h1>
    <form onSubmit={sendData}>
      <div className="form-group">
        <label for="paymentId">Payment ID</label>
        <input type="text" class="form-control" id="paymentId"  placeholder="Enter Payment ID"
        onChange={(e)=>{
          setPaymentID(e.target.value);
        }} />

        </div>
        <br/>
        
  
      <div className="form-group">
        <label for="patientName">Patient Name</label>
        <input  required={true} type="text" class="form-control" id="patientName"  placeholder="Enter Patient Name"
        onChange={(e)=>{
          setName(e.target.value);
        }} />

        </div>
        <br></br>

        <div className="form-group">
        <label for="paymentType">Payment Type</label>
        <input  required={true} type="text" class="form-control" id="paymentType" placeholder="Enter Payment Type"
        onChange={(e)=>{
          setPaytype(e.target.value);
        }} />

        </div>
        <br></br>

        <div className="form-group">
        <label for="diagnosis">Diagnosis</label>
        <input required={true}  type="text" class="form-control" id="diagnosis" placeholder="Enter Diagnosis"
        onChange={(e)=>{
          setDiagnosis(e.target.value);
        }} />

        </div>
        <br></br>
        <div className="form-group">
        <label for="hospitalCharge"> Hospital Charge</label>
        <input required={true}  type="text" value="500" disabled="true" class="form-control" id="hospitalCharge" placeholder="Enter hospital Charge"
        onChange={(e)=>{
            var hFee = document.getElementById("hospitalCharge").value;
          setHosCharge(hFee);
        }} />

        </div>
        <br></br>
        <div className="form-group">
        <label for="doctorFee">Doctor Fee</label>
        <input required={true} type="text" class="form-control" id="doctorFee" placeholder="Enter Doctor Fee"
        onChange={(e)=>{
          setDoctorFee(e.target.value);
          calCulateAmount();
        }} />
        
        </div>
        <br></br>
      

        <div className="form-group">
        <label for="entryDate">Entry Date</label>
        <input required={true} type="text" class="form-control" id="entryDate" placeholder="Enter Entry Date"
        onChange={(e)=>{
          setDate(e.target.value);
        }} />
        
        </div>
        <br></br>
        <div className="form-group">
        <label for="Amount">Amount</label>
        <input type="text" class="form-control" id="Amount" placeholder="Enter the Amount"
        onChange={(e)=>{
            var amount = document.getElementById("Amount").value;
            setAmounts(amount);
        }} />
        
        </div>

        <br></br>
        <button type="submit" class="btn btn-primary" id="subBtn">Submit</button>
          
        
      </form>
    </div>
  );
}
