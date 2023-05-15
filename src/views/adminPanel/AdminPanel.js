import React from "react";
import Footer from "../../components/Footer/Footer";
import "./adminPanel.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails";

function AdminPanel() {
  return (
    <div className="admin-home">
      <div class="heading">Admin Panel</div>
      {cardDetails.map((cardDetails) => {
        return (
          <div>
            <Card
              key={cardDetails.id}
              name={cardDetails.name}
              img={cardDetails.img}
              navigate={cardDetails.navigate}
            />
          </div>
        );
      })}
       <footer>
     <Footer/>
     </footer>
   
    </div>
    
  
  );
}
export default AdminPanel;