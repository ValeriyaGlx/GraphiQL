import { useState } from 'react';

import CustomAccordion from '../../entities/Accordion/CustomAccordion';
import ControlledTextarea from '../../entities/ControlledTextarea/ControlledTextarea';
import prettifyingService from '../../../services/PrettifyingService';

import styles from './RequestSection.module.css';

const RequestSection = () => {
  const [query, setQuery] = useState<string>('');

  const handleButtonPrettierClick = () => {
    const newQuery = prettifyingService.formatQuery(query);
    setQuery(newQuery);
  };

  return (
    <div className={styles.requestSection}>
      <div className={styles.wrapperButtons}>
        <div className={styles.textarea}>
          <ControlledTextarea query={query} setQuery={setQuery} />
        </div>
        <div className={styles.wrapperButtonPlay}>
          <button className={styles.buttonPlay} />
        </div>
        <button className={styles.buttonPrettier} onClick={handleButtonPrettierClick} />
      </div>
      <CustomAccordion />
    </div>
  );
};

export default RequestSection;
