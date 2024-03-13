import { useState } from 'react';
import styles from './style.module.scss';
import { SVG } from 'shared/ui';

export function HeaderNavigation() {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  return (
    <nav className={styles.navigation}>
      <button
        onClick={() => setToggleMobileNav(true)}
        type="button"
        title="Навигация"
        className={styles.toggleList}
      >
        <SVG svgClassName={styles.svg} href="#menu" />
      </button>

      <ul className={`${styles.list} ${toggleMobileNav ? styles.visible : ''}`}>
        <li className={styles.cancelItem}>
          <button
            title="Отмена"
            onClick={() => setToggleMobileNav(false)}
            className={styles.cancel}
            type="button"
          >
            <SVG svgClassName={styles.svg} href="#cross" />
          </button>
        </li>
        <li className={styles.itemWrapper}>
          <a className={styles.link} href="#">
            Обо мне
          </a>
        </li>
        <li className={styles.itemWrapper}>
          <a className={styles.link} href="#">
            Наставничество
          </a>
        </li>
        <li className={styles.itemWrapper}>
          <a className={styles.link} href="#">
            Мероприятия
          </a>
        </li>
        <li className={styles.itemWrapper}>
          <a className={styles.link} href="#">
            Кейсы
          </a>
        </li>
        <li className={styles.itemWrapper}>
          <a className={styles.link} href="#">
            Отзывы
          </a>
        </li>
        <li className={styles.itemWrapper}>
          <a className={styles.link} href="#">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
