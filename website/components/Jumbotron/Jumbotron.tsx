import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./Jumbotron.module.css";

type Props = {
    children?: ReactNode
    className?: string
}

export function Jumbotron(props: PropsWithChildren<Props>) {
  return (
    <div {...props} className={(props.className ? props.className : styles.jumbotron) + " bg-light p-5 rounded-lg my-3"}>
        {props.children}
    </div>
  );
}
