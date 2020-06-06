export default theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px'
    },
    margin: `auto`,
    marginTop: theme.spacing(2)
  },
  circle: {
    color: theme.palette.primary.main,
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'scale(1.5)'
  }
})