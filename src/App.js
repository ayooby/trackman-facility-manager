import { Container } from "@material-ui/core";

import { TopBar } from "./Components/TopBar";
import { FacilityPage } from "./Components/FacilityPage";

export function App() {
  return (
    <>
      <TopBar />
      <main>
        <Container>
          <FacilityPage />
        </Container>
      </main>
    </>
  );
}
