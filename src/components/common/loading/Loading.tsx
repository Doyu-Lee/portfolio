import styles from './Loading.module.scss';

export default function Loading() {
  const imagePaths = '/images/loading/Mango.jpeg';

  return (
    <div className={styles.box}>
      <div className={styles['image-box']}>
        <img src={imagePaths} alt="Loading" />
      </div>
    </div>
  );
}
