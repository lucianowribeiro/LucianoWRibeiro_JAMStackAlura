import typographyVariants from './typographyVariants';

const light = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  // Feedback colors
  error: {
    main: {
      color: '#dc3545',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28a745',
      contrastText: '#fff',
    },
  },
};
const dark = {
  background: {
    light: {
      color: '#000',
    },
    main: {
      color: '#030506',
    },
  },
  borders: {
    main: {
      color: '#181F22',
    },
  },
  primary: {
    main: {
      color: '#F27895',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FFA59A',
      contrastText: '#000',
    },
  },
  tertiary: {
    main: {
      color: '#FFFFFF',
      contrastText: '#fff',
    },
    light: {
      color: '#D5D5D5',
      contrastText: '#fff',
    },
  },
  // Feedback colors
  error: {
    main: {
      color: '#EB5C50',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28a745',
      contrastText: '#fff',
    },
  },
};
const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};
export default {
  light,
  dark,
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  fontFamily: '\'Rubik\',sans serif',
  transition: '200ms ease-in-out',
};
