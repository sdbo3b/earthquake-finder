import React from "react";
import Map from "./Map";
import "../../styles/App.css";
import FormContainer from "./FormContainer";

const Home: React.FC = () => {
  return (
    <div className="flex-grow-1 text-light primary-color row gy-0 gx-0">
      <div className="col-sm-6 d-flex">
        <FormContainer />
      </div>
      <div className="col-sm-6">
        <Map />
      </div>
    </div>
  );
};

export default Home;
