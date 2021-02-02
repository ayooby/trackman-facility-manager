import { useEffect, useState } from "react";
import { Grid, Button, Container } from "@material-ui/core";

import { FacilityList } from "./FacilityList";
import { Loading } from "./Loading";
import { getFacilityList } from "../Api";

export const FacilityPage = () => {
  const [status, setStatus] = useState("loading");
  const [facilities, setFacilities] = useState([]);

  const FacilityBox = () => {
    if (facilities.length > 0) return <FacilityList facilities={facilities} />;
    return (
      <Grid container spacing={2} justify="center" style={{ marginTop: "20%" }}>
        <Button size="large" variant="contained" color="primary">
          New Facility
        </Button>
      </Grid>
    );
  };

  useEffect(() => {
    const loadFacilityList = async () => {
      const response = await getFacilityList();
      setFacilities(response);
      setStatus("loaded");
    };
    loadFacilityList();
  });

  return (
    <Container>
      {status === "loading" ? (
        <Loading style={{ marginTop: "20%" }} />
      ) : (
        <FacilityBox />
      )}
    </Container>
  );
};
