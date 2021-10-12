import dynamic from "next/dynamic";
import React, { useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { ForceGraphMethods } from "react-force-graph-3d";

const DynamicForceGraph3D = dynamic(() => import("ForceGraph3D"), {
  ssr: false,
});

export function submitGraphData(jsonData) {
  const data = formatData(jsonData);
  constructGraph(data);
}

function formatData(jsonData) {
  // Create empty graph input object
  let data = { nodes: [], links: [] };
  let parent: string, parentGroup: number, childGroup: number;
  if (jsonData.type === "subs") {
    parent = "moderators";
    parentGroup = 0;
    childGroup = 1;
  } else {
    parent = "subreddits";
    parentGroup = 1;
    childGroup = 0;
  }

  // For each node specified
  jsonData.results.forEach((element) => {
    data.nodes.push({ id: element.name, group: parentGroup });

    // For each node connection specified
    element[parent].forEach((child) => {
      // If node doesn't exist yet, create the node
      if (!data.nodes.some((e) => e.id === child)) {
        data.nodes.push({ id: child, group: childGroup });
      }
      data.links.push({ source: element.name, target: child });
    });
  });
  return data;
}

function constructGraph(data) {
  const FocusGraph = () => {
    const fgRef = useRef<ForceGraphMethods>();

    const handleClick = useCallback(
      (node) => {
        const distance = 40;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
        fgRef.current.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio,
          },
          node,
          3000
        );
      },
      [fgRef]
    );

    return (
      <DynamicForceGraph3D
        ref={fgRef}
        graphData={data}
        nodeLabel="id"
        nodeAutoColorBy="group"
        onNodeClick={handleClick}
      />
    );
  };
  ReactDOM.render(<FocusGraph />, document.getElementById("miacanvas"));
}
