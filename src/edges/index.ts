import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
  {
    id: "1->4",
    source: "1",
    target: "4",
    // deletable: true,
    animated: true,
    type: "customEdge",
    // style: { stroke: "#808080" },
  },
  {
    id: "2->4",
    source: "2",
    target: "4",
    // deletable: true,
    animated: true,
    type: "customEdge",
  },
  {
    id: "3->4",
    source: "3",
    target: "4",
    // deletable: true,
    animated: true,
    type: "customEdge",
  },
  {
    id: "3->5",
    source: "3",
    target: "5",
    // deletable: true,
    animated: true,
    type: "customEdge",
  },
] satisfies Edge[];

// export const edgeTypes = {
//   // Add your custom edge types here!

// } satisfies EdgeTypes;
