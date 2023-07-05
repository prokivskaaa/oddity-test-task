import classes from './input.module.scss';
import SearchIcon from '../../icons/SearchIcon';
import MircophoneIcon from '../../icons/MircophoneIcon';
import CameraIcon from '../../icons/CameraIcon';
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import useDeviceMode, { DeviceMode } from '../../hooks/useDeviceMode';

import KeyboardImage from './typing.png';

type InputProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { value: string };

const Input: React.FC<InputProps> = ({ value, ...rest }) => {
  const mode = useDeviceMode();

  const isDesktop = mode === DeviceMode.Desktop;

  return (
    <div className={classes.container}>
      <div className={classes.searching_container}>
        <SearchIcon className={classes.searchIcon} />
      </div>

      <textarea className={classes.input} {...rest}>
        {value}
      </textarea>

      <div className={classes.icons_container}>
        {isDesktop && (
          <div className={classes.typing_container}>
            <img alt="transliteration" src={KeyboardImage} />
          </div>
        )}

        <div className={classes.icon_container}>
          <MircophoneIcon className={classes.icon} />
        </div>

        <div className={classes.icon_container}>
          <CameraIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default Input;
