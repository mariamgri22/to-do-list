import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilteredTasks, getTasks } from "../../features/listSlice";
import { CheckboxStyled } from "./CheckBoxSyled";

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
      <input
        type="checkbox"
        style={{ color: "#008594", width: 24 + "px" }}
        checked={hide}
        onChange={handleFiltre}
      ></input>
      <label htmlFor="">Hide Completed</label>
    </CheckboxStyled>
  );
}
