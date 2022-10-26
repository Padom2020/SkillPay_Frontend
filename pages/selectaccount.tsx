import React from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import SelectAccountType from "../components/Auth/SelectAccountType";


function login() {
  return (
    <AuthLayout>
      <SelectAccountType />
      </AuthLayout>
  );
}

export default login;
