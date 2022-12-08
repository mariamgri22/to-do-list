import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../../features/listSlice";
import deleteIcon from "../../assets/deleteIcon.svg";
import {
  AddToDoButton,
  AddToDoDiv,
  AddToDoForm,
  AddToDoH4,
  AddTodoSpan,
  AddToDoStyled,
} from "./AddToDoStyled";

export default function AddToDo() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);
  const dispatch = useDispatch();

  const handleOnchange = (event) => {
    if (event.target.value.length > 54) {
      setValid(false);
      setValue(event.target.value);
    } else {
      setValid(true);
      setValue(event.target.value);
    }
  };

  const onSubmit = (event) => {
    if (valid && value.length !== 0) {
      event.preventDefault();
      dispatch(addTasks({ task: value }));
      setValue("");
    }
  };
  return (
    <AddToDoStyled>
      <AddToDoH4>Task</AddToDoH4>
      <AddToDoForm onSubmit={onSubmit}>
        <AddToDoDiv>
          <input
            type="text"
            placeholder="Write here"
            className={!valid ? "notValid" : null}
            value={value}
            onChange={handleOnchange}
          ></input>
          <AddTodoSpan onClick={() => setValue("")}>
            {value.length > 0 ? (
              <img src={deleteIcon} alt="delete-icon" />
            ) : null}
          </AddTodoSpan>
          {!valid && (
            <p
              style={{
                color: "#FF3104",
                fontSize: 12 + "px",
                fontWeight: 400,
              }}
            >
              Task content can contain max 54 characters.
            </p>
          )}
        </AddToDoDiv>

        <AddToDoButton type="submit">Add</AddToDoButton>
      </AddToDoForm>
    </AddToDoStyled>
  );
}
