import { StylesProps } from '@/models/styles-props.interface';

export const styles = (shadow: boolean, show: boolean): StylesProps => ({
  root: {
    height: 85,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 3%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    zIndex: 9999,
    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
    boxShadow: shadow ? '0px 10px 15px 0px rgba(25, 25, 25, 0.1)' : 'none',
  },
  item: {
    display: 'inline-block',
    width: 'auto',
    cursor: 'pointer',
  },
  listItems: {
    display: 'flex',
    marginLeft: 5,
    alignItems: 'center',
  },
});
