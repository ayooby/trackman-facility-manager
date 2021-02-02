import { Card, CardContent, Typography } from "@material-ui/core";

export const FacilityItem = ({ facility }) => {
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
