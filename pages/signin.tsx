import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import AuthLayout from "../components/Auth/AuthLayout";


function signin() {
  return (
    <AuthLayout>
      <LoginForm />
      </AuthLayout>
  );
}

export default signin;
