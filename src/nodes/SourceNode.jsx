import React from "react";
import { Handle, Position } from "reactflow";
import { IconArrowRight } from "../assets/react";

export function SourceNode({ data }) {
  return (
    <div className='border-[1px] border-black rounded-sm bg-white flex h-16 p-1 w-max relative'>
      <div className=' bg-slate-400 h-[100%] flex items-center rounded-sm p-1'>
        <IconArrowRight />
      </div>
      {data.label && <div className='text-[12px]  m-1'>{data.label}</div>}
      <div
        className='text-[12px]  text-right m-1 flex
    items-end'
      >
        Source
      </div>
      <Handle
        type='source'
        position={Position.Right}
        className=' w-[6px] bg-green-400 border-none h-5 rounded-none absolute '
      />
    </div>
  );
}
