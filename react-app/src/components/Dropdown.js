import React from "react";
import { Dropdown } from "primereact/dropdown";

const DropdownComponent = ({ selectedUser, setSelectedUser }) => {
  const users = [
    { name: "Adam Adamsson" },
    { name: "Bertil Bertilsson" },
    { name: "Calle Callesson" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.value)}
        options={users}
        optionLabel="name"
        placeholder="Välj användare"
        className="w-full md:w-14rem"
      />
    </div>
  );
};

export default DropdownComponent;
