import React from 'react';
import styles from './Skeleton.module.scss';

export type SkeletonProps = {
  width: number | string;
  height: number | string;
};

const Skeleton = ({ width, height }: SkeletonProps) => {
  return <div className={styles.StyledSkeleton} style={{ width, height }} />;
};

export const IntroSkeleton = () => {
  return (
    <div className={styles.SkeletonContainer}>
      <Skeleton width="610px" height="33px" />
    </div>
  );
};

export const NotionDBSkeleton = () => {
  return (
    <div className={styles.SkeletonContainer}>
      <Skeleton width="90%" height="230px" />
      <Skeleton width="80%" height="330px" />
    </div>
  );
};
