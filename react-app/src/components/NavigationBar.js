import React from "react";
import { Menubar } from "primereact/menubar";

export default function NavigationBar() {
  const items = [
    {
      label: "Hem",
      icon: "pi pi-home",
      command: () => {
        console.log("Clicked Home");
      },
    },
    {
      label: "Om appen",
      icon: "pi pi-info-circle",
      command: () => {
        console.log("Clicked About");
      },
    },
    {
      label: "Logga ut",
      icon: "pi pi-sign-out",
      command: () => {
        console.log("Clicked Sign Out");
        window.location.reload();
      },
    },
    {
      separator: false,
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = <div className="flex align-items-center gap-2">Bertil</div>;

  return (
    <div className="navbar">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
