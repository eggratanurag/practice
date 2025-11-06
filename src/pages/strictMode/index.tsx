import React, { useState, useEffect } from 'react';

// Component with PROBLEMATIC useEffect (no cleanup)
const ProblematicComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('🔴 PROBLEMATIC: Effect started - NO cleanup!');
    
    const interval = setInterval(() => {
      setCount(prev => {
        const newCount = prev + 1;
        console.log(`🔴 PROBLEMATIC Timer: ${newCount}`);
        return newCount;
      });
    }, 2000);
    
    // ❌ BUG: No cleanup! Multiple intervals will run in Strict Mode
    
  }, []);

  return (
    <div className="p-4 border border-red-300 rounded bg-red-50">
      <h3 className="font-bold text-red-700">❌ Problematic Component</h3>
      <p>Count: {count}</p>
      <p className="text-sm text-red-600">Check console - multiple intervals running!</p>
    </div>
  );
};

// Component with CORRECT useEffect (with cleanup)
const CorrectComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('✅ CORRECT: Effect started - with cleanup!');
    
    const interval = setInterval(() => {
      setCount(prev => {
        const newCount = prev + 1;
        console.log(`✅ CORRECT Timer: ${newCount}`);
        return newCount;
      });
    }, 2000);
    
    // ✅ CORRECT: Cleanup prevents multiple intervals
    return () => {
      console.log('🧹 CLEANUP: Clearing interval');
      clearInterval(interval);
    };
    
  }, []);

  return (
    <div className="p-4 border border-green-300 rounded bg-green-50">
      <h3 className="font-bold text-green-700">✅ Correct Component</h3>
      <p>Count: {count}</p>
      <p className="text-sm text-green-600">Check console - single interval running!</p>
    </div>
  );
};

const App = () => {
  const [showComponents, setShowComponents] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Strict Mode Console Demo</h1>
      
      <div className="mb-4 p-4 bg-blue-50 rounded">
        <h2 className="font-bold mb-2">Instructions:</h2>
        <p className="text-sm mb-2">1. Keep Strict Mode ON in your root (index.js or main.jsx)</p>
        <p className="text-sm mb-2">2. Open Console (F12)</p>
        <p className="text-sm mb-2">3. Click "Show Components" and watch console logs</p>
        <p className="text-sm">4. You'll see the problematic component logs twice as fast!</p>
      </div>
      
      <button
        onClick={() => setShowComponents(!showComponents)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {showComponents ? 'Hide' : 'Show'} Components
      </button>
      
      {showComponents && (
        <div className="space-y-4">
          <ProblematicComponent />
          <CorrectComponent />
        </div>
      )}
    </div>
  );
};

export default App;