import React from "react";
import { StyledBurger } from "./Hamburger.style";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: string;
}

export const Hamburger = (props: Props) => {
  return (
    <StyledBurger
      open={props.open}
      variant={props.variant ? props.variant : "left"}
      onClick={() => props.setOpen(!props.open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
