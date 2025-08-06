import styled from '@emotion/styled';
import { AppBar, MenuItem, Toolbar } from '@mui/material';

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-evenly',
  }));
  return (
    <>
      <AppBar
        position="absolute"
        style={{ backgroundColor: 'rgb(35,35,35, 0.8)' }}
      >
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
