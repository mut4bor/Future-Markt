import styles from './style.module.scss';
import { HeaderNavigation } from './header-navigation';
import { HeaderTelephone } from './header-telephone';
import { HeaderLogo } from './header-logo';
import { useAppSelector } from 'shared/api/redux/hooks';

export function Header() {
  const { sideMenuVisible } = useAppSelector((state) => state.sideMenu);

  return (
    <header
      className={`${styles.header} ${sideMenuVisible ? styles.blur : ''}`}
    >
      <div className={styles.container}>
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderTelephone />
      </div>
    </header>
  );
}
