import styles from './style.module.scss';
import { ConsultationHeading } from './consultation-heading';
import { ConsultationButton } from './consultation-button';
import { ConsultationInfo } from './consultation-info';
import mentor from 'shared/icons/mentor.png';

export function Consultation() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.consultation}>
          <ConsultationHeading />
          <div className={styles.buttons}>
            <ConsultationButton
              type="contained"
              onClick={() => console.log('Записаться на консультацию')}
              text={{
                mobile: 'Записаться',
                desktop: 'Записаться на консультацию',
              }}
            />
            <ConsultationButton
              type="outlined"
              onClick={() => console.log('Бесплатная консультация')}
              text={{
                mobile: 'Заказать звонок',
                desktop: 'Бесплатная консультация',
              }}
            />
          </div>
        </div>

        <div className={styles.info}>
          <ConsultationInfo
            heading="130+"
            subheading={{
              mobile: 'техники',
              desktop: 'техник для достижения целей',
            }}
          />
          <ConsultationInfo
            heading="250%"
            subheading={{
              mobile: 'продуктивности',
              desktop: `увеличение личной продуктивности`,
            }}
          />
        </div>
      </div>
      <img className={styles.image} src={mentor} alt="Ментор" />
    </div>
  );
}
