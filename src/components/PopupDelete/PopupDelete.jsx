import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../features/listSlice";
import {
  Popup,
  PopupDeleteStyled,
  PopupH4,
  PopupSpan,
} from "./PopupDeleteStyled";

function PopupDelete({ id, setOpenModal, openModal }) {
  const dispatch = useDispatch();

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setOpenModal(false);
    }
  };

  return createPortal(
    <PopupDeleteStyled ref={modalRef} onClick={closeModal}>
      <Popup>
        <PopupH4>Are you sure you want to delete? </PopupH4>
        <PopupSpan onClick={() => dispatch(deleteTask({ id }))}>Yes</PopupSpan>
        <PopupSpan onClick={() => setOpenModal(false)}>No</PopupSpan>
      </Popup>
    </PopupDeleteStyled>,
    document.getElementById("popup")
  );
}

export default PopupDelete;
