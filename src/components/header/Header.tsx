'use client';

import Link from 'next/link';
import { navMenus } from '@/constants/navMenus';
import Button1 from '../buttons/Button1';
import Logo from '../common/logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  const handleLocale = () => {};

  return (
    <header className={styles['header-nav']}>
      <div className={styles['nav-box']}>
        <Logo />
        <div className={styles.align}>
          <nav className={styles['menu-box']}>
            {navMenus.map((menu) => (
              <Link data-text={menu} href={`/${menu}`} key={menu} className={styles.menu}>
                <span className={styles.highlight} />
                {menu}
              </Link>
            ))}
          </nav>
          <Button1 title="En" handler={handleLocale} />
        </div>
      </div>
    </header>
  );
};

export default Header;
