import React, { useEffect } from "react";
import AOS from "aos";
import { MIAQueryInspector } from "components/MIAQueryInspector";
import { ProjectPageHeader } from "components/ProjectPageHeader";
import { MIARankInspector } from "components/MIARankInspector";
import { MIACanvas } from "components/MIACanvas";

export default function MIAPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bbox">
      <div className="brow header">
      <ProjectPageHeader
        name="MIA"
        nameColor="rgb(158, 58, 58)"
        nameShadow="0 0 5px red"
      />
      </div>
      <div className="brow content">
      <MIAQueryInspector />
      <MIARankInspector />
      <MIACanvas />
      </div>
    </div>
  );
}
