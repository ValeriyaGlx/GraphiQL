import type { ChangeEvent } from 'react';

import styles from './ControlledTextarea.module.css';

interface ControlledTextareaProps {
  selectedDiv?: string;
  query: string;
  setQuery: (newQuery: string) => void;
}

const ControlledTextarea = ({ selectedDiv, query, setQuery }: ControlledTextareaProps) => {
  const handleQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  return (
    <div className={styles.wrapperTextarea}>
      <textarea className={styles.textarea} placeholder={selectedDiv} value={query} onChange={handleQueryChange} />
    </div>
  );
};

export default ControlledTextarea;
