import styled from './style.module.scss';
import { SVG } from 'shared/ui';

export function HeaderTelephone() {
  return (
    <a href="tel:+73451233445" className={styled.container}>
      <SVG href="#phone" svgClassName={styled.svg} useClassName={styled.use} />
      <p className={styled.link}>8-345-123-34-45</p>
    </a>
  );
}
