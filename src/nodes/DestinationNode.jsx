import React from "react";
import { Handle, Position } from "reactflow";

export function DestinationNode({ xPos, yPos, data }) {
  // const x = `${Math.round(xPos)}px`;
  // const y = `${Math.round(yPos)}px`;

  return (
    // Add tailwind css classes here
    <div className='react-flow__node-default'>
      <div></div>
      {data.label && <div>{data.label}</div>}
      <div>Destination</div>
      {/* gives that dot which connects two nodes */}
      <Handle
        type='target'
        position={Position.Left}
        // isConnectable={isConnectable}
      />
    </div>
  );
}
