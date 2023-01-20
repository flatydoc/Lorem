import { defaultUser } from "../constants/defaultUser";

const login = (name, pass) => {
  if (name === defaultUser.USER_NAME && pass === defaultUser.PASS) {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userName: name,
      })
    );
    localStorage.setItem("isLogin", true);
    return {
      status: 200,
    };
  } else
    return {
      status: 400,
      message: "Wrong name or password. Please, try again",
    };
};

const logout = () => {
  localStorage.removeItem("userData");
  localStorage.setItem("isLogin", false);
};

const getCurrentUser = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return userData.userName;
};

const isLogin = JSON.parse(localStorage.getItem("isLogin"));

export const AuthService = {
  login,
  logout,
  getCurrentUser,
  isLogin,
};
