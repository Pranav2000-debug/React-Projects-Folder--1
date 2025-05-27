import { useState, useEffect, useCallback, useRef } from "react";
/**
useState-
Manage component state — when state updates, React re-renders the component, applies changes to the Virtual DOM (VD), then updates the Real DOM (RD).

useCallback-
Memoizes a function between renders to avoid unnecessary re-creation, useful for performance optimization especially when passing callbacks to child components.

useEffect-
Runs side effects (e.g., API calls, subscriptions, manual DOM manipulations) after render. It runs on mount (initial render) and whenever dependencies change.

useRef-
Holds mutable values or DOM element references that persist across renders without causing re-renders when updated.
 */

function App() {
  const [length, setLength] = useState(8); // length of the slider input
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false); // special characters, not letters
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // Caches the function defination between component renders as long as the dependencies do not change too frequently. (See useEffect)
  // generatePassword itself becomes the dependency you watch
  const generatePassword = useCallback(() => {
    let pass = ""; // this variable will be used to update the state of password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for(let i = 1; i < length; i++) {
      // generating a random number based on the string length
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
    // dependecies array
  }, [length, numberAllowed, charAllowed]); //  Only include a state variable in a dependency array if you directly read from or react to it inside the effect — not if you're just updating it. 

  // As soon as a dependency changes, call some function
  useEffect(() => {
    generatePassword();
  }, [generatePassword]) //instead of [length, numberAllowed, charAllowed] just include generatePassword since useCallback ensures that generatePassword is only redefined if one of the dependencies in it changes. We are then indirectly watching the values in generatePassword, and then useEffect depends on the generatePassword function change and React tracks the dependecies in useCallback.

  // COPY TO CLIPBOARD
  function copyPassToClipboard() {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-6 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center mb-3">Password Generator</h1>
      <div className="flex  shadow rounded-lg overflow-clip">
        <input className="outline-none w-full py-1 px-3 text-sm" type="text" value={password} placeholder="Password" readOnly ref={passwordRef} />
        <button className="outline-none bg-blue-700 text-white px-3 py-1" onClick={copyPassToClipboard}>copy</button>
      </div>
      <div className="flex text-sm gap-x-2 mt-2">
        <div className="flex items-center space-x-2">
          {/* Uniderctional flow from state to UI thru setState methods */}
          <input className="cursor-pointer" type="range" min={8} max={20} value={length} onChange={(e) => setLength(e.target.value)} />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
