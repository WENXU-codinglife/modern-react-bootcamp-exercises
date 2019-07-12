export default {
  root: { backgroundColor: 'skyBlue', height: '100vh' },
  container: { width: '70%', margin: 'auto' },
  nav: {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h1': {
      margin: 0,
      padding: '.5rem',
      fontSize: '1.3rem'
    },
    '& a': {
      textDecoration: 'none',
      color: 'white'
    }
  }
};
