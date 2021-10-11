import { useField } from "formik";
import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

interface InequalityGroupProps {
  name: string;
}

export const IneqalityGroup: React.FC<InequalityGroupProps> = (
  props: InequalityGroupProps
) => {
  const [field,, helpers] = useField(props.name);
  return (
    <ToggleButtonGroup
      name="modCountRelation"
      size="sm"
      defaultValue={field.value}
    >
      <ToggleButton
        variant="secondary"
        value="lt"
        onClick={(e) => helpers.setValue("lt")}
      >
        {"<="}
      </ToggleButton>
      <ToggleButton
        variant="secondary"
        value="gt"
        onClick={(e) => helpers.setValue("gt")}
      >
        {">="}
      </ToggleButton>
      <ToggleButton
        variant="secondary"
        value="eq"
        onClick={(e) => helpers.setValue("eq")}
      >
        {"=="}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
