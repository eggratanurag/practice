import React, { createContext, useState } from 'react';
import type { toastProps } from '../hooks/useToast.tsx';

export interface LocalContextProps {
    toast: toastProps[];
    setOriginalToast: React.Dispatch<React.SetStateAction<toastProps[]>>;
}

const LocalContext = createContext<LocalContextProps | undefined>(undefined);

const LocalContextProvider = ({children} : {children: React.ReactNode}) => {
    const [toast, setOriginalToast] = useState<toastProps[]>([]);

    return (
      <LocalContext.Provider value={{toast, setOriginalToast}}>
        {children}
      </LocalContext.Provider>
    );
  };

  export {LocalContext, LocalContextProvider};