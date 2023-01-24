const login = (name) => {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      userName: name,
    })
  );
};

const logout = () => {
  localStorage.removeItem("userData");
};

const getCurrentUser = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return userData.userName;
};

export const AuthService = {
  login,
  logout,
  getCurrentUser,
};
