"use client";

import React, { useState, useEffect, useRef } from "react";

const CountdownTimer: React.FC = () => {
  const [count, setCount] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (isRunning && count > 0) {
      intervalRef.current = window.setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current !== undefined) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    if (count === 0 && isRunning) {
      setIsRunning(false);
      if (intervalRef.current !== undefined) {
        clearInterval(intervalRef.current);
      }
    }
  }, [count, isRunning]);

  const startCountdown = () => {
    if (count > 0) setIsRunning(true);
  };

  const resetCountdown = () => {
    //reset counter
    setIsRunning(false);
    if (intervalRef.current !== undefined) {
      clearInterval(intervalRef.current);
    }
    setCount(10);
  };

  return (
    <div className="pt-5">
      <div className="max-w-sm  p-6 text-center border border-gray-300 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>
        <div className="text-4xl mb-4">{count > 0 ? count : "Done!"}</div>
        <div className="space-x-4">
          <button
            onClick={startCountdown}
            disabled={isRunning || count === 0}
            className="px-4 py-2 bg-fuchsia-900 text-white rounded disabled:opacity-50"
          >
            Start
          </button>
          <button
            onClick={resetCountdown}
            className="px-4 py-2 bg-gray-300 text-gray-950 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
