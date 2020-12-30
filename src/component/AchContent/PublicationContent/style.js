import styled from 'styled-components';

export const PubTable = styled.div`
  width: 100%;
  overflow:auto;
  align-self:center;
  text-align:center;
`;

export const TableGrid = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const TabledContent = styled.div`
  flex-basis: ${(props) => (props.flexed)};
  border: 1px solid #BDBDBD;
  padding:6px;
`;