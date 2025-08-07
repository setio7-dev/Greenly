"use client"
import React, { useContext, createContext, useState, ReactNode } from 'react'

interface SplashContextType {
    id: number;
    path: string;
    label: string;
    color: string;
    splash: string;
}

interface GlobalContextProps {
    items: SplashContextType[];
    addItem: (item: SplashContextType) => void;
    removeItem: (id: number) => void;
}

const globalArrayContext = createContext<GlobalContextProps | undefined>(undefined);
export const GlobalSplashProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<SplashContextType[]>([]);

    const addItem = (item: SplashContextType) => {
        setItems(prevItems => [...prevItems, item]);
    };

    const removeItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <globalArrayContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </globalArrayContext.Provider>
    )
}


export const useGlobalSplashContext = () => {
    const context = useContext(globalArrayContext) as GlobalContextProps;
    return context;
}
