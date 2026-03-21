import { useState } from "react";
import "./index.css";
import Employee from "./components/Employee.jsx";

function App() {
  const [position, setPosition] = useState("Software Engineer");
  const [employee, setemployee] = useState([
    {
      name: "John Doe",
      position: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Jane Doe",
      position: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Mary King",
      position: "Director",
      image:
        "https://ix-marketing.imgix.net/focalpoint.png?auto=format,compress&w=1446",
    },
    {
      name: "James Smith",
      position: "HR Manager",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  const ShowEmployee = true;

  return (
    <div className="App bg-gray-200 py-10">
      {ShowEmployee ? (
        <>
          {/* <input
            type="text"
            placeholder="Enter Position"
            onChange={(e) => setPosition(e.target.value)}
          /> */}
          <div className="flex flex-wrap justify-center">
            {employee.map(
              (emp, index) => (
                console.log(emp),
                (
                  <Employee
                    key={index}
                    name={emp.name}
                    position={emp.position}
                    image={emp.image}
                  />
                )
              ),
            )}
          </div>
        </>
      ) : (
        <p>Employee component is not shown</p>
      )}
    </div>
  );
}

export default App;
