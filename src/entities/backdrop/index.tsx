import styles from './style.module.scss';
import { useAppSelector } from 'shared/api/redux/hooks';

export function Backdrop() {
  const { sideMenuVisible } = useAppSelector((state) => state.sideMenu);

  return <span className={sideMenuVisible ? styles.blur : ''}></span>;
}
