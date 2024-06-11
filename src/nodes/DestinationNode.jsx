import React from "react";
import { Handle, Position } from "reactflow";
import { IconArrowLeft } from "../assets/react";

export function DestinationNode({ data }) {
  return (
    // Add tailwind css classes here
    <div className='border-[1px] border-black rounded-sm bg-white flex h-16 p-1 w-max relative'>
      <div className=' bg-slate-400 h-[100%] flex items-center rounded-sm p-1'>
        <IconArrowLeft />
      </div>
      {data.label && <div className='text-[12px]  m-1'>{data.label}</div>}
      <div
        className='text-[12px]  text-right m-1 flex
    items-end'
      >
        Destination
      </div>

      <Handle
        type='target'
        position={Position.Left}
        className=' w-[6px] bg-green-400 border-none h-5 rounded-none absolute '
      />
    </div>
  );
}
