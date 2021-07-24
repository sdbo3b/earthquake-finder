import React from "react";
import Map from "./Map";
import "../../styles/App.css";
import CircularForm from "./forms/CircularForm";
import FormContainer from "./FormContainer";

const Home: React.FC = () => {
  return (
    <div className="h-100 text-light primary-color row">
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
