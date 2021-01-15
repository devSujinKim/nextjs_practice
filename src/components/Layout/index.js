import Head from 'next/head';
import Header from '../Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    '& a': {
      padding: '0 22px',
      textDecoration: 'none',
      fontSize: '1.4rem',
      color: theme.palette.primary.main,
    },
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <div className={classes.root}>
          <Header />
        </div>
      </Head>
    </>
  );
};

export default Layout;
