import styled from "styled-components";

interface Props {
  open: boolean;
  variant: string;
}

export const StyledMenu = styled.nav<Props>`
  position: fixed;
  background: rgba(32, 32, 32, 32);
  width: 400px;
  max-width: 400px;
  text-align: ${({variant}) => (variant == "left") ? "right" : "left"};
  padding: 0.5rem 1rem;
  height: calc(100% - 101px);
  
  transition: transform 0.5s ease-in-out;
  ${({ variant }) => (variant == "left" ? "left: 0" : "right: 0")};
  transform: ${({ open, variant }) =>
    open
      ? "translateX(0)"
      : variant == "left"
      ? "translateX(calc(-100% - 1px))"
      : "translateX(100%)"};

  @media (max-width: 600px) {
    overflow: hidden;
    width: 100%;
  }

  h2 {
    color: #CCCCCC;
    margin-top: 2.5rem;
    padding: 0rem 4rem;
    text-align: center;
  }
`;
