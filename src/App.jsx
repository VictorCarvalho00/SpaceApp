import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import CampoTexto from "./componentes/CampoTexto";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria";
import { useState } from "react";

import fotos from './fotos.json';

const FundoGradiante = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const[fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  return (
    <FundoGradiante>
      <EstilosGlobais />
      <AppContainer >
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
        </MainContainer>
        <CampoTexto />
      </AppContainer>
    </FundoGradiante>
  );
}

export default App
