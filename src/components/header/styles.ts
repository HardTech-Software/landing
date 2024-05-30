import { StylesProps } from '@/models/styles-props.interface';

export const styles: StylesProps = {
  root: {
    height: 85,
    display: 'flex',
    alignItems: 'center',
    padding: '0 3%',
    justifyContent: 'space-between',
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
};
