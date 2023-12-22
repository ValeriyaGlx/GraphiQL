import { Divider } from '@mui/material';

import styles from '../../features/DocumentationExplorer/DocumentationExplorer.module.css';
import { useTranslation } from '../../../hooks';

const ListOfDocumentation = () => {
  const translation = useTranslation();
  return (
    <div>
      <h2 className={styles.title}>{translation.documentationExplorer}</h2>
      <Divider />
    </div>
  );
};

export default ListOfDocumentation;
