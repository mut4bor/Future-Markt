import { SVG } from 'shared/ui';
import styles from './style.module.scss';
import { useAppDispatch } from 'shared/api/redux/hooks';
import { sideMenuVisibleToggled } from 'shared/api/redux/slices/sideMenu';

export function SideMenuCancelButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      title="Отмена"
      onClick={() => dispatch(sideMenuVisibleToggled())}
      className={styles.cancel}
      type="button"
    >
      <SVG svgClassName={styles.svg} href="#cross" />
    </button>
  );
}
