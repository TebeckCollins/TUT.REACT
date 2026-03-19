import Employee from "./components/Employee.jsx";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState("Software Engineer");
  const ShowEmployee = true;

  return (
    <div className="App">
      {ShowEmployee ? (
        <>
          <span>Enter your Position: </span>
          <input
            type="text"
            placeholder="Enter Position"
            onChange={(e) => setPosition(e.target.value)}
          />
          <Employee name="John Doe" position={position} />
        </>
      ) : (
        <p>Employee component is not shown</p>
      )}
    </div>
  );
}

export default App;
