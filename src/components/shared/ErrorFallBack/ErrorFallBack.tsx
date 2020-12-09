import * as React from "react";
import { FallbackProps } from "react-error-boundary";
import styles from "./ErrorFallBack.css";

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <div className={styles.container} role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
    </div>
  );
};

export default ErrorFallback;
