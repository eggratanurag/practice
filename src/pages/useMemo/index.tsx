import React, { useState, useMemo } from 'react';

const SimpleUseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // Without useMemo - runs every render
  const expensiveSum = items.reduce((sum, item) => {
    console.log('Calculating sum...');
    return sum + item;
  }, 0);

  // With useMemo - only runs when items change
  const memoizedSum = useMemo(() => {
    console.log('Memoized calculation running');
    return items.reduce((sum, item) => sum + item, 0);
  }, [items]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">useMemo Demo</h2>

      <div className="space-y-3">
        <p>Count: {count}</p>
        <p>Regular sum: {expensiveSum}</p>
        <p>Memoized sum: {memoizedSum}</p>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          Increment Count
        </button>

        <button
          onClick={() => setItems([...items, Math.floor(Math.random() * 10)])}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Item
        </button>
        
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Open console and click "Increment Count" - memoized version won't
        recalculate!
      </p>
    </div>
  );
};

export default SimpleUseMemoExample;
