import Editor0RViewer from '../../entities/Editor0rViewer/Editor0rViewer';

import styles from './ResponseSection.module.css';

const ResponseSection = () => {
  return (
    <div className={styles.responseSection}>
      <Editor0RViewer readOnly={true} />
    </div>
  );
};

export default ResponseSection;
