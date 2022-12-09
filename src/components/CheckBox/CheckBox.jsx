import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilteredTasks, getTasks } from "../../features/listSlice";
import { CheckBoxInput, CheckboxStyled } from "./CheckBoxSyled";

export default function CheckBox() {
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const handleFiltre = () => {
    if (!hide) {
      dispatch(getFilteredTasks(hide));
      setHide(true);
    } else {
      dispatch(getTasks());
      setHide(false);
    }
  };
  return (
    <CheckboxStyled>
      <CheckBoxInput
        type="checkbox"
        checked={hide}
        onChange={handleFiltre}
      ></CheckBoxInput>
      <label htmlFor="">Hide Completed</label>
    </CheckboxStyled>
  );
}
