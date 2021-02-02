import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const FacilityItem = ({ facility }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {facility.title}
        </Typography>
        <Typography>{facility.type}</Typography>
        {facility.address}
      </CardContent>
    </Card>
  );
};

export default FacilityItem;
