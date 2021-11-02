import { SyntheticEvent, useState } from "react";
import { useAuth } from "../../lib/auth";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    signIn({ username, password });
  }

  return (
    <div>
      <div className="bg-primary h-screen flex items-center justify-center w-full">
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
                className="bg-primary hover:bg-blue-dark text-secondary font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                href="/forgot"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
