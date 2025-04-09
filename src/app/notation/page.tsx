"use client";

import { useAtomValue } from "jotai";
import dynamic from "next/dynamic";

import { annotationCanvasAtom } from "@/atoms";
import { EditorControls } from "@/components/EditorControls";
import { EditorTools } from "@/components/EditorTools";
import { StartEntry } from "@/components/StartEntry";

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
      <div className="grid grid-cols-[4rem_1fr] grid-rows-[3rem_1fr] h-full">
        <div className="topbar col-span-2 flex gap-4 items-center bg-white">
          <i className="text-2xl text-sky-400 font-bold pl-4">CollabNotation</i>
          <EditorControls />
        </div>

        <div className="sidebar bg-sidebar py-4">
          <EditorTools />
        </div>

        <div className="content flex-grow bg-header">
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
