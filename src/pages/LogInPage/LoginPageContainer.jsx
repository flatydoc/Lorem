import { useState, useContext } from "react";
import { LogInContext } from "../../core/context/LogInContext";
import { LogInPage } from "./LogInPage";

export const LogInPageContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    pass: "",
  });
  const { login } = useContext(LogInContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = () => {
    if (formData.name.length >= 4 && formData.pass.length >= 4) {
      const { status, message } = login(formData.name, formData.pass);
      if (status === 400) {
        setErrorMessage(message);
      }
    } else setErrorMessage("Wrong name or password. Please, try again");
  };

  return (
    <LogInPage
      formData={formData}
      changeHandler={changeHandler}
      loginHandler={loginHandler}
      errorMessage={errorMessage}
    />
  );
};
