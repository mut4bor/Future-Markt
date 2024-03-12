import styles from './style.module.scss';
import { ConsultationInfoProps } from './types';

export function ConsultationInfo(props: ConsultationInfoProps) {
  const { heading, subheading } = props;
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>{heading}</h4>
      <p className={styles.subheading}>{subheading}</p>
    </div>
  );
}
