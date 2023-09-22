import Link from 'next/link';
import Logo from '../common/logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  const navMenus = ['roadmap', 'dots'];

  return (
    <header className={styles['header-nav']}>
      <div className={styles['nav-box']}>
        <div className={styles['logo-box']}>
          <Logo />
        </div>
        <nav className={styles['menu-box']}>
          {navMenus.map((menu) => (
            <Link data-text={menu} href={`/${menu}`} key={menu} className={styles.menu}>
              <span className={styles.highlight} />
              {menu}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
