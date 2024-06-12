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
import { initialEdges } from "./edges";
import CustomEdge from "./edges/CustomEdge";

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const edgeTypes = {
    customEdge: CustomEdge,
  };

  const onConnect = useCallback(
    (connection) => {
      const edge = {
        ...connection,
        id: `${edges.length}`,
        type: "customEdge",
        animated: true,
      };
      setEdges((prevEges) => addEdge(edge, prevEges));
    },
    [setEdges]
  );
  const [nodeName, setNodeName] = useState("");
  const [nodeType, setNodeType] = useState("");
  const [open, setOpen] = useState(false);

  const handleNewNode = () => {
    const location = Math.random() * 100;

    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { label: `${nodeName}` },
        type: `${nodeType}-node`,
        position: { x: -location, y: location },
      },
    ]);
    setNodeName("");
    setNodeType("");
    setOpen(false);
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
        <button
          className='updatenode__btn w-32 p-1 bg-green-400 hover:bg-green-600 text-white'
          onClick={() => setOpen((open) => !open)}
        >
          Add New Node
        </button>
        {open && (
          <div className='updatenode__controls flex flex-col justify-center items-center p-3 rounded-md shadow-sm'>
            <label>
              {" "}
              Node Name:
              <input
                type='text'
                placeholder='Source/Destination Name'
                value={nodeName}
                onChange={(e) => setNodeName(e.target.value)}
                className='p-4 m-3 border-slate-300 border-[1px]'
                autoFocus
              />
            </label>
            <label>
              Node Type:
              <input
                type='text'
                placeholder='source/destination'
                value={nodeType}
                onChange={(e) => setNodeType(e.target.value)}
                className='p-[17px] m-3 border-slate-300 border-[1px]'
              />
            </label>
            {nodeName && nodeType ? (
              <button
                onClick={() => handleNewNode()}
                className=' w-32 p-1 bg-green-400 hover:bg-green-600 text-white'
              >
                Add new Node
              </button>
            ) : (
              <button
                onClick={() => handleNewNode()}
                className=' w-32 p-1 bg-slate-200 text-slate-500 cursor-not-allowed'
                disabled
              >
                Add new Node
              </button>
            )}
          </div>
        )}
        <Background style={{ backgroundColor: "lightgray" }} />
      </ReactFlow>
    </div>
  );
}

export default App;
