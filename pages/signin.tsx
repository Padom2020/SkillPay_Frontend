import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import AuthLayout from "../components/Auth/AuthLayout";


function login() {
  return (
    <AuthLayout>
      <LoginForm />
      </AuthLayout>
  );
}

export default login;
