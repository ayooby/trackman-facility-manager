import Grid from "@material-ui/core/Grid";
import FacilityItem from "./FacilityItem";

const FacilityList = ({ facilities }) => {
  return (
    <Grid container justify="center">
      {facilities.map((facility) => (
        <FacilityItem facility={facility} key={facility.id} />
      ))}
    </Grid>
  );
};

export default FacilityList;
