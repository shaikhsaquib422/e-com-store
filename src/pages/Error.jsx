import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className="grid bg-red-200 min-h-[100vh] place-items-center px-8 ">
        <div className="text-center">
          <p className="font-semibold text-9xl text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7 ">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10 ">
            <Link to="/" className="btn btn-primary">
              go to home page
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-4xl font-bold text-center">there was an error... </h4>
    </main>
  );
};

export default Error;
