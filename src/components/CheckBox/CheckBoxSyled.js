import styled from "styled-components";

export const CheckboxStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  label {
    right: 0;
    font-size: 1.125rem;
  }
`;

export const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
  width: 24px;
  accent-color: #008594;
`;
