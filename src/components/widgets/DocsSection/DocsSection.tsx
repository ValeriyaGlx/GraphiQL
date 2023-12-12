import TextField from '@mui/material/TextField';

import styles from './DocsSection.module.css';

const DocsSection = () => {
  return (
    <div className={styles.docsSection}>
      <button className={styles.buttonDocs} />
      <TextField className={styles.inputEndpoind} label="Endpoind" id="filled-size-small" variant="filled" size="small" />
    </div>
  );
};

export default DocsSection;
