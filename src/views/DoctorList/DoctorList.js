import React,{useState,  useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/NavBar/Navbar";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
//import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch"

import "./DoctorList.css";

export default function DoctorList(){
    const [searchName, setSearchName] = useState("");
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts =async () =>{
            setLoading(true);
            const response =await axios.get("http://localhost:8070/doctor/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();
    }, []);
  
  const[doctors, setDoctors]= useState([]);
  useEffect(()=>{
    function getDoctors(){
        axios.get("http://localhost:8070/doctor/").then((res)=>{
            setDoctors(res.data);
            
        }).catch((err)=>{
            alert(err.message);

        })
    }
    getDoctors();
}, [doctors]);

function createPdf(pdfBody){

    var doc = new jsPDF('portrait','px','a3');
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
    doc.autoTable({
        didDrawPage: function (data) {

            // Header
            doc.setFontSize(14);
            var fileTitle = "Doctor Details Report";
            var img = 'd'; 
            doc.text(fileTitle, 30, 60);
            //doc.addImage(img, 'JPEG', 550, 10, 40, 40);

            // Footer
            var pageSize = doc.internal.pageSize;
            //jsPDF 1.4+ uses getHeight, <1.4 uses .height
            var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

            doc.autoTable({
                html: '#my-table',
                startY: pageHeight - 800,
                theme: 'grid'
            });

            var str = "Page " + doc.internal.getNumberOfPages()
            // Total page number plugin only available in jspdf v1.0+
            if (typeof doc.putTotalPages === 'function') {
                str = str + " of " + totalPagesExp;
            }
            doc.setFontSize(10);
            doc.text(str, data.settings.margin.left, pageHeight - 10);
        },
        margin: {
            bottom: 60, //this decides how big your footer area will be
            top: 40 //this decides how big your header area will be.
        }
    });
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }

    doc.save('Doctors.pdf'); //this downloads a copy of the pdf in your local instance.
};
    return(
        
      
        <>
        <Navbar />
      <div>
        <h1> Family Dental Care</h1>
      </div>
      <fieldset>
        <div>

          <div>
            <h2 id="doctorListHeading"> Doctor List</h2>


          </div>
        <div className="allpayment">
        <input className="searche" id="searchBar"
        style={{ width:"15%" ,height:"25px"}}
        type="text"
        placeholder="search Doctor"
        onChange={(e) => setSearchName(e.target.value)}/>
        </div>
  
          <div className="docContainer">
            
              <table  id="my-table" class="table">
          <thead>
            <tr>
              <th scope="col">Doctor ID</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Availability</th>
              
            </tr>
            </thead>
            {loading ? (
                      <button class="btn-btn-primary" type="button" disabled>
                          <span class="spinner-border spinner-border-sm" role="status" aris-hidden="true"></span>
                          Loading </button>
                  ) : (
                      posts
                          .filter((value) => {
                              if (searchName === "") {
                                  return value;
                              } else if (
                                  value.DoctorList.includes(searchName.toUpperCase())
                              ){
                                  return value;
                              }
  
                            }).map((doctors,index)=>
             <tr key={index}>
          
          <td>{doctors.doctor_id}</td>
          <td>{doctors.doctor_name}</td>
         
          
  
          
            
          
              
            
             
            </tr>
          
          
         ))}
  
         </table>
  
         <button type="button" class="btn btn-danger btn-sm"  onClick={() => createPdf()}   >Download PDF</button>
      </div>
      </div>
      </fieldset>
      </>
      
      )
}