import styles from './style.module.scss';

export function HeaderNavigation() {
  return (
    <nav className={styles.navigation}>
      <button type="button" className={styles.toggleList}>
        <svg className={styles.svg} viewBox="0 0 41 41" fill="none">
          <circle cx="20.2303" cy="20.2303" r="19.7303" stroke="white" />
          <g opacity="0.8">
            <path
              d="M11.5937 13.0611H29.4063C29.734 13.0611 30 12.5994 30 12.0306C30 11.4616 29.734 11 29.4063 11H11.5937C11.266 11 11 11.4617 11 12.0306C11 12.5994 11.266 13.0611 11.5937 13.0611Z"
              fill="white"
            />
            <path
              d="M29.4063 19.061H11.5937C11.266 19.061 11 19.5228 11 20.0916C11 20.6604 11.266 21.1221 11.5937 21.1221H29.4063C29.734 21.1221 30 20.6604 30 20.0916C30 19.5228 29.734 19.061 29.4063 19.061Z"
              fill="white"
            />
            <path
              d="M29.4063 27.1221H11.5937C11.266 27.1221 11 27.5838 11 28.1526C11 28.7214 11.266 29.1832 11.5937 29.1832H29.4063C29.734 29.1832 30 28.7214 30 28.1526C30 27.5838 29.734 27.1221 29.4063 27.1221Z"
              fill="white"
            />
          </g>
        </svg>
      </button>

      <ul className={styles.list}>
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
