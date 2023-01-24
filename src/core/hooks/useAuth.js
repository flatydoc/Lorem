import { useLocalStorage } from "./useLocalStorage";
import { AuthService } from "../services/auth.service";
import { defaultUser } from "../constants/defaultUser";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", false);
  const { login, logout } = AuthService;

  const makeLogin = (name, pass) => {
    if (name === defaultUser.USER_NAME && pass === defaultUser.PASS) {
      setIsLogin(true);
      login(name);
      return {
        status: 200,
      };
    } else
      return {
        status: 400,
        message: "Wrong name or password. Please, try again",
      };
  };

  const makeLogout = () => {
    setIsLogin(false);
    logout();
  };

  return {
    makeLogin,
    makeLogout,
    isLogin,
  };
};
