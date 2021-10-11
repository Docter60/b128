import styled, { keyframes } from "styled-components";

export const FormErrorAnimation = keyframes`
from {
  opacity: 0;
  max-height: 0px;
}
to {
  opacity: 1;
  max-height: 300px;
}
`;

export const FormErrorStyle = styled.div`
  div {
    color: red;
    font-size: 12px;
    animation-name: ${FormErrorAnimation};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    margin-top: 5px;
  }
`;
