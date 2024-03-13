import { ConsultationInputProps } from './types';
import styles from './style.module.scss';

export function SideMenuInput(props: ConsultationInputProps) {
  const { type, placeholder, value, onChange } = props;
  return (
    <input
      value={value}
      onChange={onChange}
      className={styles.input}
      type={type}
      placeholder={placeholder}
    />
  );
}
