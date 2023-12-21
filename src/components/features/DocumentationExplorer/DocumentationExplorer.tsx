import { Drawer, Divider } from '@mui/material';

import { useTranslation } from '../../../hooks';

import styles from './DocumentationExplorer.module.css';

type DocumentationExplorerProps = {
  showDocumentation: boolean;
  onclose: () => void;
};

const DocumentationExplorer = ({ showDocumentation, onclose }: DocumentationExplorerProps) => {
  const translation = useTranslation();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={showDocumentation}
      SlideProps={{
        style: {
          position: 'absolute',
          top: '73px',
          left: '15px',
          height: '87%',
        },
      }}
    >
      <div className={styles.wrapper}>
        <button className={styles.close} onClick={onclose} />
        <h2 className={styles.title}>{translation.documentationExplorer}</h2>
        <Divider />
      </div>
    </Drawer>
  );
};

export default DocumentationExplorer;
