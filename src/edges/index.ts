import type { Edge } from "reactflow";

export const initialEdges = [
  {
    id: "1->4",
    source: "1",
    target: "4",
    animated: true,
    type: "customEdge",
  },
  {
    id: "2->4",
    source: "2",
    target: "4",
    animated: true,
    type: "customEdge",
  },
  {
    id: "3->4",
    source: "3",
    target: "4",
    animated: true,
    type: "customEdge",
  },
  {
    id: "3->5",
    source: "3",
    target: "5",
    animated: true,
    type: "customEdge",
  },
] satisfies Edge[];
