import { ConsultationInputProps } from './types';
import styles from './style.module.scss';

export function SideMenuInput(props: ConsultationInputProps) {
  const { type, placeholder } = props;
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
}
