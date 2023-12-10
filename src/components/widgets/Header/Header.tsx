import { useState } from 'react';
import { Link } from 'react-router-dom';

import SettingsModal from '../SettingsModal/SettingsModal.tsx';

import styles from './Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <button className={styles.settings} onClick={handleOpen} />
        <div className={styles.buttonsContainer}>
          <Link to={'/sign-in'}>Sign In</Link>
          <Link to={'/sign-up'}>Sign Up</Link>
        </div>
      </header>
      <SettingsModal isOpen={open} handleClose={handleClose} />
    </>
  );
};

export default Header;
