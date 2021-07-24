import React from "react";
import CircularForm from "./forms/CircularForm";
import FormHeader from "./forms/FormHeader";
import RectangularForm from "./forms/RectangularForm";

const FormContainer: React.FC = () => {
  return (
    <div className="flex-grow-1 d-flex flex-column">
      <div className="">
        <FormHeader />
      </div>
      <div className="flex-grow-1 ">
        <RectangularForm />
      </div>
    </div>
  );
};

export default FormContainer;
