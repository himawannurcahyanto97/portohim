import styled from 'styled-components';

export const PubTable = styled.div`
  overflow: auto;
  height: 250px;
  text-align:center;
`;

export const TableGrid = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const TabledContent = styled.div`
  border: 0.5px solid #BDBDBD;
  padding: 5px;
  @media screen and (max-width: 1140px) {
    box-sizing: border-box;
  }
`;