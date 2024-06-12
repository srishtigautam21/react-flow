import { DestinationNode } from "./DestinationNode";
import { SourceNode } from "./SourceNode";

export const initialNodes = [
  {
    id: "1",
    type: "source-node",
    position: { x: -400, y: 0 },
    data: { label: "Source 1" },
  },
  {
    id: "2",
    type: "source-node",
    position: { x: -400, y: 100 },
    data: { label: "Source 2" },
  },
  {
    id: "3",
    type: "source-node",
    position: { x: -400, y: 200 },
    data: { label: "Source 3" },
  },
  {
    id: "4",
    type: "destination-node",
    position: { x: 0, y: 50 },
    data: { label: "Destination 1" },
  },
  {
    id: "5",
    type: "destination-node",
    position: { x: 0, y: 200 },
    data: { label: "Destination 2" },
  },
];

export const nodeTypes = {
  "source-node": SourceNode,
  "destination-node": DestinationNode,
};
