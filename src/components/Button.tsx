import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

// ...props spreads all the props to the component

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} />
  );
}
