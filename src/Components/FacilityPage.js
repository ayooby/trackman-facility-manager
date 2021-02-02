import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import FacilityList from "./FacilityList";

const FacilityPage = () => {
  const facilities = [];
  return (
    <Container>
      {facilities.length > 0 ? (
        <FacilityList facilities={facilities} />
      ) : (
        <Grid container spacing={2} justify="center" style={{marginTop: '20%'}}>
          <Button size="large" variant="contained" color="primary">
            New Facility
          </Button>
        </Grid>
      )}
    </Container>
  );
};

export default FacilityPage;
