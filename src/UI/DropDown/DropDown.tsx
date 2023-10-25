import React from "react";
import styles from "./styles.module.scss";

interface DropDownItem {
  value: number;
  label: string;
}

interface DropDownProps {
  values: DropDownItem[];
  onChange: (e: any) => void;
}

const DropDown = (props: DropDownProps) => {
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
