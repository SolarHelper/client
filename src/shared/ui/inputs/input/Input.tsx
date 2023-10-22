import style from "@/shared/ui/inputs/input/Input.module.scss";

import Image from "next/image";
interface Iinput {
  placeholder: string;
  label?: string;
  icon?: string;
  unitMeasurement?: string;
}

const Input = ({ placeholder, label, icon = "", unitMeasurement }: Iinput) => {
  return (
    <div className={style.Container}>
      <label className={style.Label} htmlFor={label}>
        {label}
      </label>
      <div className={style.InputContainer}>
        <input className={style.Input} type="text" placeholder={placeholder} />
        {unitMeasurement ? (
          <span>{unitMeasurement}</span>
        ) : (
          <Image src={icon} width={14} height={14} alt={""} />
        )}
      </div>
    </div>
  );
};

export default Input;
