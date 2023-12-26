import { useState } from 'react';
import { toast } from 'react-toastify';

import CustomAccordion from '../../entities/Accordion/CustomAccordion';
import ControlledTextarea from '../../entities/ControlledTextarea/ControlledTextarea';
import prettifyingService from '../../../services/PrettifyingService';
import { useTranslation } from '../../../hooks';
import TostifyMessage from '../../shared/TostifyMessage/TostifyMessage.tsx';
import TostifyComponent from '../../shared/TostifyComponent/TostifyComponent.tsx';

import styles from './RequestSection.module.css';

const RequestSection = () => {
  const translation = useTranslation();
  const [query, setQuery] = useState<string>('');

  const handleButtonPrettierClick = () => {
    const prettifyingMessage = translation.notifications.prettifyingFailed;
    const newQuery = prettifyingService.formatQuery(query, prettifyingMessage);
    if (Array.isArray(newQuery)) {
      toast.error(<TostifyMessage title={prettifyingMessage.title} text={newQuery[0]} />);
    } else {
      setQuery(newQuery);
    }
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
      <TostifyComponent />
    </div>
  );
};

export default RequestSection;
