import styled from "styled-components";

export const TaskItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  word-break: break-all;
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  @media (min-width: 375px) and (max-width: 391px) {
    width: 327px;
  }
  h4 {
    font-size: 18px;
    font-weight: 400;
    color: #666666;
    padding-right: 10px;
  }
  .checked {
    color: #acacac;
  }
`;

export const TaskItemSpam = styled.span`
  display: flex;
`;

export const TaskItemInput = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  margin-right: 50px;
  accent-color: #008594;
  border: 2px solid #008594;
`;

export const TaskItemModalSpan = styled.span`
  padding-top: 23px;
  cursor: pointer;
  img {
    height: 13.184999465942383px;
    width: 13.184999465942383px;
    left: 5.407501220703125px;
    top: 5.407501220703125px;
    border-radius: 0px;
  }
`;
