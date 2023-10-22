import style from "@/shared/ui/toggleLoginAndReg/ToggleLoginAndReg.module.scss";
import Button from "../buttons/Button";
const ToggleLoginAndReg = () => {
  return (
    <div className={style.Container}>
      <button className={style.Login}>Войти</button>
      <div className={style.Reg}>Зарегистрироваться</div>
    </div>
  );
};

export default ToggleLoginAndReg;
