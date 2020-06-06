import { fade } from '@material-ui/core/styles';

export default theme => ({
  cardContent: {
    backgroundColor: fade(theme.palette.common.black, 0.05),
    textAlign: 'center'
  },
  media: {
    height: '300px',
  },
  circle: {
    color: theme.palette.primary.main,
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})