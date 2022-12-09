import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTasks } from "../../features/listSlice";
import PopupDelete from "../PopupDelete/PopupDelete";
import deleteIcon from "../../assets/deleteIcon.svg";
import {
  TaskItemInput,
  TaskItemModalSpan,
  TaskItemSpam,
  TaskItemStyled,
} from "./TaskItemStyled";

export default function TaskItem({ id, task, isComplete }) {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <TaskItemStyled>
        <TaskItemSpam>
          <TaskItemInput
            type="checkbox"
            checked={isComplete}
            onChange={(e) =>
              dispatch(toggleTasks({ id, task, isComplete: !isComplete }))
            }
          ></TaskItemInput>
          <h4 className={isComplete ? "checked" : null}>{task}</h4>
        </TaskItemSpam>
        <TaskItemModalSpan
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img src={deleteIcon} alt="" />
        </TaskItemModalSpan>
      </TaskItemStyled>

      {openModal && (
        <PopupDelete
          id={id}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
}
