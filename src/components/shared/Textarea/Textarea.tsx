import styles from './Textarea.module.css';

interface FullWidthTextareaProps {
  selectedDiv?: string;
}

const Textarea = ({ selectedDiv }: FullWidthTextareaProps) => {
  return (
    <div className={styles.wrapperTextarea}>
      <textarea className={styles.textarea} placeholder={selectedDiv} />
    </div>
  );
};

export default Textarea;
