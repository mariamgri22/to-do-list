import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../features/listSlice";
import TaskItem from  '../TaskItem/TaskItem'
import { TaskListStyled } from "./TaskListStyled";

export default function TaskList() {
  const lists = useSelector((state) => state.lists.lists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);
  return (
    <TaskListStyled>
      {lists?.map((l) => (
        <TaskItem key={l.id} {...l} />
      ))}
    </TaskListStyled>
  );
}
