import React from "react";
import { useSelector } from "react-redux";
import { EmptyH4, EmptyHomeH3, EmptyHomeStyled } from "./EmptyHomeStyled";

export default function EmptyHome() {
  const lists = useSelector((state) => state.lists.lists);

  return (
    <>
      {lists?.length === 0 && (
        <EmptyHomeStyled>
          <EmptyH4>Your life is a blank page. You write on it.</EmptyH4>
          <EmptyHomeH3>So start by adding your tasks here.</EmptyHomeH3>
        </EmptyHomeStyled>
      )}
    </>
  );
}
