import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// ...props spreads all the props to the component

export function Button(props: ButtonProps) {
  return <button className='button' {...props} />;
}
