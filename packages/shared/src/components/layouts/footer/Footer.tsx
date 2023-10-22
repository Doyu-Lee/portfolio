import '../../../app/globals.scss';
import React from 'react';
import { SiGithub, SiTistory, SiLinkedin } from 'react-icons/si';
import styles from './Footer.module.scss';

const Footer = ({ lng }: { lng: string }) => {
  const FooterItems = [
    {
      name: lng === 'ko' ? '깃허브' : 'GitHub',
      href: 'https://github.com/Doyu-Lee',
      icon: <SiGithub size={25} />,
    },
    {
      name: lng === 'ko' ? '티스토리' : 'Tistory',
      href: 'https://doyu-l.tistory.com',
      icon: <SiTistory size={20} />,
    },
    {
      name: lng === 'ko' ? '링크드인' : 'Linkedin',
      href: 'https://www.linkedin.com/in/lee-seona-2a9891144',
      icon: <SiLinkedin size={24} />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`${styles.name} ${lng === 'ko' && styles.ko}`}>
        {lng === 'ko' ? '이선아' : 'Seona Lee'}
      </div>
      <div className={styles.links}>
        {FooterItems.map((item, i) => (
          <span key={item.name} className={styles[`link${i + 1}`]}>
            <a href={item.href} target="_blank" aria-label={item.name} rel="noreferrer">
              {item.icon}
            </a>
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
