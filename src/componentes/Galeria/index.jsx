import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem"

const GaleriaConteiner = styled.div`
    display: flex;
    gap: 24px;
`

const SecacaoFluida = styled.section`
    flex-grow: 1;
`
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
    return (
        <>
            <Tags />
            <GaleriaConteiner>
                <SecacaoFluida>
                    <Titulo> Navege pela galeria </Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem
                        aoZoomSolicitado={aoFotoSelecionada}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecacaoFluida>
                <Populares />
            </GaleriaConteiner>
        </>
    );
}

export default Galeria