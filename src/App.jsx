import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { LogInContext } from "./core/context/LogInContext";
import { LogInPageContainer } from "./views/LogInPage/LoginPageContainer";
import { Layout } from "./views/Layout/Layout";
import { AuthService } from "./core/services/auth.service";
import { useAuth } from "./core/hooks/useAuth";

import styles from "./App.module.scss";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { ImagePageContainer } from "./components/pages/ImagePage/ImagePageContainer";

export const App = () => {
  const { getCurrentUser } = AuthService;
  const { makeLogin, makeLogout, isLogin } = useAuth();

  return (
    <LogInContext.Provider
      value={{ isLogin, makeLogin, makeLogout, getCurrentUser }}
    >
      <HashRouter>
        <div className={styles.app}>
          <Routes>
            <Route
              path="/"
              element={!isLogin ? <Navigate replace to="/login" /> : <Layout />}
            >
              <Route index element={<MainPage />} />
              <Route path=":id" element={<ImagePageContainer />} />
            </Route>
            <Route
              path="/login"
              element={
                isLogin ? <Navigate replace to="/" /> : <LogInPageContainer />
              }
            />
          </Routes>
        </div>
      </HashRouter>
    </LogInContext.Provider>
  );
};
