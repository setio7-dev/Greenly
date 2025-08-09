"use client"
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

type ScanContextType = {
  result: string;
  setResult: (value: string) => void;
};

const ScanContext = createContext<ScanContextType | undefined>(undefined);

export const ScanProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResultState] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("scanResult");
    if (saved) {
      setResultState(saved);
    }
  }, []);

  const setResult = (value: string) => {
    setResultState(value);
    localStorage.setItem("scanResult", value);
  };

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
