import { SVG } from 'shared/ui';
import styled from './style.module.scss';

export function HeaderLogo() {
  return (
    <a href="#" title="На главную" className={styled.link}>
      <SVG href="#logo" svgClassName={styled.svg} useClassName={styled.use} />
    </a>
  );
}
