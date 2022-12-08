import styled from "styled-components";

export const PopupDeleteStyled = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  @media (min-width: 375px) and (max-width: 391px) {
    width: 375px;
    height: 1101px;
  }
`;
export const Popup = styled.div`
  width: 400px;
  height: 200px;
  padding-top: 50px;
  border-radius: 4px;
  background-color: #ffffff;
  text-align: center;
  z-index: 1;
  @media (min-width: 375px) and (max-width: 391px) {
    width: 324px;
    height: 140px;
    padding: 0 2px;
  }
`;
export const PopupH4 = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
  color: #008594;
  line-height: 28px;
  @media (min-width: 375px) and (max-width: 391px) {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const PopupSpan = styled.span`
  padding: 20px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
`;
