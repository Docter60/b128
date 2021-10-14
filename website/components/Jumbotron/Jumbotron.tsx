import React, { ReactNode } from "react";
import styles from "./Jumbotron.module.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Jumbotron = (props: Props) => {
  return (
    <div
      {...props}
      className={
        (props.className ? props.className : styles.jumbotron) +
        " bg-light p-5 rounded-lg my-3"
      }
    >
      {props.children}
    </div>
  );
};
