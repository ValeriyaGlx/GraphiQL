import { useState } from 'react';

import FullWidthTextarea from '../../shared/FullWidthTextarea/FullWidthTextarea.tsx';
import { useTranslation } from '../../../hooks';
import ControlButton from '../../shared/ControlButton/ControlButton.tsx';

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
          <ControlButton
            label={translation.variables}
            isActive={selectedDiv === 'Variables'}
            onClick={() => showDiv('Variables')}
          />
          <ControlButton label={translation.headers} isActive={selectedDiv === 'Headers'} onClick={() => showDiv('Headers')} />
          <button className={`${styles.buttonGroup} ${visibleDiv ? styles.visible : ''}`} onClick={toggleDiv}></button>
        </div>
      </div>
      {visibleDiv && <FullWidthTextarea selectedDiv={selectedDiv} />}
    </div>
  );
};

export default CustomAccordion;
