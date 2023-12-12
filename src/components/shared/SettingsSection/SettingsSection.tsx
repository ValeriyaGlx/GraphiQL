import { type MouseEvent, useState } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Typography from '@mui/material/Typography';

import type { Lang, languageToggleValue, Theme, themeToggleValue } from '../../../types';
import { useLanguageDispatch } from '../../../hooks';
import { LANG_EN, LANG_RU } from '../../../constants';
import { useThemeDispatch } from '../../../hooks/useThemeDispatch.ts';

import { theme } from './SettingsSectionTheme';
import styles from './SettingsSection.module.css';

type SettingsSectionProps = {
  inner: string;
  description: string;
  alignments: languageToggleValue[] | themeToggleValue[];
  startValue: Lang | Theme;
};

const SettingsSection = ({ inner, description, alignments, startValue }: SettingsSectionProps) => {
  const [alignment, setAlignment] = useState(startValue);

  const setLanguage = useLanguageDispatch();
  const setTheme = useThemeDispatch();

  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: Lang | Theme) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      if (newAlignment === LANG_EN || newAlignment === LANG_RU) {
        setLanguage(newAlignment);
      } else {
        setTheme(newAlignment);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.section}>
        <Typography sx={{ fontSize: '28px' }} component="div">
          {inner}
          <Typography component="p">{description}</Typography>
        </Typography>
        <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
          {alignments.map((el) => (
            <ToggleButton value={el.value} key={el.value}>
              {el.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </ThemeProvider>
  );
};

export default SettingsSection;
