import React from "react";
import { BNavBar } from "../BNavBar";
import { Props as PNavBarProps, PNavBar } from "components/PNavBar";

export const ProjectPageHeader = (props: PNavBarProps) => {
  return (
    <div>
      <BNavBar />
      <PNavBar {...props} />
    </div>
  );
};
