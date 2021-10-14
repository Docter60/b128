import React from "react";
import { StyledMenu } from "./HamburgerMenu.style";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: string;
  header?: string;
  children?: React.ReactNode;
}

export const HamburgerMenu = (props: Props) => {
  return (
    <StyledMenu
      open={props.open}
      variant={props.variant ? props.variant : "left"}
    >
      <h2>{props.header ? props.header : ""}</h2>
      {props.children}
    </StyledMenu>
  );
};
