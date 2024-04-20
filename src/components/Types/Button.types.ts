import Button from '../Button/Button';

enum EButton {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}
// To kakie parametri obyazatelnie

switch (type) {
  case EButton.button:
    return <Button type={type} />;
  case EButton.submit:
    return <Button type={type} />;
  case EButton.reset:
    return <Button type={type} />;
  default:
    return <Button type={type} />;
}

function Button1(type: Ebutton) {
  console.log(type);
  return <Button type={type} />;
}

Button1(EButton.button);
Button1(EButton.submit);
Button1(EButton.reset);

enum Etest {
  Button,
  Submit,
  Reset,
}

type User<T = any> = {
  name: string;
  age: number;
  custom: T;
};
