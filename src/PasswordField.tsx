import React, { useState, useCallback } from "react";

interface Props {
  rules?: Array<{ description: string; validator: (target: string) => boolean }>;
}
const PasswordField: React.FC<Props> = props => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [password, setPassword] = useState("");

  const handleInputFocused = useCallback(() => {
    setIsInputFocused(true);
  }, []);

  const handleInputBlurred = useCallback(() => {
    setIsInputFocused(false);
  }, []);

  const handleInputChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  return (
    <div style={styles.root}>
      <input
        style={styles.input}
        onFocus={handleInputFocused}
        onBlur={handleInputBlurred}
        onChange={handleInputChanged}
      />
      {isInputFocused && props.rules && props.rules.length > 0 && (
        <div style={styles.ruleList}>
          {props.rules.map((rule, i) => (
            <div key={i} style={styles.rule}>
              <p style={{ ...styles.ruleIcon, color: rule.validator(password) ? "#00a63f" : "#d3d3d3" }}>✔</p>
              <p>{rule.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    boxSizing: "border-box",
    border: "1px #000 solid",
    width: "100%",
    height: 44,
    padding: "6px 12px",
    fontSize: "1rem",
  },
  ruleList: {
    border: "1px #000 solid",
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  rule: {
    display: "flex",
    flexDirection: "row",
  },
  ruleIcon: {
    marginRight: 5,
  },
};

export default React.memo(PasswordField);
