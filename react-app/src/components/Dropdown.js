import React from "react";
import { Dropdown } from "primereact/dropdown";

const DropdownComponent = ({ selectedUser, setSelectedUser }) => {
  const users = [
    { name: "101" },
    { name: "102" },
    { name: "111" },
    { name: "112" },
    { name: "201" },
    { name: "202" },
    { name: "211" },
    { name: "212" },
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
