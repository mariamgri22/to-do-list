import styled from "styled-components";

export const AddToDoStyled = styled.div`
  padding-top: 56px;
  font-size: 18px;
`;

export const AddToDoH4 = styled.h4`
  font-weight: 400;
`;

export const AddToDoForm = styled.form`
  display: flex;
  @media (min-width: 375px) and (max-width: 391px) {
    flex-direction: column;
  }
`;

export const AddToDoDiv = styled.div`
  position: relative;
  width: 954px;
  input {
    width: 100%;
    height: 45px;
    border: 2px solid #ffcd04;
    border-radius: 4px;
    font-weight: 400;
    font-size: 18px;
    padding-left: 16px;
  }
  & :focus {
    outline: none;
  }
  .notValid {
    border-color: red;
    font-size: 15px;
  }

  @media (min-width: 375px) and (max-width: 391px) {
    width: 327px;
    overflow: clip;
    input {
      width: 305px;
      font-size: 12px;
      padding-left: none;
    }
    .notValid {
      font-size: 12px;
    }
  }
`;

export const AddTodoSpan = styled.span`
  background-color: #ffffff;
  position: absolute;
  top: 15px;
  right: 15px;
  img {
    height: 13.184999465942383px;
    width: 13.184999465942383px;
    left: 5.40771484375px;
    top: 5.407470703125px;
    border-radius: 0px;
  }
  @media (min-width: 375px) and (max-width: 391px) {
    padding-left: 10px;
    padding-right: 10px;
    right: 2px;
  }
`;

export const AddToDoButton = styled.button`
  width: 100px;
  height: 52px;
  margin-left: 48px;
  background-color: #008594;
  border-radius: 4px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  @media (min-width: 375px) and (max-width: 391px) {
    margin-left: auto;
    margin-top: 16px;
  }
`;
