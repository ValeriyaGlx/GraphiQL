import { useState, type MouseEvent } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Typography from '@mui/material/Typography';

import type { Lang, Theme } from '../../../types';
import type { languageToggleValue, themeToggleValue } from '../../../types';

import { theme } from './SettingsSectionTheme';
import styles from './SettingsSection.module.css';

type SettingsSectionProps = {
  inner: string;
  description: string;
  alignments: languageToggleValue[] | themeToggleValue[];
  startValue: Lang | Theme;
  changeFunction: (value: Lang | Theme) => void;
};

const SettingsSection = ({ inner, description, alignments, changeFunction, startValue }: SettingsSectionProps) => {
  const [alignment, setAlignment] = useState(startValue);

  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: Lang | Theme) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      changeFunction(newAlignment);
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
