import Container from "@material-ui/core/Container";

import TopBar from "./Components/TopBar";
import FacilityPage from "./Components/FacilityPage";


function App() {
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

export default App;
