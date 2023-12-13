import TextField from '@mui/material/TextField';

import { useTranslation } from '../../../hooks';

import styles from './DocsSection.module.css';

const DocsSection = () => {
  const translation = useTranslation();
  return (
    <div className={styles.docsSection}>
      <button className={styles.buttonDocs} />
      <TextField
        className={styles.inputEndpoind}
        label={translation.endpoint}
        id="filled-size-small"
        variant="filled"
        size="small"
      />
    </div>
  );
};

export default DocsSection;
