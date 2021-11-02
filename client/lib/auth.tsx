import {
  useState,
  useContext,
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from "@apollo/client";

const contextDefaults: AuthProps = {
  signIn: ({ username, password }: CredentialsProp) => new Promise(() => {}),
  signOut: () => {},
};

const AuthContext = createContext<AuthProps>(contextDefaults);

type AuthProps = {
  setAuthToken?: Dispatch<SetStateAction<null>>;
  isSignedIn?: () => boolean;
  signIn: ({ username, password }: CredentialsProp) => Promise<void>;
  signOut: () => void;
};

type SignInFunction = ({
  username,
  password,
}: CredentialsProp) => Promise<void>;

type SignOutFunction = () => void;

type Props = {
  children: ReactNode;
};

type CredentialsProp = {
  username: string;
  password: string;
};

export function AuthProvider({ children }: Props) {
  const auth = useProvideAuth();
  const client = auth.createApolloClient();

  return (
    <AuthContext.Provider value={auth}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null);

  const isSignedIn = () => {
    if (authToken) {
      return true;
    } else {
      return false;
    }
  };

  const getAuthHeaders = () => {
    if (!authToken) return null;

    return {
      authorization: `Bearer ${authToken}`,
    };
  };

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: "http://localhost:4000",
      headers: getAuthHeaders(),
    });

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  };

  const signIn: SignInFunction = async ({
    username,
    password,
  }: CredentialsProp) => {
    const client = createApolloClient();
    const LoginMutation = gql`
      mutation LoginUserMutation($input: LoginUserInput!) {
        loginUser(input: $input) {
          username
          password
          token
        }
      }
    `;

    const result = await client.mutate({
      mutation: LoginMutation,
      variables: {
        input: {
          username: username,
          password: password,
          token: "",
        },
      },
    });

    console.log(result);

    if (result?.data?.login?.token) {
      setAuthToken(result.data.login.token);
    }
  };

  const signOut: SignOutFunction = () => {
    setAuthToken(null);
  };

  return {
    setAuthToken,
    isSignedIn,
    signIn,
    signOut,
    createApolloClient,
  };
}
