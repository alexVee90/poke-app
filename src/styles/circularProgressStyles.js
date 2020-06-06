export default theme => ({
  circle: {
    color: theme.palette.primary.main,
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: (props) => props.pokemon ? 'scale(1)' : 'scale(1.5)'
  }
});