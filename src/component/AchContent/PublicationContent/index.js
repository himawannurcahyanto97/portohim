import React, { useState, useEffect } from "react";
import {TitleContent} from "../../ExpContent/style";
import { GlobalContent } from "../../GlobalContent";
import axios from "axios";
import {
    PubTable,
    TableGrid,
    TabledContent,
    TableDirection
} from "./style"

const PublicationContent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL).then (res => {
            const respon = res.data
            const getData =  respon.feed.entry.map(obj => obj.gs$cell);
            setData(getData);
        });
      }, [data]);
    
    const ManagePubliTableData = ({data1,data2,data3,data4,data5}) => {
        return(
            <TableGrid>
                <TabledContent flexed = '15%'>{data1}</TabledContent>
                <TabledContent flexed = '10%'>{data2}</TabledContent>
                <TabledContent flexed = '25%'>{data3}</TabledContent>
                <TabledContent flexed = '15%'>{data4}</TabledContent>
                <TabledContent flexed = '25%'>{data5}</TabledContent>
            </TableGrid>
        )
    };

    const col1 = x => (x['col'] == 1);
    let colmn1 = data.filter(col1);
    const column1 = colmn1.map(obj=>obj.inputValue);

    const col2 = x => (x['col'] == 2);
    let colmn2 = data.filter(col2);
    const column2 = colmn2.map(obj=>obj.inputValue);

    const col3 = x => (x['col'] == 3);
    let colmn3 = data.filter(col3);
    const column3 = colmn3.map(obj=>obj.inputValue);

    const col4 = x => (x['col'] == 4);
    let colmn4 = data.filter(col4);
    const column4 = colmn4.map(obj=>obj.inputValue);

    const col5 = x => (x['col'] == 5);
    let colmn5 = data.filter(col5);
    const column5 = colmn5.map(obj=>obj.inputValue);

    const allColumn = [column1,column2,column3,column4,column5];
    return(
        <GlobalContent>
            <TitleContent>Publication</TitleContent>
            <PubTable>
                {allColumn.map(data => (
                    <ManagePubliTableData
                    data1={data[0]}
                    data2={data[1]}
                    data3={data[2]}
                    data4={data[3]}
                    data5={data[4]}
                    />
                ))}
            </PubTable>
        </GlobalContent>
    );
};

export default PublicationContent;