import React from "react";

import PasswordField from "./PasswordField";
import validator from "./validator";

const PASSWORD_RULES = [
  { validator: validator.isNotStartWithSpace, description: "Cannot start with space" },
  { validator: validator.isNotEndWithSpace, description: "Cannot end with space" },
  { validator: validator.hasLowerLetter, description: "Include a lower-case letter" },
  { validator: validator.hasUpperLetter, description: "Include an upper-case letter" },
  { validator: validator.hasNumber, description: "Include a number" },
  { validator: validator.isLengthBetween(9, 50), description: "Be 9-50 characters long" },
];

const App: React.FC = () => {
  return (
    <div style={styles.root}>
      <div style={styles.form}>
        <p>Password</p>
        <PasswordField rules={PASSWORD_RULES} />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 400,
    padding: 50,
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

export default App;
