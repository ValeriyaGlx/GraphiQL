import { Drawer, Divider } from '@mui/material';

import styles from './DocumentationExplorer.module.css';
interface DocumentationExplorerProps {
  showDocumentation: boolean;
  onclose: () => void;
}

const DocumentationExplorer = ({ showDocumentation, onclose }: DocumentationExplorerProps) => {
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
        <h2 className={styles.title}>Documentation Explorer</h2>
        <Divider />
      </div>
    </Drawer>
  );
};

export default DocumentationExplorer;
