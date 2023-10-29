import Input from "@/shared/ui/Inputs/Input";
import Button from "@/shared/ui/Buttons/Button";
import Counter from "@/shared/ui/Counter/Counter";
const Calculator = () => {
  return (
    <div>
      <Input placeholder="имя">кВт</Input>
      <Counter NumberOfProducts={7}></Counter>
      <Button>войти</Button>
    </div>
  );
};

export default Calculator;
