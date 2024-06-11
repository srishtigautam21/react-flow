import { useCallback, useState } from "react";
import "./App.css";
import {
  Background,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, id: `${edges.length}` };
      setEdges((prevEges) => addEdge(edge, prevEges));
    },
    // setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );
  const [nodeName, setNodeName] = useState("");
  const [nodeType, setNodeType] = useState("");

  const handleNewNode = () => {
    const location = Math.random() * 100;
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { label: `${nodeName}` },
        type: `${nodeType}-node`,
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        minZoom={0.2}
        maxZoom={4}
        fitView
      >
        {/* <Background /> */}
        <div className='updatenode__controls'>
          <label>
            {" "}
            Node Name:
            <input
              type='text'
              placeholder='Source/Destination Name'
              value={nodeName}
              onChange={(e) => setNodeName(e.target.value)}
            />
          </label>
          <label>
            Node Type:
            <input
              type='text'
              placeholder='source/destination'
              value={nodeType}
              onChange={(e) => setNodeType(e.target.value)}
              className='p-4 m-3'
            />
          </label>
          <button onClick={() => handleNewNode()} className='w-4 p-4'>
            Add new Node
          </button>
        </div>
        <Background style={{ backgroundColor: "lightgray" }} />
      </ReactFlow>
    </div>
  );
}

export default App;
