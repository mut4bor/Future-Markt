import styles from './style.module.scss';
import { ConsultationButtonProps } from './types';

export function ConsultationButton(props: ConsultationButtonProps) {
  const {
    onClick,
    text: { mobile, desktop },
    type,
  } = props;

  const handleClass = (defaultClass: string) => {
    return `${defaultClass} ${type === 'contained' ? styles.contained : ''}`;
  };

  return (
    <button
      className={handleClass(styles.button)}
      type="button"
      onClick={onClick}
    >
      <div className={styles.textContainer}>
        <p className={styles.mobileText}>{mobile}</p>
        <p className={styles.desktopText}>{desktop}</p>
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
