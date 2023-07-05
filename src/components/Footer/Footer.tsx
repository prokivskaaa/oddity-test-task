import classes from './footer.module.scss';
import cn from 'classnames';

const Footer: React.FC = () => (
  <footer className={classes.container}>
    <div className={classes.line}>
      <span className={classes.country}>Україна</span>
    </div>
    <div className={classes.line}>
      <ul className={cn(classes.list, classes.firstList)}>
        <li className={classes.item}>
          <a href="https://about.google/" className={classes.link}>
            Про Google
          </a>
        </li>
        <li className={classes.item}>
          <a
            href="https://ads.google.com/intl/uk_ua/home/"
            className={classes.link}
          >
            Реклама
          </a>
        </li>
        <li className={classes.item}>
          <a
            href="https://www.google.com.ua/services/"
            className={classes.link}
          >
            Для бізнесу
          </a>
        </li>
        <li className={classes.item}>
          <a
            href="https://www.google.com/search/howsearchworks/"
            className={classes.link}
          >
            Як працює Пошук
          </a>
        </li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a
            href="https://policies.google.com/privacy"
            className={classes.link}
          >
            Конфіденційність
          </a>
        </li>
        <li className={classes.item}>
          <a href="https://policies.google.com/terms" className={classes.link}>
            Умови
          </a>
        </li>
        <li className={classes.item}>
          <a
            href="https://www.google.com.ua/preferences"
            className={classes.link}
          >
            Налаштування
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
