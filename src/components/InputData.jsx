import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWifiPassword } from "react-icons/md";

function InputData() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "rekha@gmail.com" && password === "12345") {
      setError("");
      alert("Login Successful!");
    } else {
      setError("Incorrect email or password,please try again");
    }
  };

  return (
    <>
      <div>
        <img src="../images/back3.jpg" className="userImg" />
        <div className="first">
          <FaRegUser />
          <input
            type="text"
            className="form-control"
            style={{
              backgroundColor: "lightblue",
              border: "1px solid #626297",
              marginTop: "14px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />{" "}
        </div>

        <div className="second">
          <MdOutlineWifiPassword />
          <input
            style={{
              backgroundColor: "lightblue",
              border: "1px solid #626297",
            }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <div className="mybutton">
          <button className="btn btn-success" onClick={handleLogin}>
            Login
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default InputData;
