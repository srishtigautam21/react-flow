import React from "react";
import {
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
  BaseEdge,
} from "reactflow";

export default function CustomEdge(EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
  } = EdgeProps;
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const onEdgeClick = () => {
    setEdges((edges) => edges.filter((e) => e.id !== id));
  };

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%,-50%) translate(${labelX}px, ${labelY}px)`,
            fontSize: 12,
            color: "red",
            pointerEvents: "all",
          }}
          className='nodrag nopan'
        >
          <button
            onClick={() => onEdgeClick()}
            className=' w-5 h-5 bg-slate-300 border-black cursor-pointer rounded-[50%] text-[12px] hover:shadow-md'
          >
            X
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
