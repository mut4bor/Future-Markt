import styles from './style.module.scss';
import { ConsultationHeading } from './consultation-heading';
import { ConsultationButton } from './consultation-button';
import { ConsultationInfo } from './consultation-info';
import mentor from 'shared/icons/mentor.png';
import { useAppSelector } from 'shared/api/redux/hooks';
import { useGetDailyJsonQuery } from 'shared/api/redux/slices/apiSlice';

export function Consultation() {
  const { sideMenuVisible } = useAppSelector((state) => state.sideMenu);
  const { data } = useGetDailyJsonQuery();

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  const formattedDate = Array.from(`${day}${month}${year}`);

  const sumOfNumbers = formattedDate
    .map((e) => parseFloat(e))
    .reduce((acc, number) => acc + number);

  return (
    <div
      className={`${styles.container} ${sideMenuVisible ? styles.blur : ''}`}
    >
      <img className={styles.image} src={mentor} alt="Ментор" />
      <div className={styles.wrapper}>
        <div className={styles.consultation}>
          <ConsultationHeading />
          <div className={styles.buttons}>
            <ConsultationButton
              type="contained"
              text={{
                mobile: 'Записаться',
                desktop: 'Записаться на консультацию',
              }}
            />
            <ConsultationButton
              type="outlined"
              text={{
                mobile: 'Заказать звонок',
                desktop: 'Бесплатная консультация',
              }}
            />
          </div>
        </div>

        <div className={styles.info}>
          <ConsultationInfo
            heading={`${sumOfNumbers}`}
            subheading={{
              mobile: 'техники',
              desktop: 'техник для достижения целей',
            }}
          />
          <ConsultationInfo
            heading={`${Math.round(data ? data.Valute['GBP'].Value : 0)}`}
            subheading={{
              mobile: 'продуктивности',
              desktop: `увеличение личной продуктивности`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
