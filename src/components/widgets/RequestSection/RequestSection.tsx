import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import CustomAccordion from '../../entities/Accordion/CustomAccordion';
import ControlledTextarea from '../../entities/ControlledTextarea/ControlledTextarea';
import prettifyingService from '../../../services/PrettifyingService';
import { useTranslation } from '../../../hooks';
import TostifyMessage from '../../shared/TostifyMessage/TostifyMessage';
import TostifyComponent from '../../shared/TostifyComponent/TostifyComponent';
import type { AppDispatch } from '../../../store/store';
import { updateResponseData } from '../../../store/slices/responseSlice';

import styles from './RequestSection.module.css';

const test = {
  characters: {
    info: {
      count: 826,
    },
  },
};

const RequestSection = () => {
  const dispatch: AppDispatch = useDispatch();
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

  const handleButtonPlayClick = () => {
    const data = JSON.stringify(test);
    dispatch(updateResponseData(data));
  };

  return (
    <div className={styles.requestSection}>
      <div className={styles.wrapperButtons}>
        <div className={styles.textarea}>
          <ControlledTextarea query={query} setQuery={setQuery} />
        </div>
        <div className={styles.wrapperButtonPlay}>
          <button className={styles.buttonPlay} onClick={handleButtonPlayClick} />
        </div>
        <button className={styles.buttonPrettier} onClick={handleButtonPrettierClick} />
      </div>
      <CustomAccordion />
      <TostifyComponent />
    </div>
  );
};

export default RequestSection;
