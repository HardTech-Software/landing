import { StylesProps } from '@/models/styles-props.interface';

export const styles: StylesProps = {
  links: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '20px',
    marginBottom: '30px',
  },

  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  item: {
    // color: 'red',
    fontWeight: 300,
    fontSize: '18px',
    textDecoration: 'underline transparent',
    transition: '.3s',
    marginBottom: '20px',
  },
};
