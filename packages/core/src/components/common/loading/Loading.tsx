import styles from './Loading.module.scss';

interface LoadingProps {
  imagePaths?: string;
}
export default function Loading({
  imagePaths = '/images/loading/Mango.webp',
}: LoadingProps) {
  return (
    <div className={styles.box}>
      <div className={styles['image-box']}>
        <img src={imagePaths} alt="Loading" />
      </div>
    </div>
  );
}
