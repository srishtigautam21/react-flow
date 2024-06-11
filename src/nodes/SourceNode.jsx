import React from "react";
import { Handle, Position } from "reactflow";

export function SourceNode({ xPos, yPos, data }) {
  // const x = `${Math.round(xPos)}px`;
  // const y = `${Math.round(yPos)}px`;

  return (
    // Add tailwind css classes here
    <div className='react-flow__node-default'>
      <div></div>
      {data.label && <div>{data.label}</div>}
      <div>Source</div>
      {/* gives that dot which connects two nodes */}
      <Handle
        type='source'
        position={Position.Right}
        // isConnectable={isConnectable}
      />
    </div>
  );
}
