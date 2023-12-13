import { useState } from 'react';

import FullWidthTextarea from '../../shared/FullWidthTextarea/FullWidthTextarea.tsx';
import { useTranslation } from '../../../hooks';

import styles from './CustomAccordion.module.css';

const CustomAccordion = () => {
  const translation = useTranslation();
  const [selectedDiv, setSelectedDiv] = useState<string>('Variables');
  const [visibleDiv, setVisibleDiv] = useState<boolean>(false);

  const showDiv = (divName: string) => {
    setVisibleDiv(true);
    setSelectedDiv(divName);
  };

  const toggleDiv = () => {
    setVisibleDiv(!visibleDiv);
  };

  return (
    <div className={styles.wrapperAccordion}>
      <div className={styles.wrapperGroup}>
        <div>
          <button
            className={`${styles.buttonsControl} ${selectedDiv === 'Variables' ? styles.activeButton : ''}`}
            onClick={() => showDiv('Variables')}
          >
            {translation.variables}
          </button>
          <button
            className={`${styles.buttonsControl} ${selectedDiv === 'Headers' ? styles.activeButton : ''}`}
            onClick={() => showDiv('Headers')}
          >
            {translation.headers}
          </button>
          <button className={`${styles.buttonGroup} ${visibleDiv ? styles.visible : ''}`} onClick={() => toggleDiv()}></button>
        </div>
      </div>
      {visibleDiv && (
        <>
          {selectedDiv === 'Variables' && (
            <div className={styles.textarea}>
              <FullWidthTextarea />
            </div>
          )}
          {selectedDiv === 'Headers' && (
            <div className={styles.textarea}>
              <FullWidthTextarea />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CustomAccordion;
