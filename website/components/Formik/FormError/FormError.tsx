import { ErrorMessage } from "formik";
import React from "react";
import { FormErrorStyle } from "./FormError.style";

interface Props {
  name: string;
  error: string;
}

export const FormError: React.FC<Props> = (props: Props) => {
  return (
    <FormErrorStyle>
      {props.error ? (
        <div>
          <ErrorMessage name={props.name} />
        </div>
      ) : (
        ""
      )}
    </FormErrorStyle>
  );
};
