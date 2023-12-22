import { TextField, ThemeProvider, CircularProgress } from '@mui/material';
import { useState, lazy, Suspense } from 'react';

import { useTranslation } from '../../../hooks';
import { themeInput } from '../../../utils/themeInput/themeInput';

import styles from './DocsSection.module.css';

const DocumentationExplorer = lazy(() => import('../../features/DocumentationExplorer/DocumentationExplorer'));

const DocsSection = () => {
  const translation = useTranslation();
  const [showDocumentation, setShowDocumentation] = useState(false);

  return (
    <div className={styles.docsSection}>
      <div className={styles.docsWrapper}>
        <button
          className={showDocumentation ? styles.buttonDocsOpen : styles.buttonDocs}
          onClick={() => setShowDocumentation(!showDocumentation)}
        />
        <ThemeProvider theme={themeInput}>
          <TextField
            className={styles.inputEndpoind}
            label={translation.endpoint}
            id="filled-size-small"
            variant="filled"
            size="small"
            color="secondary"
            defaultValue={'https://swapi-graphql.eskerda.vercel.app/'}
          />
        </ThemeProvider>
      </div>

      <Suspense fallback={<CircularProgress />}>
        <DocumentationExplorer onclose={() => setShowDocumentation(false)} showDocumentation={showDocumentation} />
      </Suspense>
    </div>
  );
};

export default DocsSection;
