import DropdownComponent from "./Dropdown";
import InputPassword from "./InputPassword";

const Login = ({ selectedUser, setSelectedUser, setAuthentication }) => {
  return (
    <div className="app">
      <div className="login">
        <h2>Logga in</h2>
        <div className="login-body">
          <DropdownComponent
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          <InputPassword
            selectedUser={selectedUser}
            setAuthentication={setAuthentication}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
