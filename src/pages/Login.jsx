import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

console.log("something");

const Login = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="flex flex-col p-8 shadow-lg card w-96 bg-base-100 gap-y-4"
      >
        <h4 className="text-3xl font-bold text-center ">Login</h4>

        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />

        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>

        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 capitalize link link-hover link-primary"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
