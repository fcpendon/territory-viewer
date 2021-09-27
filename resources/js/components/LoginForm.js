import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const LoginForm = (props) => {
  const token = document.head.querySelector('meta[name="csrf-token"]').content;

  return (
    <div>
      <Paper style={{ width: 300, margin: '0px auto', padding: 20 }}>
        <form method="POST">
          <input type="hidden" name="_token" value={token} />
          <Typography variant="h5" color="primary" sx={{ my:3, textAlign: 'center' }}>
            Territory Viewer
          </Typography>
          <TextField label="Username" name="username" variant="standard" fullWidth required autoFocus />
          <TextField label="Password" name="password" variant="standard" type="password" fullWidth required />
          <Button type="submit" variant="contained" sx={{ mt: '40px' }} fullWidth>Log in</Button>
        </form>
      </Paper>

      {props.error && <Alert severity="error" sx={{ width: 300, margin: '10px auto' }}>{props.error}</Alert>}
    </div>
  );
}

export default LoginForm;

if (document.getElementById('login-form')) {
  const element = document.getElementById('login-form');
  const error = element.dataset.error;

  ReactDOM.render(<LoginForm error={error} />, document.getElementById('login-form'));
}
