import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function DropdownComponent() {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = [
    { name: "Anders Alvarsson" },
    { name: "Benny Burgersson" },
    { name: "Camilla Carlsdotter" },
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
}
