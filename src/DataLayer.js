import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children}) => ( //children is what is wrapped inside the DataLayer (<App> for this example)
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext); //hook to pull information from the DataLayer