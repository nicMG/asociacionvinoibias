import React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';

const theme = createTheme();

function AdminSignUp(props) {
  const { signUp, error } = props;

  if (error) {
    console.log(error);
  }

  return (
    <div className="signup-main">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className="tarjeta">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h2">
              Registro
            </Typography>
            <Box component="form" onSubmit={signUp} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="nombre"
                label="Nombre"
                name="nombre"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="apellidos"
                label="Apellidos"
                name="apellidos"
                autoComplete="apellidos"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="password"
                id="contraseña"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Registrarse
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="signin">
                    'Already have an account? Sign In instead'
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default AdminSignUp;
