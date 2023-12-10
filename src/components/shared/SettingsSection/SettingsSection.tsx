import type * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Typography from '@mui/material/Typography';

import { theme } from './SettingsSectionTheme';
import styles from './SettingsSection.module.css';

type SettingsSectionProps = {
  inner: string;
  alignments: string[];
};

const SettingsSection = ({ inner, alignments }: SettingsSectionProps) => {
  const [alignment, setAlignment] = useState(alignments[0].toLowerCase());

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.section}>
        <Typography component="span">{inner}</Typography>
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
