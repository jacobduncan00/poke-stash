import { SyntheticEvent, useState } from "react";
import { useAuth } from "../../lib/auth";
import { gql, useMutation } from "@apollo/client";
import * as EmailValidator from "email-validator";
import Modal from "../../components/Modal";

const SIGN_UP = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      username
      email
      password
      token
    }
  }
`;

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [buttonMessage, setButtonMessage] = useState("");
  const [open, setOpen] = useState(false);

  const { signIn } = useAuth();
  const [createUser, { data, loading, error }] = useMutation(SIGN_UP);

  const setIsOpen = (openState: boolean) => {
    setOpen(openState);
  };

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (EmailValidator.validate(email) === false) {
      setMessageTitle("Invalid Credentials");
      setMessage(
        "The email you entered is not a valid email address, try again."
      );
      setOpen(true);
      setButtonMessage("Close");
      return;
    } else {
      console.log("HERE");
      createUser({
        variables: {
          input: {
            username: username,
            email: email,
            password: password,
            token: "",
          },
        },
      });
      setOpen(true);
      setMessageTitle("Account Created");
      setMessage("Signup successful, click below to go to your dashboard");
      setButtonMessage("Dashboard");

      // *** Need to do this in the modal ***
      //signIn({ username, password });

      return;
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
          autoComplete="off"
          onSubmit={onSubmit}
          className="w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3"
        >
          <div className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto">
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border-2 border-secondary focus:border-primary valid:border-primary rounded w-full py-2 px-3 text-grey-darker outline-none"
                required
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border-2 border-secondary focus:border-primary rounded w-full py-2 px-3 text-grey-darker outline-none"
                required
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border-2 border-secondary focus:border-primary rounded w-full py-2 px-3 text-grey-darker mb-3 outline-none"
                required
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-primaryOffset hover:bg-blue-dark text-secondary font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign Up
              </button>
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

export default SignUp;
