import React, { useEffect, useState } from "react";
import styles from "./input.module.scss";
export const Input = ({
  type,
  name,
  onChange,
  onBlur,
  value,
}: {
  type: string;
  name: string;
  onChange: any;
  onBlur?: any;
  value: string;
}) => {
  const [label, setLabel] = useState(styles.null);
  const activateLabel = () => {
    setLabel(styles.label);
  };
  useEffect(() => {
    if (value.length > 0) {
      setLabel(styles.label);
    }
  }, []);
  return (
    <>
      <div className={styles.input}>
        <input
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur && onBlur}
          value={value}
          onClick={() => activateLabel()}
        />
        <label onClick={() => activateLabel()} className={label}>
          {name}
        </label>
      </div>
    </>
  );
};
