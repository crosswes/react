// * Components
import RegistrationForm from "../../components/Form/Form";

// * Styles
import { form } from "./FormPage.module.css";

const FormPage = () => {
  return (
    <div className={form}>
      <RegistrationForm />
    </div>
  );
};

export default FormPage;
