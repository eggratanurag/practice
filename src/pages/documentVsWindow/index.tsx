import { useState, useEffect } from 'react';

type ClickSource = 'window' | 'document';

// Hook using WINDOW (catches all clicks)
function useClickAnywhereWindow(handler: (source: ClickSource) => void) {
  useEffect(() => {
    function listener(event: MouseEvent) {
      console.log('🪟 Window click detected at:', event.clientX, event.clientY);
      handler('window');
    }

    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [handler]);
}

// Hook using DOCUMENT (catches only document clicks)
function useClickAnywhereDocument(handler: (source: ClickSource) => void) {
  useEffect(() => {
    function listener(event: MouseEvent) {
      console.log('📄 Document click detected at:', event.clientX, event.clientY);
      handler('document');
    }

    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [handler]);
}

const ClickDemo = () => {
  const [windowClicks, setWindowClicks] = useState(0);
  const [documentClicks, setDocumentClicks] = useState(0);
  const [lastClickSource, setLastClickSource] = useState('');

  // Using both hooks to compare
  useClickAnywhereWindow((source: ClickSource) => {
    setWindowClicks(prev => prev + 1);
    setLastClickSource('Window listener triggered!');
  });

  useClickAnywhereDocument((source: ClickSource) => {
    setDocumentClicks(prev => prev + 1);
    setLastClickSource('Document listener triggered!');
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Window vs Document Click Detection</h1>
      
      {/* Stats Display */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50 border border-red-200 p-4 rounded">
          <h3 className="font-bold text-red-700">🪟 Window Clicks</h3>
          <p className="text-2xl font-mono">{windowClicks}</p>
          <p className="text-sm text-red-600">Catches clicks anywhere in browser</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded">
          <h3 className="font-bold text-blue-700">📄 Document Clicks</h3>
          <p className="text-2xl font-mono">{documentClicks}</p>
          <p className="text-sm text-blue-600">Catches clicks only in document area</p>
        </div>
      </div>

      {lastClickSource && (
        <div className="mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="font-semibold">Last Click: {lastClickSource}</p>
        </div>
      )}

      {/* Visual Explanation */}
      <div className="mb-6 bg-gray-50 p-6 rounded border">
        <h2 className="text-xl font-bold mb-4">Key Differences:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-4 rounded border border-red-200">
            <h3 className="font-bold text-red-700 mb-2">🪟 window.addEventListener</h3>
            <ul className="text-sm space-y-1">
              <li>• Catches clicks on scrollbars</li>
              <li>• Catches clicks on browser UI</li>
              <li>• Catches clicks outside document</li>
              <li>• More comprehensive coverage</li>
              <li>• <strong>Better for "click anywhere" functionality</strong></li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <h3 className="font-bold text-blue-700 mb-2">📄 document.addEventListener</h3>
            <ul className="text-sm space-y-1">
              <li>• Only catches clicks in HTML content</li>
              <li>• Doesn't catch scrollbar clicks</li>
              <li>• Doesn't catch browser UI clicks</li>
              <li>• Limited to document area</li>
              <li>• <strong>Might miss some clicks</strong></li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
          <h3 className="font-bold text-yellow-700 mb-2">🎯 Why Your Assignment Required `window`:</h3>
          <p className="text-sm">
            For a "click anywhere" hook, you want to catch ALL possible clicks - including clicks on scrollbars, 
            browser chrome, or any area outside the document content. Using `window` ensures you don't miss any clicks!
          </p>
        </div>
      </div>

      {/* Interactive Test Area */}
      <div className="bg-white border-2 border-dashed border-gray-300 p-8 rounded">
        <h3 className="text-lg font-bold mb-4 text-center">Test Area - Click Anywhere!</h3>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
            Button 1
          </button>
          <button className="bg-green-500 text-white p-3 rounded hover:bg-green-600">
            Button 2  
          </button>
          <button className="bg-purple-500 text-white p-3 rounded hover:bg-purple-600">
            Button 3
          </button>
        </div>
        <p className="text-center mt-4 text-sm text-gray-600">
          Click buttons, empty space, or try clicking on the scrollbar (if visible) to see the difference!
        </p>
      </div>

      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
        <p className="text-sm">
          <strong>Pro Tip:</strong> Open your browser console (F12) to see detailed click coordinates 
          and understand exactly where each click is being detected!
        </p>
      </div>
    </div>
  );
};

export default ClickDemo;