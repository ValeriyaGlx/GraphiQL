import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import styles from './Textarea.module.css';

interface FullWidthTextareaProps {
  selectedDiv?: string;
}

const Textarea = ({ selectedDiv }: FullWidthTextareaProps) => {
  return (
    <div className={styles.wrapperTextarea}>
      <TextareaAutosize minRows={8} className={styles.textarea} placeholder={selectedDiv} />
    </div>
  );
};

export default Textarea;
