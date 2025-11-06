import { useContext } from 'react';
import { LocalContext, type LocalContextProps } from '../context/index.tsx';

const useLocalContext = (): LocalContextProps => {
  const context = useContext(LocalContext);
  if (context === undefined) {
    throw new Error('useLocalContext must be used within a LocalContextProvider');
  }
  return context;
};

export { useLocalContext };
