import { useField } from "formik";
import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

interface CrementProps {
  name: string;
  min?: number;
  max?: number;
  default: number;
}

export const CrementButtonPair = (props: CrementProps) => {
  const [, meta, helpers] = useField(props.name);
  const min = props.min ? props.min : -Infinity;
  const max = props.max ? props.max : Infinity;
  return (
    <ButtonGroup>
      <Button
        variant="secondary"
        name={props.name}
        onClick={() => {
          if (meta.value == "" && props.default > min) {
            helpers.setValue(+props.default - 1);
            return;
          }
          if (+meta.value > min) {
            helpers.setValue(+meta.value - 1);
          }
        }}
      >
        &#8722;
      </Button>
      <Button
        variant="secondary"
        name={props.name}
        onClick={() => {
          if (meta.value == "" && props.default < max) {
            helpers.setValue(+props.default + 1);
            return;
          }
          if (+meta.value < max) {
            helpers.setValue(+meta.value + 1);
          }
        }}
      >
        &#43;
      </Button>
    </ButtonGroup>
  );
};
