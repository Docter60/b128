import React, { useCallback, useRef } from "react";
import ForceGraph3D, { ForceGraphMethods } from "react-force-graph-3d";

type Props = {
  data: any;
};

const ForceGraph = (props: Props) => {
  const fgRef = useRef<ForceGraphMethods>();

  const handleClick = useCallback(
    (node) => {
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      if (fgRef.current) {
        console.log(fgRef.current);
        fgRef.current.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio,
          },
          node,
          3000
        );
      }
    },
    [fgRef]
  );

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={props.data}
      nodeLabel="id"
      nodeAutoColorBy="group"
      onNodeClick={handleClick}
    />
  );
};

export default ForceGraph;
