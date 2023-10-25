import { InstallerCardContainer } from "@/Containers/InstallerCardContainer";
import FilterInstallers from "@/features/FilterInstallers/FilterInstallers";

const Installers = () => {
  const initialValues = {
    city: null,
    panelTypes: null,
    onlyCheckedCompany: false,
  };
  return (
    <>
      <FilterInstallers {...initialValues} />
      <InstallerCardContainer />
    </>
  );
};

export default Installers;
