import React from 'react';
import {
    colors,
    Avatar,
    CssBaseline,
    Typography,
    Container,
    Box,
    Grid,
    makeStyles,
    Button,
    FormControlLabel,
    Checkbox,
    TextField,
    Link
  } from '@material-ui/core';
  import { useNavigate } from 'react-router-dom';
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));
function Login() {
    const classes = useStyles();
    const navigate = useNavigate();
  return (
    <div className="App">
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => navigate('/dashboard')}
            >
              Login
            </Button>
            <Grid item>
                <Link href="/signup" variant="body2">
                  Not a member?  Signup
                </Link>
              </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
  
  
