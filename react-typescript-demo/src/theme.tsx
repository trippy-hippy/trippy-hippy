import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      // seafoam green
      main: '#5CCD8B',
    },
    secondary: {
      // dark purple-blue
      main: '#3C2A80',
    },
    warning: {
      // yellow
      main: '#FFC107',
    },
  },
  typography: {
    fontFamily: '"Source Sans 3 Variable", sans-serif',
  },
});

export default theme;
