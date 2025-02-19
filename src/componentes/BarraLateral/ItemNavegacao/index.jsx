import { styled } from "styled-components";

const ItemListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$Ativo ? '#7b78E5' : '#D9D9D9'};
    font-family: ${props => props.$Ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`
const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, Ativo = false }) => {
    return (
        <ItemListaEstilizado $Ativo={Ativo}>
            <img src={Ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    );
}

export default ItemNavegacao 