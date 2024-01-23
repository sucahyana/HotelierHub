
import { useState } from "react";
import { login } from "../services/AuthService";
const Home =() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(username, password);
      setError('success')
      console.log(response);
    } catch (error) {
      setError("Username atau password salah"); 
      console.log(error);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>} {/* Tampilkan error message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Home;