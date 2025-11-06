import React, { useState } from 'react';

import {useToast} from './../../hooks/useToast.tsx';

const ToastContainer = () => {
  const {showToast} = useToast()

  const showSuccess = () => { 
    showToast({
      message: "hello kitty",
      duration: 3000,
      type: "success"
    })
  }
  const showError = () => {
    showToast({
      message: "hello kitty",
      duration: 3000,
      type: "error"
    })
  }
  const showInfo = () => {
    showToast({
      message: "hello kitty",
      duration: 3000,
      type: "info"
    })
  }
  
  return (
    <div>

       {/* Render multiple toasts */}

      <div>
        <button onClick={showSuccess} >Show Success</button>
        <button onClick={showError}>Show Error</button>
        <button onClick={showInfo} >Show Info</button>
      </div>
    </div>
  );
};

export default ToastContainer;
