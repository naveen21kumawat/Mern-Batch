import React, { useRef, useState, useMemo } from 'react';


const UseRefUseMemoDemo = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState('');
  const [sideEffectLength, setSideEffectLength] = useState(0);


  // useMemo: Memoizes the calculation, so it only recalculates when 'text' changes
  const memoizedLength = useMemo(() => {
    console.log('useMemo: Calculating text length...');
    return text.length;
  }, [text]);

  // Direct calculation: This runs on every render, regardless of whether 'text' changed
  const directLength = (() => {
    console.log('Direct: Calculating text length...');
    return text.length;
  })();

  // useEffect: Side effect runs after every 'text' change
  React.useEffect(() => {
    setSideEffectLength(text.length);
    console.log('useEffect: Side effect ran, updated sideEffectLength:', text.length);
  }, [text]);


  // useRef: Used to focus the input element imperatively
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
      <h2>useRef, useMemo, and useEffect Demo</h2>
      {/* Input field with useRef for focusing */}
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something..."
        style={{ marginRight: '1rem' }}
      />
      <button onClick={focusInput}>Focus Input</button>
      <div style={{ marginTop: '1rem' }}>
        {/* useMemo: Only recalculates when 'text' changes */}
        <strong>Text length (computed with useMemo):</strong> {memoizedLength}
      </div>
      <div>
        {/* Direct calculation: Runs on every render */}
        <strong>Text length (computed directly):</strong> {directLength}
      </div>
      <div>
        {/* useEffect: Side effect updates this value when 'text' changes */}
        <strong>Text length (side effect with useEffect):</strong> {sideEffectLength}
      </div>
      <div style={{ marginTop: '1rem', fontSize: '0.95em', color: '#555' }}>
        {/* Explanations for each approach */}
        <ul>
          <li><b>useMemo</b>: Memoizes the calculation, so it only recalculates when <code>text</code> changes. Check the console to see when it runs.</li>
          <li><b>Direct calculation</b>: Runs on every render, even if <code>text</code> hasn't changed. Check the console to see this.</li>
          <li><b>useEffect</b>: Runs a side effect after <code>text</code> changes, updating state and logging to the console.</li>
        </ul>
      </div>
    </div>
  );
};

export default UseRefUseMemoDemo;
