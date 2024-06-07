import { StylesProps } from '@/models/styles-props.interface';

export const styles: StylesProps = {
  cardContainer: {
    minWidth: 260,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 0,
    margin: '10px',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
    },
  },

  cardMedia: {
    width: 55,
    // height: 'auto',
    paddingTop: '50px',
  },

  text: {
    fontSize: '20px',
    lineHeight: 1.4,
    fontWeight: 500,
    textAlign: 'center',
    padding: '20px 20px 0 20px',
    maxWidth: '200px',
  },

  more: {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 400,
  },
};
