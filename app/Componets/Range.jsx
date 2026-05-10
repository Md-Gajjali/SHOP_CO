"use client";
import { useState, useRef, useCallback } from "react";

const MIN = 0;
const MAX = 280;

function clamp(v, a, b) {
  return Math.min(Math.max(v, a), b);
}

export default function PriceRangeSlider() {
  const [loVal, setLoVal] = useState(50);
  const [hiVal, setHiVal] = useState(200);
  const trackRef = useRef(null);

  const lo = Math.min(loVal, hiVal);
  const hi = Math.max(loVal, hiVal);
  const pct = (v) => ((v - MIN) / (MAX - MIN)) * 100;

  const makeDragHandler = useCallback((isMin) => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      const onMove = (moveEvent) => {
        const rect = trackRef.current.getBoundingClientRect();
        const clientX = moveEvent.touches
          ? moveEvent.touches[0].clientX
          : moveEvent.clientX;
        const val = Math.round(
          clamp(((clientX - rect.left) / rect.width) * (MAX - MIN) + MIN, MIN, MAX)
        );
        if (isMin) setLoVal(val);
        else setHiVal(val);
      };
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        document.removeEventListener("touchmove", onMove);
        document.removeEventListener("touchend", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      document.addEventListener("touchmove", onMove, { passive: false });
      document.addEventListener("touchend", onUp);
    };
  }, []);

  const ThumbWithLabel = ({ val, isMin }) => (
    <div
      className="absolute top-1/2 z-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${pct(val)}%` }}
    >
      <div
        className="w-5 h-5 bg-white mt-10 border-2 border-black rounded-full cursor-grab active:cursor-grabbing active:scale-110 transition-transform"
        onMouseDown={makeDragHandler(isMin)}
        onTouchStart={makeDragHandler(isMin)}
      />
      <div className="mt-3 px-3 py-1 text-sm font-medium   border-none rounded-lg whitespace-nowrap select-none">
        ${isMin ? lo : hi}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-sm px-4 py-8">
      <div ref={trackRef} className="relative h-1.5 my-10">
        <div className="absolute inset-0 bg-gray-200 rounded-full" />

        <div
          className="absolute top-0 bottom-0 bg-black rounded-full"
          style={{ left: `${pct(lo)}%`, width: `${pct(hi) - pct(lo)}%` }}
        />

        <ThumbWithLabel val={loVal} isMin={true} />

        <ThumbWithLabel val={hiVal} isMin={false} />
      </div>
    </div>
  );
}