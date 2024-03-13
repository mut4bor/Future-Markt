import styled from './style.module.scss';
import { SideMenu } from 'entities/side-menu';
import { Consultation } from 'entities/consultation';
import { Backdrop } from 'entities/backdrop';
export function MainPage() {
  return (
    <div className={styled.container}>
      <Backdrop />
      <SideMenu />
      <Consultation />
    </div>
  );
}
