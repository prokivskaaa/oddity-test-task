import Button from '../shared/Button';
import GoogleIcon from '../../icons/GoogleIcon';
import Input from '../Input';
import classes from './mainSection.module.scss';
import { ChangeEventHandler, useState } from 'react';
import OddityIcon from '../../icons/OddityIcon';
import cn from 'classnames';
import useDeviceMode, { DeviceMode } from '../../hooks/useDeviceMode';

const MainSection = () => {
  const [inputValue, setInputValue] = useState('');

  const [isLuckyClicked, setIsLuckyClicked] = useState(false);

  const mode = useDeviceMode();
  const isDesktop = mode === DeviceMode.Desktop;

  const handleLuckyClick = (): void => {
    setIsLuckyClicked((prevState) => !prevState);
  };

  const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ): void => {
    setInputValue(event.target.value);
  };

  const mainIcon = isLuckyClicked ? (
    <OddityIcon className={cn(classes.mainIcon, classes.oddity)} />
  ) : (
    <GoogleIcon className={classes.mainIcon} />
  );

  return (
    <div className={classes.container}>
      {mainIcon}

      <div className={classes.search}>
        <Input value={inputValue} onChange={handleInputChange} />

        {isDesktop && (
          <div className={classes.buttons}>
            <Button>Пошук Google</Button>

            <Button onClick={handleLuckyClick}>Мені пощастить</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
