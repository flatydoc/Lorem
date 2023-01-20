import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LogInContext } from "./core/context/LogInContext";
import { LogInPageContainer } from "./pages/LogInPage/LoginPageContainer";
import { MainPage } from "./pages/MainPage/MainPage";
import { AuthService } from "./core/services/auth.service";

import styles from "./App.module.scss";

export const App = () => {
  const { login, logout, getCurrentUser, isLogin } = AuthService;

  return (
    <LogInContext.Provider value={{ isLogin, login, logout, getCurrentUser }}>
      <BrowserRouter>
        <div className={styles.app}>
          <Routes>
            <Route
              path="/"
              element={
                !isLogin ? <Navigate replace to="/login" /> : <MainPage />
              }
            />
            <Route
              path="/login"
              element={
                isLogin ? <Navigate replace to="/" /> : <LogInPageContainer />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </LogInContext.Provider>
  );
};
