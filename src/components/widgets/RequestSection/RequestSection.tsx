import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import CustomAccordion from '../../entities/Accordion/CustomAccordion';
import prettifyingService from '../../../services/PrettifyingService';
import { useTranslation } from '../../../hooks';
import TostifyMessage from '../../shared/TostifyMessage/TostifyMessage';
import TostifyComponent from '../../shared/TostifyComponent/TostifyComponent';
import { useActions } from '../../../hooks/useActions';
import { selectRequestData } from '../../../store/slices/requestSlice';
import Editor0RViewer from '../../entities/Editor0rViewer/Editor0rViewer';

import styles from './RequestSection.module.css';

const test = {
  characters: {
    info: {
      count: 826,
    },
  },
};

const RequestSection = () => {
  const translation = useTranslation();
  const query = useSelector(selectRequestData);
  const { updateResponseData, updateRequestData } = useActions();

  const handleButtonPrettierClick = () => {
    const { prettifyingFailed } = translation.notifications;
    const newQuery = prettifyingService.formatQuery(query, prettifyingFailed);
    if (Array.isArray(newQuery)) {
      toast.error(<TostifyMessage title={prettifyingFailed.title} text={newQuery[0]} />);
    } else {
      updateRequestData(newQuery);
    }
  };

  const handleButtonPlayClick = () => {
    const data = JSON.stringify(test);
    updateResponseData(data);
  };

  return (
    <div className={styles.requestSection}>
      <div className={styles.wrapperButtons}>
        <div className={styles.textarea}>
          <Editor0RViewer readOnly={false} />
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
