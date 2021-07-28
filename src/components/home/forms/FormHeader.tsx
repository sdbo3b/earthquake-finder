import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import {
  decrementFormsIndex,
  incrementFormsIndex,
} from "../../../state/action-creators";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";

const FormHeader: React.FC = () => {
  const currentForm = useAppSelector(
    (state) => state.formsState.forms[state.formsState.formIndex]
  );

  const currentFormIndex = useAppSelector(
    (state) => state.formsState.formIndex
  );

  const forms = useAppSelector((state) => state.formsState.forms);

  const dispatch = useAppDispatch();

  const handleDecrement = (e: any) => dispatch(decrementFormsIndex());
  const handleIncrement = (e: any) => dispatch(incrementFormsIndex());

  return (
    <div className="row justify-content-center gy-0 gx-0">
      <span
        role="button"
        onClick={handleDecrement}
        className="col-2 d-flex justify-content-center align-items-center"
      >
        <ChevronLeft
          size={40}
          className={`${currentFormIndex - 1 < 0 ? "text-secondary" : ""}`}
        />
      </span>
      <h2 className="col-8 d-flex justify-content-center align-items-center">
        {currentForm}
      </h2>
      <span
        role="button"
        onClick={handleIncrement}
        className="col-2 d-flex justify-content-center align-items-center"
      >
        <ChevronRight
          size={40}
          className={`${
            currentFormIndex + 1 === forms.length ? "text-secondary" : ""
          }`}
        />
      </span>
    </div>
  );
};

export default FormHeader;
