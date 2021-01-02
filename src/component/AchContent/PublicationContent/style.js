import styled from 'styled-components';

export const PubTable = styled.div`
  overflow: auto;
  height: 250px;
  text-align:center;
`;

export const TableStyle = styled.div`
 td,  th {
  border: 1px solid #ddd;
  padding: 8px;
}

 tr:nth-child(even){background-color: #f2f2f2;}

 tr:hover {background-color: #ddd;}

 th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: black;
  color: white;
}
`;