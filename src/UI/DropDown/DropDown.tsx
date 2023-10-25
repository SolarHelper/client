import React from "react";
import styles from "./styles.module.scss";

type valuesType = {
  value: number;
  label: string;
};

interface DropDownInterface {
  values: valuesType[];
  onChange: (e: any) => void;
}

const DropDown = (props: DropDownInterface) => {
  const { values, onChange } = props;
  return (
    <select onChange={onChange} className={styles.select}>
      {values.map(({ value, label }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default DropDown;
