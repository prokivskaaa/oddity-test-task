import classes from './button.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button className={classes.button} {...rest}>
    {children}
  </button>
);

export default Button;
