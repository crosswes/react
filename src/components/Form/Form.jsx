// * Base
import { Formik } from "formik";
import cn from "classnames";

// * Components
import Input from "../Input/Input";

// * Styles
import styles from "./Form.module.css";
import privacyMessage from "./privacyMessage";
import Button from "../Button/Button";

// *  Початкові значення
const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  gendre: "",
  email: "",
};

// * REGULAR EXPRESSIONS
const EMAIL_REG_EXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const USERNAME_MIN_LENGTH = 3;
const PASSWORD_MIN_LENGTH = 8;

// * SUBMIT
const onSubmit = (values, { setSubmitting, resetForm }) => {
  console.log(values);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  }, 400);
};

// * FORM VALIDATION
const validators = ({
  email,
  username,
  password,
  firstName,
  lastName,
  city,
}) => {
  const errors = {};

  // * First name validation
  if (!firstName) {
    errors.firstName = "First name is required";
  } else if (firstName.length < USERNAME_MIN_LENGTH) {
    errors.firstName = `First name must be at least ${USERNAME_MIN_LENGTH} characters long`;
  }

  // * Last name validation
  if (!lastName) {
    errors.lastName = "Last name is required";
  } else if (lastName.length < USERNAME_MIN_LENGTH) {
    errors.lastName = `Last name must be at least ${USERNAME_MIN_LENGTH} characters long`;
  }

  // * Email validation
  if (!email) {
    errors.email = "Email is required";
  } else if (!EMAIL_REG_EXP.test(email)) {
    errors.email = "Invalid email address";
  }

  // * Username validation
  if (!username) {
    errors.username = "Username is required";
  } else if (username.length < USERNAME_MIN_LENGTH) {
    errors.username = `Username must be at least ${USERNAME_MIN_LENGTH} characters long`;
  }

  // * Password validation
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < PASSWORD_MIN_LENGTH) {
    errors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`;
  }

  // * City validation
  if (!city) {
    errors.city = "City is required";
  }
  return errors;
};

const RegistrationForm = () => {
  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          isSubmitting,
          handleBlur,
          touched,
          errors,
          values,
        }) => {
          return (
            <form
              className={styles.form}
              onSubmit={(e) => {
                // * Prevent the default form submission behaviour(instant errors on submit)
                e.preventDefault();
                handleSubmit();
              }}
            >
              <h3 className={cn([styles.title])}>Create an account</h3>
              {/* Full name */}
              <div className={cn([styles.fullName])}>
                {/* First name */}
                <label className={cn([styles.firstName])}>
                  <div className={cn([styles.inputName])}>First name</div>
                  <Input
                    error={
                      errors.firstName && touched.firstName && errors.firstName
                    }
                    placeholder='Type your first name'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // title='First name'
                    name='firstName'
                  />
                </label>
                {/* Last name */}
                <label className={cn([styles.lastName])}>
                  <div className={cn([styles.inputName])}>Last name</div>
                  <Input
                    error={
                      errors.lastName && touched.lastName && errors.lastName
                    }
                    placeholder='Type your last name'
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // title='Last name'
                    name='lastName'
                  />
                </label>
              </div>
              {/* Email */}
              <label className={cn([styles.email])}>
                <div className={cn([styles.inputName])}>Email</div>
                <Input
                  error={
                    errors.email && touched.email
                      ? errors.email
                      : privacyMessage
                  }
                  placeholder='Type your email'
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  // title='Email'
                  type='email'
                  name='email'
                />
              </label>
              <div className={cn([styles.genders])}>
                {/* Gendre */}
                <label className={cn([styles.gender])}>
                  <div>Male</div>
                  <Input
                    className={cn([styles.radio])}
                    onChange={handleChange}
                    value='male'
                    type='radio'
                    name='gender'
                  />
                </label>
                <label className={cn([styles.gender])}>
                  <div>Female</div>
                  <Input
                    className={cn([styles.radio])}
                    onChange={handleChange}
                    value='female'
                    name='gender'
                    type='radio'
                  />
                </label>
              </div>
              <div className={cn([styles.location])}>
                {/* Country */}
                <label className={cn([styles.country])}>
                  <div className={cn([styles.inputName])}>Country</div>
                  <select
                    className={cn([styles.countrySelect])}
                    name='country'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                  >
                    <option value='null'>Select</option>
                    <option value='au'>Australia</option>
                    <option value='br'>Brazil</option>
                    <option value='ca'>Canada</option>
                    <option value='fr'>France</option>
                    <option value='de'>Germany</option>
                    <option value='it'>Italy</option>
                    <option value='jp'>Japan</option>
                    <option value='ua'>Ukraine</option>
                    <option value='uk'>United Kingdom</option>
                    <option value='us'>United States</option>
                    <option value='ru' disabled>
                      Russia
                    </option>
                    <option value='es'>Spain</option>
                  </select>
                </label>
                {/* City */}
                <label className={cn([styles.city])}>
                  <div className={cn([styles.inputName])}>City</div>
                  <Input
                    className={cn([styles.cityInput])}
                    error={errors.city && touched.city && errors.city}
                    placeholder='Type your city'
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='city'
                  />
                </label>
              </div>
              <Button
                className='register'
                text='Sign up'
                disabled={isSubmitting}
                type='submit'
              />
              {/* Terms of use and privacy policy */}
              <div className={cn([styles.terms])}>
                <div>
                  By clicking 'Sign Up' button, you confirm that you accept our{" "}
                </div>
                <a className={cn([styles.blue])} href='#'>
                  Terms of Use
                </a>
                <span className={cn([styles.termsDevider])}>and</span>
                <a className={cn([styles.blue])} href='#'>
                  Privacy Policy
                </a>
              </div>
              {/* Divider */}
              <div className={cn([styles.divider])}></div>
              <div className={cn([styles.log])}>
                Have an account?
                <a className={cn([styles.blue])} href='#'>
                  Log in
                </a>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegistrationForm;
