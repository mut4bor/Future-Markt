import styles from './style.module.scss';
import { SideMenuSubmitButtonProps } from './types';

export function SideMenuSubmitButton(props: SideMenuSubmitButtonProps) {
  const { disabled } = props;
  return (
    <button
      className={styles.button}
      type="button"
      disabled={disabled}
      onClick={() => console.log('call')}
    >
      <div className={styles.textContainer}>
        <p className={styles.text}>Заказать обратный звонок</p>
      </div>
      <span className={styles.hr}></span>
      <div className={styles.arrowContainer}>
        <svg className={styles.svg} viewBox="0 0 22 22" fill="none">
          <path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" />
        </svg>
      </div>
    </button>
  );
}
