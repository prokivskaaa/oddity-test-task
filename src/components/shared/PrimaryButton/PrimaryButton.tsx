import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import classes from './primaryButton.module.scss';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button {...rest} className={classes.button}>
    {children}
  </button>
);

export default PrimaryButton;
