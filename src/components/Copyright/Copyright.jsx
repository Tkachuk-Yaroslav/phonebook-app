import { Typography } from '@mui/material';

const Copyright = props => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <a
        color="inherit"
        href="https://github.com/Tkachuk-Yaroslav"
        style={{ marginRight: '4px', color: 'inherit' }}
      >
        Yaroslav Tkachuk
      </a>
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
