import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    
    const [data, setData] = useState(null); 

    const value = {
      
        data, 
        setData, 
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
}
