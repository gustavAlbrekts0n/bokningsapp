import DropdownComponent from "./Dropdown";
import TextInput from "./TextInput";

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
          <TextInput
            selectedUser={selectedUser}
            setAuthentication={setAuthentication}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
