import styles from './style.module.scss';
import { useAppSelector } from 'shared/api/redux/hooks';
import { useAppDispatch } from 'shared/api/redux/hooks';
import { sideMenuVisibleToggled } from 'shared/api/redux/slices/sideMenu';

export function Backdrop() {
  const { sideMenuVisible } = useAppSelector((state) => state.sideMenu);
  const dispatch = useAppDispatch();

  return (
    <span
      onClick={() => dispatch(sideMenuVisibleToggled())}
      className={sideMenuVisible ? styles.blur : ''}
    ></span>
  );
}
