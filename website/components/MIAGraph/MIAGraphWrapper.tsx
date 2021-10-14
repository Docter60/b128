import dynamic from "next/dynamic";
import ReactDOM from "react-dom";

const FocusGraph = dynamic(() => import("./MIAGrapher"), {
  ssr: false,
});

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

export function submitGraphData(jsonData) {
  const data = formatData(jsonData);
  ReactDOM.render(
    <FocusGraph data={data} />,
    document.getElementById("miacanvas")
  );
}

export default FocusGraph;
