import React, { SyntheticEvent, useState } from "react";
import { useAuth } from "../../lib/auth";
import Link from "next/link";
import Router from "next/router";
import Modal from "../../components/Modal";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [messageTitle, setMessageTitle] = useState("");
  const [message, setMessage] = useState("");
  const [buttonMessage, setButtonMessage] = useState("");
  const [open, setOpen] = useState(false);

  const { signIn, isSignedIn } = useAuth();

  const setIsOpen = (openState: boolean) => {
    setOpen(openState);
  };

  async function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const result = await signIn({ username, password });
    if (result != "No User Found" && result != "Wrong Password") {
      Router.push("/dashboard");
    } else {
      setOpen(true);
      setMessageTitle("Invalid Credentials");
      setMessage("Either your username of password is wrong. Try again");
      setButtonMessage("Close");
    }
  }

  return (
    <div>
      <div
        className={
          open
            ? "filter blur-sm bg-primaryOffset h-screen flex items-center justify-center w-full"
            : "bg-primary h-screen flex items-center justify-center w-full"
        }
      >
        <form
          onSubmit={onSubmit}
          className="w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3"
        >
          <div className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto">
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border-2 border-secondary hover:border-primary rounded w-full py-2 px-3 text-grey-darker outline-none"
                id="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border-2 border-secondary hover:border-primary rounded w-full py-2 px-3 text-grey-darker mb-3 outline-none"
                id="password"
                type="password"
                value={password}
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-primaryOffset text-secondary font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign In
              </button>
              <Link href="/forgot">
                <div className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                  Forgot Password?
                </div>
              </Link>
            </div>
          </div>
        </form>
        <Modal
          open={open}
          message={message}
          messageTitle={messageTitle}
          buttonMessage={buttonMessage}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default SignIn;
