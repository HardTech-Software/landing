import { StylesProps } from '@/models/styles-props.interface';

export const styles: StylesProps = {
  containerTop: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '100px',
  },
  textTop: {
    fontSize: '14px',
    marginBottom: '20px',
    letterSpacing: '.2em',
  },

  textCenter: {
    fontSize: '40px',
    letterSpacing: '-2px',
    fontWeight: 500,
    marginBottom: '12px',
  },

  textBottom: {
    fontSize: '18px',
    maxWidth: 900,
    marginBottom: '50px',
  },

  containerBottom: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};
