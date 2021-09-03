import React from "react";
import { useAppSelector } from "../../state/hooks";
import { FormName } from "../../state/util";
import CircularForm from "./forms/CircularForm";
import FormHeader from "./forms/FormHeader";
import RectangularForm from "./forms/RectangularForm";

const FormContainer: React.FC = () => {
  const currentForm = useAppSelector(
    (state) => state.formsState.forms[state.formsState.formIndex]
  );

  const renderForm = () => {
    switch (currentForm) {
      case FormName.CIRCULAR:
        return <CircularForm />;
      case FormName.RECTANGULAR:
        return <RectangularForm />;
      default:
        return <CircularForm />;
    }
  };

  return (
    <div className="flex-grow-1 d-flex flex-column">
      <div className="pt-5">
        <FormHeader />
      </div>
      <div className="flex-grow-1 d-flex justify-content-center">
        {renderForm()}
      </div>
    </div>
  );
};

export default FormContainer;
