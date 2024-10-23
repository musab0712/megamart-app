import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({userName: "",
    email: "",
    password: "",
  });

  function onSubmit(){

  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/signin"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
    formControls={registerFormControls}
    buttonText={"Sign Up"}
    formData={formData}
    setFormData={setFormData}
    onSubmit={onSubmit}
  />
    </div>
  );
}
