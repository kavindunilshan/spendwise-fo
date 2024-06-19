import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [sharedData, setSharedData] = useState(null);

    return (
        <SettingsContext.Provider value={{ sharedData, setSharedData }}>
            {children}
        </SettingsContext.Provider>
    );
};
