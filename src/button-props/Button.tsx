import { FC } from "react";

type ButtonProps = {};

const Button: FC<ButtonProps> = ({ ...props }) => {
  return <button {...props} />;
};

export default Button;
