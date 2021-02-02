import { Grid, Button, Container } from "@material-ui/core";

import { FacilityList } from "./FacilityList";

export const FacilityPage = () => {
  const facilities = [];
  return (
    <Container>
      {facilities.length > 0 ? (
        <FacilityList facilities={facilities} />
      ) : (
        <Grid
          container
          spacing={2}
          justify="center"
          style={{ marginTop: "20%" }}
        >
          <Button size="large" variant="contained" color="primary">
            New Facility
          </Button>
        </Grid>
      )}
    </Container>
  );
};
