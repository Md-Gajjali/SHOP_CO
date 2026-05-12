"use client";

import useCounterStore from "../src/Store/CounterStore";


export default function CounterSlice() {

  const { count, increase, decrease } = useCounterStore();

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Count: {count}
      </h1>

      <div className="flex gap-4 mt-5">

        <button
          onClick={increase}
          className="bg-black text-white px-5 py-2 rounded"
        >
          +
        </button>

        <button
          onClick={decrease}
          className="bg-red-500 text-white px-5 py-2 rounded"
        >
          -
        </button>

      </div>
    </div>
  );
}