import './index.css'
import Employee from "./components/Employee.jsx";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState("Software Engineer");
  const ShowEmployee = true;

  return (
    <div className="App bg-gray-200 pb-10 pt-10">
      {ShowEmployee ? (
        <>
          <span>Enter your Position: </span>
          <input
            type="text"
            placeholder="Enter Position"
            onChange={(e) => setPosition(e.target.value)}
          />
          <div className="flex flex-wrap">
            <Employee name="John Doe" position={position} />
            <Employee name="John Doe" position={position} />
            <Employee name="John Doe" position={position} />
            <Employee name="John Doe" position={position} />
          </div>
        </>
      ) : (
        <p>Employee component is not shown</p>
      )}
    </div>
  );
}

export default App;
