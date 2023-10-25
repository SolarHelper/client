"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  avialableCityes,
  solarPanelTypes,
} from "@/assets/constants/installersHelpers";
import DropDown from "@/UI/DropDown/DropDown";

interface initValuesInterface {
  city: string | null;
  panelTypes: [string] | null;
  onlyCheckedCompany: boolean;
}

const FilterInstallers = (initialValues: initValuesInterface) => {
  const [cityValue, setCityValue] = useState(initialValues.city);
  const [panelType, setPanelType] = useState(initialValues.panelTypes);
  const [onlyCheckedCompany, setOnlyCheckedCompany] = useState(
    initialValues.onlyCheckedCompany
  );
  const toggleCheckBox = () => setOnlyCheckedCompany(!onlyCheckedCompany);
  useEffect(() => {
    // applying filter settings
  }, [cityValue, panelType, onlyCheckedCompany]);
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filter}>
        <p>Выберите регион: </p>
        <DropDown values={avialableCityes} onChange={setCityValue} />
      </div>
      <div className={styles.filter}>
        <p>Тип солнечных станций: </p>
        <DropDown values={solarPanelTypes} onChange={setPanelType} />
      </div>
      <div className={styles.filter}>
        <p>Показать только проверенные компании: </p>
        <input
          type="checkbox"
          onChange={toggleCheckBox}
          checked={onlyCheckedCompany}
          className={styles.checkbox}
        />
      </div>
    </div>
  );
};

export default FilterInstallers;
