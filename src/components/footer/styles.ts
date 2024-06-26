import { StylesProps } from '@/models/styles-props.interface';

export const styles: StylesProps = {
  containerTop: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    flexWrap: 'wrap',
  },

  sectionLeft: {
    maxWidth: { md: 350 },
  },

  sectionCenter: {
    flex: 1,
    paddingBottom: '40px',
    display: 'flex',
    typography: 'body1',
    '& > :not(style) ~ :not(style)': {
      ml: 2,
    },
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    '&.MuiBox-root': {
      margin: 0,
      minWidth: 200,
    },
  },

  sectionRight: {
    padding: '0 0 40px 20px',
  },

  textTop: {
    fontSize: '20px',
    marginBottom: '30px',
  },

  textBottom: {
    marginBottom: '20px',
  },

  button: {
    color: '#fff',
    borderRadius: '0 3px 3px 0',
    height: 56,
  },

  title: {
    fontSize: '20px',
    marginBottom: '30px',
  },

  iconButton: {
    height: 40,
    color: '#fff',
    marginRight: '10px',
  },

  iconButtonFacebook: {
    backgroundColor: '#3B5998',
    '&:hover': {
      backgroundColor: '#3B5998',
    },
  },
  iconButtonYoutube: {
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  iconButtonLinkedin: {
    backgroundColor: '#0077B5',
    '&:hover': {
      backgroundColor: '#0077B5',
    },
  },
  iconButtonInstagram: {
    backgroundColor: '#405DE6',
    '&:hover': {
      backgroundColor: '#405DE6',
    },
  },

  iconContainer: {
    display: 'flex',
    justifyContent: 'initial',
  },

  copyContainer: {
    textAlign: 'center',
    padding: '16px',
  },

  copy: {
    fontSize: '14px',
    lineHeight: 2,
  },
};
