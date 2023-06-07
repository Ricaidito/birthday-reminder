import { useState } from "react";
import GoogleButton from "../google-button/GoogleButton";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Handle registration logic here
    console.log(
      "Registering user with email:",
      email,
      "and password:",
      password
    );
  };

  const handleGoogleRegister = () => {
    // Handle Google registration logic here
    console.log("Registering user with Google");
  };

  return (
    <div>
      <h2>Create an account</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </div>
        <div>
          <GoogleButton onClick={handleGoogleRegister}>
            Register with Google
          </GoogleButton>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
