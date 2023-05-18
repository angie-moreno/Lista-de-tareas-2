import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Tareas from "./Pages/Tareas.jsx";
import SobreNosotros from "./Pages/SobreNosotros";
import Menu from "./Pages/Menu";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import bgImage from "../src/images/listadetareas.jpg";
import eImage from "../src/images/encabezado.jpg";

function App() {
  return (
    <BrowserRouter>
      <Grid
        templateAreas={`"header header"
                  "main main"`}
        gridTemplateRows={"80px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="#90CDF4" area={"header"}>
          <Box bgImage={`url(${eImage})`} bgRepeat="no-repeat" bgSize="cover">
            <Menu />
          </Box>
        </GridItem>

        <GridItem pl="2" bg="#BEE3F8" area={"main"}>
          <Box bgImage={`url(${bgImage})`} bgRepeat="no-repeat" bgSize="cover">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/tareas" element={<Tareas />} />
            </Routes>
          </Box>
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
