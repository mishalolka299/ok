import React from "react";
import UsersTableContainer from "./components/UsersTableContainer";

const UsersPage = () => {
  return (
    <div className="container my-3">
      <h1>Users</h1>
      <UsersTableContainer />
    </div>
  );
};

export default UsersPage;
