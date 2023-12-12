import { Divider, Box, Modal, Typography } from '@mui/material';

import SettingsSection from '../../shared/SettingsSection/SettingsSection.tsx';
import { useLanguage, useLanguageDispatch, useTranslation } from '../../../hooks';
import type { Lang } from '../../../types';

import styles from './SettingsModal.module.css';

type SettingsModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const SettingsModal = ({ isOpen, handleClose }: SettingsModalProps) => {
  const translation = useTranslation();
  const setLanguage = useLanguageDispatch();
  const language = useLanguage();

  const changeLanguage = (language: Lang) => setLanguage(language);

  return (
    <div>
      <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box className={styles.modal}>
          <button className={styles.close} onClick={handleClose} />
          <Typography sx={{ padding: '20px' }} variant="h4" component="h4">
            {translation.settings}
          </Typography>
          <Divider sx={{ borderColor: '#ababab' }} />
          <SettingsSection
            startValue={language}
            inner={translation.languageSetting}
            description={translation.languageSettingDescription}
            alignments={['En', 'Ru']}
            changeFunction={changeLanguage}
          />
          <Divider sx={{ borderColor: '#ababab' }} />
          <SettingsSection
            startValue={'Dark'}
            inner={translation.themeSetting}
            description={translation.themeSettingDescription}
            alignments={['Dark', 'Light']}
            changeFunction={() => {}}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;
