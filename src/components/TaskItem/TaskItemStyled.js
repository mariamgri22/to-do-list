import styled from "styled-components";

export const TaskItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  word-break: break-all;
  padding-top: 0 20px;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  @media (min-width: 375px) and (max-width: 391px) {
    width: 327px;
  }
  h4 {
    font-size: 1.125rem;
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
export const TaskItemInput = styled.input`
  width: 24px;
  padding-right: 50px;
  background: #008594;
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
