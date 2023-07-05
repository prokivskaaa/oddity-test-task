import AppsIcon from '../../icons/AppsIcon';
import PrimaryButton from '../shared/PrimaryButton';
import classes from './header.module.scss';

const Header: React.FC = () => (
  <div className={classes.container}>
    <ul className={classes.list}>
      <li className={classes.item}>
        <a
          className={classes.link}
          aria-label="Gmail (відкриється в новій вкладці)"
          href="https://mail.google.com/mail/?authuser=0&amp;ogbl"
          target="_top"
        >
          Gmail
        </a>
      </li>

      <li className={classes.item}>
        <a
          className={classes.link}
          aria-label="Пошук зображень (відкриється в новій вкладці)"
          href="https://www.google.com/imghp?hl=uk&amp;authuser=0&amp;ogbl"
          target="_top"
        >
          Зображення
        </a>
      </li>
    </ul>

    <AppsIcon className={classes.appsIcon} />

    <PrimaryButton>Log in</PrimaryButton>
  </div>
);

export default Header;
