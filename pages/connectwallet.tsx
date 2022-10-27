import React from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import ConnectWallet from "../components/Auth/ConnectWallet";


function login() {
  return (
    <AuthLayout>
        <ConnectWallet/>
      </AuthLayout>
  );
}

export default login;
