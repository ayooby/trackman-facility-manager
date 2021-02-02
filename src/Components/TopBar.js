import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const TopBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          TrackMan - Facility Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
