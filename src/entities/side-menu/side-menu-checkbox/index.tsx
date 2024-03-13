import styles from './style.module.scss';
import { RadioboxProps } from './types';

export function SideMenuCheckbox(props: RadioboxProps) {
  const { onChange, checked } = props;
  return (
    <div className={styles.container}>
      <input
        id="agreement"
        name="agreement"
        checked={checked}
        className={styles.checkbox}
        type="checkbox"
        onChange={onChange}
      />
      <label htmlFor="agreement">
        Согласен на сохранение и обработку персональных данных
      </label>
    </div>
  );
}
