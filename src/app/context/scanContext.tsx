"use client"
import React, { createContext, useState, ReactNode, useContext } from "react";

type ScanContextType = {
  result: string;
  setResult: (value: string) => void;
};

const ScanContext = createContext<ScanContextType | undefined>(undefined);

export const ScanProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<string>("");

  return (
    <ScanContext.Provider value={{ result, setResult }}>
      {children}
    </ScanContext.Provider>
  );
};

export const useScan = () => {
  const context = useContext(ScanContext);
  if (!context) {
    throw new Error("useScan must be used within a ScanProvider");
  }
  return context;
};
