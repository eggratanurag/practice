import React, { useState, useCallback } from 'react';

interface ChildComponentProps {
  onClick: () => void;
  label: string;
}

// Child component that shows when it re-renders
const ChildComponent = React.memo(({ onClick, label }: ChildComponentProps) => {
  console.log(`${label} child re-rendered`);
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
    >
      {label}
    </button>
  );
});

const SimpleUseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['apple', 'banana']);

  // Without useCallback - new function every render
  const handleClickWithout = () => {
    console.log('Regular function called');
    setItems([...items, 'orange']);
  };

  // With useCallback - same function reference when deps don't change
  const handleClickWith = useCallback(() => {
    console.log('Memoized function called');
    setItems(prev => [...prev, 'grape']);
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">useCallback Demo</h2>
      
      <div className="space-y-3">
        <p>Count: {count}</p>
        <p>Items: {items.join(', ')}</p>
        
        <div className="space-y-2">
          <ChildComponent 
            onClick={handleClickWithout} 
            label="Without useCallback" 
          />
          <ChildComponent 
            onClick={handleClickWith} 
            label="With useCallback" 
          />
        </div>
        
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Increment Count (triggers re-render)
        </button>
      </div>
      
      <p className="text-sm text-gray-600 mt-4">
        Open console and click "Increment Count" - see which child re-renders!
      </p>
    </div>
  );
};

export default SimpleUseCallbackExample;