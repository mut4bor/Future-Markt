import styles from './style.module.scss';

export function ConsultationHeading() {
  return (
    <>
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
    </>
  );
}
