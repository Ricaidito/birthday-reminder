import BirthdayPanel from "./components/birthday-panel/BirthdayPanel";
import RegisterUser from "./components/auth/register-user/RegisterUser";
import LoginUser from "./components/auth/login-user/LoginUser";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <BirthdayPanel /> */}
      <RegisterUser />
      <br />
      <hr />
      <br />
      <LoginUser />
    </div>
  );
};

export default App;
