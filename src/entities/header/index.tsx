import styled from './style.module.scss';
import { HeaderNavigation } from './header-navigation';
import { HeaderTelephone } from './header-telephone';
import { HeaderLogo } from './header-logo';

export function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.container}>
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderTelephone />
      </div>
    </header>
  );
}
