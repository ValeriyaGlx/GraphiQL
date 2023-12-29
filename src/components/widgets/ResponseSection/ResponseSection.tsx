import EditorOrViewer from '../../entities/Editor0rViewer/EditorOrViewer.tsx';

import styles from './ResponseSection.module.css';

const ResponseSection = () => {
  return (
    <div className={styles.responseSection}>
      <EditorOrViewer readOnly={true} />
    </div>
  );
};

export default ResponseSection;
