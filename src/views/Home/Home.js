import React from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails";



function Home() {

  return (
    <div className="admin-home">
      <div class="heading">Home</div>
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
    </div>
  );
}



export default Home;

