import { NextPage } from "next";
import { useState } from "react";

function classnames(...classnames: string[]) {
  return classnames.join(" ");
}

const Login: NextPage = () => {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div className="mt-5 mx-5 py-10 px-4 bg-gray-100 md:bg-yellow-100 lg:bg-pink-100 rounded-lg shadow-md">
      <div className="flex flex-col justify-center items-center">
        <svg
          className="mb-5"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 320 320"
        >
          <circle cx="160" cy="160" r="156.532" fill="#231815" />
          <circle cx="160" cy="160" r="52.307" fill="#00B098" />
        </svg>
        <h3 className="text-3xl font-bold text-center">eureco system</h3>
      </div>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col items-center w-96">
          <h5 className="text-sm text-gray-500 font-medium">Enter using:</h5>
          <div className="grid border-b w-full mt-8 grid-cols-2">
            <button
              className={classnames(
                "pb-4 font-medium text-sm border-b-2",
                method === "email"
                  ? "border-emerald-500 text-emerald-400"
                  : "boreder-transparent hover:text-gray-400 text-gray-500"
              )}
              onClick={onEmailClick}
            >
              Email
            </button>
            <button
              className={classnames(
                "pb-4 font-medium text-sm border-b-2",
                method === "phone"
                  ? "border-emerald-500 text-emerald-400"
                  : "boreder-transparent hover:text-gray-400 text-gray-500"
              )}
              onClick={onPhoneClick}
            >
              Phone
            </button>
          </div>
        </div>
        <form className="flex flex-col mt-8 w-96">
          <div className="mt-1">
            {method === "email" ? (
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="appearance-none w-full px-3 py-2 mb-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="appearance-none w-full px-3 py-2 mb-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
            ) : null}
            {method === "phone" ? (
              <div className="flex rounded-md shadow-sm">
                <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-500 select-none text-sm">
                  +81
                </span>
                <input
                  type="number"
                  className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
            ) : null}
          </div>
          <button className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none">
            {method === "email" ? "Login" : null}
            {method === "phone" ? "Get one time-time password" : null}
          </button>
        </form>
      </div>
      <div className="mt-12">
        <div className="relative">
          <div className="absolute w-full border-t border-gray-300" />
          <div className="relative -top-3 text-center">
            <span className="bg-gray-100 px-2 text-sm text-gray-500">
              By SAKURAINTERNET
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
