import styles from './style.module.scss';
import { SideMenuInput } from './side-menu-input';
import { SideMenuCheckbox } from './side-menu-checkbox';
import { SideMenuCancelButton } from './side-menu-cancel-button';
import { SideMenuSubmitButton } from './side-menu-submit-button';
import { SideMenuHeading } from './side-menu-heading';
import { useState } from 'react';
import { useAppSelector } from 'shared/api/redux/hooks';

export function SideMenu() {
  const [checked, setChecked] = useState(false);

  const { sideMenuVisible } = useAppSelector((state) => state.sideMenu);

  return (
    <div
      className={`${styles.container} ${sideMenuVisible ? styles.visible : ''}`}
    >
      <SideMenuCancelButton />
      <SideMenuHeading />
      <SideMenuInput type="text" placeholder="Имя" />
      <SideMenuInput type="tel" placeholder="Телефон" />
      <SideMenuCheckbox
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <SideMenuSubmitButton disabled={!checked} />
    </div>
  );
}
