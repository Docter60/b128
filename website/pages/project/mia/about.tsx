import React, { useEffect } from "react";
import AOS from "aos";
import { ProjectPageHeader } from "components/ProjectPageHeader";

export default function MIAAboutPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <ProjectPageHeader
        name="MIA"
        nameColor="rgb(158, 58, 58)"
        nameShadow="0 0 5px red"
      />
      MIA about page
    </div>
  );
}
