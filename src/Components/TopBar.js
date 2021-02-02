import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const TopBar = () => {
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

export default TopBar;
