import img from './EDLoader1.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
});

export const EDSpinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>Loading</h3>
      <img
        id='imgLoading'
        width='300'
        alt='Loading'
        src='https://edassets.org/static/img/svg/EDLoader1.svg'
      />
    </div>
  );
};
