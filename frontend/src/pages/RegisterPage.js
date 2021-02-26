import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterScreen(props) {

  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Senha ou confirmação de senha não são iguais.');
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Criar conta
        </Typography>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            id="name"
            label="Nome"
            name="name"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="name"
            autoFocus
            required
            onChange={e => setName(e.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            name="email"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="email"
            autoFocus
            required
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            name="password"
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="current-password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirme a senha"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="current-password"
            required
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            className={classes.submit}
            color="primary"
            variant="contained"
            fullWidth
          >
            Registrar
          </Button>
          <Grid container>
            <Grid item xs>
              Já é cadastrado?
              <Link to={`/signin?redirect=${redirect}`} variant="body2">
                Faça o login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}