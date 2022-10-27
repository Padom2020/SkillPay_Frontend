import React from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import ConnectWallet from "../components/Auth/ConnectWallet";


function connectwallet() {
  return (
    <AuthLayout>
        <ConnectWallet/>
      </AuthLayout>
  );
}

export default connectwallet;
