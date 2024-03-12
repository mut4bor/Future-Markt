import styles from './style.module.scss';
import { ConsultationInfoProps } from './types';

export function ConsultationInfo(props: ConsultationInfoProps) {
  const {
    heading,
    subheading: { mobile, desktop },
  } = props;
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>{heading}</h4>
      <p className={styles.subheadingMobile}>{mobile}</p>
      <p className={styles.subheadingDesktop}>{desktop}</p>
    </div>
  );
}
