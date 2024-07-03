import DropdownComponent from "./Dropdown";
import TextInput from "./TextInput";

const Login = ({ selectedUser, setSelectedUser, setAuthentication }) => {
  return (
    <div className="app">
      <div className="login">
        <h2>Logga in</h2>
        <DropdownComponent
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <TextInput setAuthentication={setAuthentication} />
      </div>
    </div>
  );
};

export default Login;
