import Counter from "@/shared/ui/counter/Counter";
import UserIcon from "/public/Icon/userIcon.svg";
import Button from "@/shared/ui/buttons/Button";
import RaitingForm from "@/shared/ui/RaitingForm/RaitingForm";
import Input from "@/shared/ui/inputs/Input";
import CardInCart from "@/widgets/CardInCart/CardInCart";
import CardInstallers from "@/widgets/CardInstallers/CardInstallers";

const Calculator = () => {
  return (
    <div>
      <Button>
        qwdqwd <UserIcon />
      </Button>
      <RaitingForm productRaiting={1}></RaitingForm>
      <Input placeholder="фио" label="label">
        кВт
      </Input>
      <Counter NumberOfProducts={1}></Counter>
      <CardInCart
        NumberOfProducts={1}
        productName="edfef"
        productPrice={1}
      ></CardInCart>
      <CardInstallers
        cityInstallers="qdqwd"
        numberOfOrders={1}
        nuberFeedback={3}
      ></CardInstallers>
    </div>
  );
};

export default Calculator;
