"use client";

import { useAtomValue } from "jotai";
import dynamic from "next/dynamic";

import { annotationCanvasAtom } from "@/atoms";
import { EditorControls } from "@/components/EditorControls";
import { EditorTools } from "@/components/EditorTools";
import { StartEntry } from "@/components/StartEntry";
// import { Canvas } from "@/components/Notation/canvas";

const Canvas = dynamic(
  () => import("@/components/Notation/canvas").then((mod) => mod.Canvas),
  {
    ssr: false,
  }
);

export default function Home() {
  const annotationCanvas = useAtomValue(annotationCanvasAtom);

  return (
    <div className="h-screen">
      <div className="grid grid-cols-[4rem_1fr] grid-rows-[5rem_1fr] h-full">
        <div className="topbar col-span-2 flex gap-4 items-center bg-slate-300">
          <i className="text-2xl text-purple-500 font-bold pl-4">
            Collabnotation
          </i>
          <EditorControls />
        </div>

        <div className="sidebar bg-slate-100 py-4">
          <EditorTools />
        </div>

        <div className="content flex-grow bg-slate-200">
          {annotationCanvas.initialized ? (
            <div className="h-full flex items-center justify-center">
              <div
                className={`w-[${annotationCanvas.width}px] h-[${annotationCanvas.height}px]`}
              >
                <Canvas />
              </div>
            </div>
          ) : (
            <StartEntry />
          )}
        </div>
      </div>
    </div>
  );
}
