import { useState } from "react";
import GoogleButton from "../google-button/GoogleButton";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with email:", email, "and password:", password);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Logging in with Google");
  };

  return (
    <div>
      <h2>Login User</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div>
          <GoogleButton onClick={handleGoogleLogin}>
            Login with Google
          </GoogleButton>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
