import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputData from "./components/InputData";
import { MdWidthFull } from "react-icons/md";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container" style={{ marginLeft: "100%", width: "150%" }}>
        <InputData />
      </div>
    </>
  );
}

export default App;
