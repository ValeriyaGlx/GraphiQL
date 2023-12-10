import { Divider, Box, Modal, Typography } from '@mui/material';

import SettingsSection from '../../shared/SettingsSection/SettingsSection.tsx';

import styles from './SettingsModal.module.css';

type SettingsModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const SettingsModal = ({ isOpen, handleClose }: SettingsModalProps) => {
  return (
    <div>
      <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box className={styles.modal}>
          <button className={styles.close} onClick={handleClose} />
          <Typography variant="h4" component="h4">
            Settings
          </Typography>
          <Divider sx={{ borderColor: '#ababab' }} />
          <SettingsSection inner={'Language'} alignments={['En', 'Ru']} />
          <Divider sx={{ borderColor: '#ababab' }} />
          <SettingsSection inner={'Theme'} alignments={['Dark', 'Light']} />
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;
