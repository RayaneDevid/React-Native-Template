import { TextStyle } from 'react-native';

type FontWeight = TextStyle['fontWeight'];

export const theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#222222',
    text: {
      primary: '#000000',
      secondary: '#666666',
      light: '#FFFFFF',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 'bold' as FontWeight,
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold' as FontWeight,
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal' as FontWeight,
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
  },
}; 