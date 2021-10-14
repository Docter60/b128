import dynamic from "next/dynamic";
import ReactDOM from "react-dom";

const FocusGraph = dynamic(() => import("./MIAGrapher"), {
  ssr: false,
});

const formatData = (jsonData: any) => {
  const results = jsonData.results;
  const subredditQuery: boolean = jsonData.type === "subs";
  const data = { nodes: [], links: [] };
  const nodes = data.nodes;
  const links = data.links;
  const parent: string = subredditQuery ? "moderators" : "subreddits";
  const parentGroup: number = subredditQuery ? 0 : 1;
  const childGroup: number = subredditQuery ? 1 : 0;

  results.forEach((element: any) => {
    nodes.push({ id: element.name, group: parentGroup });
    element[parent].forEach((child: any) => {
      if (!nodes.some((e) => e.id === child)) {
        nodes.push({ id: child, group: childGroup });
      }
      links.push({ source: element.name, target: child });
    });
  });
  return data;
};

export const submitGraphData = (jsonData: any) => {
  const data = formatData(jsonData);
  ReactDOM.render(
    <FocusGraph data={data} />,
    document.getElementById("miacanvas")
  );
};

export default FocusGraph;
