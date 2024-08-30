// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Example primary color
    },
    secondary: {
      main: '#dc004e', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Example font family
  },
});

export default Theme;
