import React from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import SignUp from "../components/Auth/SignUp";


function login() {
  return (
    <AuthLayout>
      <SignUp />
      </AuthLayout>
  );
}

export default login;
