import { useMutation } from '@apollo/client';
import { useState, createContext, useContext, useEffect } from 'react';
import { SIGN_IN, SIGN_UP } from '../apollo/mutations';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [signUpMutation, signUpResponse] = useMutation(SIGN_UP);
  const [SignInMutation, signInResponse] = useMutation(SIGN_IN);
  const [isSignUp, setIsSignUp] = useState(true);

  const signUp = (signUpBody) => {
    setIsSignUp((prev) => !prev);
    signUpMutation({ variables: signUpBody });
  };

  const signIn = (signInBody) => {
    setIsSignUp((prev) => !prev);
    SignInMutation({ variables: signInBody });
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        auth: isSignUp
          ? {
              ...signUpResponse?.data?.signUp,
            }
          : {
              ...signInResponse?.data?.signIn,
            },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
