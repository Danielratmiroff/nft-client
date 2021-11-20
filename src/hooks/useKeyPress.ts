import { FC, useEffect, KeyboardEvent, useState, createRef } from "react";

type UseKeyPressParms = {
  targetKey: string;
  handler: () => void;
};

export const useKeyPress = ({ targetKey, handler }: UseKeyPressParms) => {
  const downHandler = ({ key }: any) => {
    if (key === targetKey) {
      handler();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });
};
