import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [componentData, setComponentData] = useState({title: "", slogan: ""});

    return (
        <SettingsContext.Provider value={{ componentData, setComponentData }}>
            {children}
        </SettingsContext.Provider>
    );
};
