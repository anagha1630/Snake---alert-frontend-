import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Ensure this CSS file exists

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation to check if the password is a 4-digit number
    if (password.length === 4 && /^[0-9]{4}$/.test(password)) {
      // Simulating login without an API call
      navigate("/home"); // Redirect to Home
    } else {
      alert("Please enter a valid 4-digit password.");
    }
  };

  return (
    <div className="login-container">
      <h2>📲 Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter 4-digit Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          pattern="\d{4}" // Ensures password is a 4-digit number
          title="Password must be a 4-digit number" // Tooltip message on invalid input
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
