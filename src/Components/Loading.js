import { Grid, CircularProgress } from "@material-ui/core";

export const Loading = (props) => {
  return (
    <Grid container spacing={2} justify="center" {...props}>
      <CircularProgress />
    </Grid>
  );
};
