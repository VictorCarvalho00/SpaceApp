import styled from "styled-components"

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = (props) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado {...props} />
      <IconeLupa src="/public/icones/lupa.png" alt="ícone de lupa" />
    </ContainerEstilizado>
  );
}

export default CampoTexto


// const BarraDepesquisa = styled.div`
//   position: relative;
//     display: inline-block;
// `;

/* position: absolute;
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
} */

