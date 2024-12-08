import Axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    verify();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // TODO: Implementatie
    } catch (error) {
      setUser(null);

      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    try {
      // TODO: Implementatie
    } catch (error) {
      setUser(null);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const verify = async () => {
    setIsLoading(true);
    try {
      // TODO: Implementatie
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
