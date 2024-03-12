import styled from './style.module.scss';
import { Consultation } from 'entities/consultation';

export function MainPage() {
  return (
    <div className={styled.container}>
      <Consultation />
    </div>
  );
}
