import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      textTransform: 'capitalize',
      fontSize: '48px',
    },
    h2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      textTransform: 'capitalize',
      fontSize: '40px',
    },
    h4: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 600,
      textTransform: 'capitalize',
      fontSize: '32px',
    },
    h5: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      textTransform: 'capitalize',
      fontSize: '24px',
    },
    button: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontSize: '24px',
    },
  },
  palette: {
    primary: {
      main: '#097969',
    },
  },
  shape: {
    borderRadius: 40,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '5px 10px',
          textTransform:'capitalize',
          fontSize: '18px'
        },
      },
    },
  },
});
