import styles from './style.module.scss';
import { ConsultationButton } from './consultation-button';
import { ConsultationInfo } from './consultation-info';
import mentor from 'shared/icons/mentor.png';

export function Consultation() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.consultation}>
          <h1 className={styles.heading}>Создаю условия для вашего успеха</h1>
          <h3 className={styles.subheading}>
            <p className={styles.desktopSubheadingText}>
              Когда ваше время и энергия лучше сфокусированы, стремление к новым
              возможностям становится реальностью, ваш успех зависит от ваших
              действий
            </p>
            <p className={styles.mobileSubheadingText}>
              Ваш успех зависит от ваших действий
            </p>
          </h3>

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
            subheading="техник для достижения целей"
          />
          <ConsultationInfo
            heading="250%"
            subheading="увеличение личной продуктивности"
          />
        </div>
      </div>
      {/* <img className={styles.image} src={mentor} alt="Ментор" /> */}
    </div>
  );
}
