import styles from './style.module.scss';
import { SVG } from 'shared/ui';

export function SideMenuThanks() {
  return (
    <>
      <p className={styles.thanks}>Спасибо за заявку!</p>
      <p className={styles.contact}>
        Я обязательно свяжусь с вами в ближайшее время
      </p>
      <SVG href="#logo" svgClassName={styles.svg} useClassName={styles.use} />
    </>
  );
}
