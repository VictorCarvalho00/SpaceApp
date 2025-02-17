import styled from "styled-components"

const BarraDepesquisa = styled.div`
  position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 602px;
    height: 60px; 
    padding: 12px 16px;
    border-radius: 60px; 
    border: 2px solid;
    border-image-source: linear-gradient(90deg, #d9d9d9, #e573fc);
    border-image-slice: 1;
    background-color: transparent;

    h1 {
      color: white;
      font-size: 20px;
      margin: 0;
    }
`

const CampoTexto = () => {
    return (
        <BarraDepesquisa>
            <h1>o que voce procura?</h1>
            <img
                src="./public/imagens/search.png" />
        </BarraDepesquisa>
    )
}

export default CampoTexto