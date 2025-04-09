"use client";

import { useAtomValue } from "jotai";
import { Stage, Layer } from "react-konva";

import { annotationCanvasAtom } from "@/atoms";
import { useDrawing } from "@/hooks/useDrawing";

import { Annotation } from "./index";

export function Canvas() {
  const annotationCanvas = useAtomValue(annotationCanvasAtom);
  const { handleDrawStart, handleDrawing, handleDrawEnd } = useDrawing();

  return (
    <>
      <Stage
        width={annotationCanvas.width}
        height={annotationCanvas.height}
        onMouseDown={handleDrawStart}
        onMouseMove={handleDrawing}
        onMouseUp={handleDrawEnd}
        onMouseLeave={handleDrawEnd}
        className="bg-white"
      >
        <Layer>
          <Annotation />
        </Layer>
      </Stage>
    </>
  );
}
