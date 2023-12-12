import type * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Typography from '@mui/material/Typography';

import type { Lang } from '../../../types';

import { theme } from './SettingsSectionTheme';
import styles from './SettingsSection.module.css';

type SettingsSectionProps = {
  inner: string;
  description: string;
  alignments: string[];
  startValue: Lang | string;
  changeFunction: (language: Lang) => void;
};

const SettingsSection = ({ inner, description, alignments, changeFunction, startValue }: SettingsSectionProps) => {
  const [alignment, setAlignment] = useState(startValue);

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: Lang) => {
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
            <ToggleButton value={el.toLowerCase()} key={el}>
              {el}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </ThemeProvider>
  );
};

export default SettingsSection;
