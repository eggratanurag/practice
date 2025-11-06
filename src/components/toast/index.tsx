

import React from 'react';
import { useLocalContext } from '../../hooks/useLocalContext.tsx';
import type { toastProps } from '../../hooks/useToast.tsx';

interface ToastStyles {
  container: React.CSSProperties;
}

const Toast = () => {
  const {toast} = useLocalContext();

  if (toast.length === 0) return null;

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      {toast.map((t) => {
        const styles: ToastStyles = {
          "container": {
            display: "flex",
            padding: "10px 20px",
            background: t.type === "success" ? "green" : t.type === "error" ? "red" : "blue",
            fontSize: "16px",
            color: "white",
            maxWidth: "200px",
            borderRadius: "10px",
            position: "relative", // Change to relative for stacking
            marginBottom: "10px", // Add margin for spacing between toasts
          }
        }
        return (
          <div key={t.id} style={styles.container}>
            {t.message}
          </div>
        );
      })}
    </div>
  );
}

export {Toast}