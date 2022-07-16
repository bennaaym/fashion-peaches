import { createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const signUp = (signUpBody) => {
    console.log(signUpBody);
  };

  const signIn = (signInBody) => {
    console.log(signInBody);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
