import styles from './style.module.scss';
import { ConsultationButtonProps } from './types';

export function ConsultationButton(props: ConsultationButtonProps) {
  const {
    onClick,
    text: { mobile, desktop },
    type,
  } = props;

  const handleClass = (defaultClass: string) => {
    return `${defaultClass} ${type === 'outlined' ? styles.outlined : ''}`;
  };

  return (
    <button
      className={handleClass(styles.button)}
      type="button"
      onClick={onClick}
    >
      <div className={handleClass(styles.textContainer)}>
        <p className={handleClass(styles.mobileText)}>{mobile}</p>
        <p className={handleClass(styles.desktopText)}>{desktop}</p>
      </div>
      <div className={handleClass(styles.arrowContainer)}>
        <svg
          className={handleClass(styles.svg)}
          viewBox="0 0 22 22"
          fill="none"
        >
          <path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" />
        </svg>
      </div>
    </button>
  );
}
