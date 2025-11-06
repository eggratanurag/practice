import { useLocalContext } from './useLocalContext.tsx';

interface useToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  duration: number;
  id: string;
}

interface toastProps {
    visible: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
    duration: number | null;
    id: string;
}

const useToast = () => {
  const { setOriginalToast } = useLocalContext();

  const showToast = ({ message, type, duration }: Omit<useToastProps, 'id'>) => {

    const id = Math.random().toString(36).substring(2, 9); // Generate a unique ID
    const newToast: toastProps = { id, message, type, duration, visible: true };
    setOriginalToast((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => {
      setOriginalToast((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== id)
      );
    }, duration);
    
  };

  return { showToast };

}

export { useToast, type toastProps, type useToastProps };
