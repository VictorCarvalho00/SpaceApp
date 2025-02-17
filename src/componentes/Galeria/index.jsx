import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";

const GaleriaConteiner = styled.div`
    display: flex;
`

const SecacaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaConteiner>
                <SecacaoFluida>
                    <Titulo> Navege pela galeria </Titulo>
                  <ul> 
                     {fotos.map( foto => <li> {foto.path} </li>)}
                  </ul>
                </SecacaoFluida>
                <Populares />
            </GaleriaConteiner>
        </>
    );
}

export default Galeria