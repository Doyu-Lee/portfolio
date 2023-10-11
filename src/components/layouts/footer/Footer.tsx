import Link from 'next/link';
import { SiGithub, SiTistory, SiLinkedin } from 'react-icons/si';
import { useTranslation } from '@/app/i18n';
import styles from './Footer.module.scss';

const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'footer');

  const FooterItems = [
    {
      name: t('link1'),
      href: 'https://github.com/Doyu-Lee',
      icon: <SiGithub size={25} />,
    },
    {
      name: t('link2'),
      href: 'https://doyu-l.tistory.com',
      icon: <SiTistory size={20} />,
    },
    {
      name: t('link3'),
      href: 'https://www.linkedin.com/in/lee-seona-2a9891144',
      icon: <SiLinkedin size={24} />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`${styles.name} ${lng === 'ko' && styles.ko}`}>{t('name')}</div>
      <div className={styles.links}>
        {FooterItems.map((item, i) => (
          <span key={item.name} className={styles[`link${i + 1}`]}>
            <Link href={item.href} target="_blank" aria-label={item.name}>
              {item.icon}
            </Link>
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
