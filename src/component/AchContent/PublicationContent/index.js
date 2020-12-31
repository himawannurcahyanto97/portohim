import React, { useState, useEffect, useCallback } from "react";
import {TitleContent} from "../../ExpContent/style";
import { GlobalContent } from "../../GlobalContent";
import axios from "axios";
import {
    PubTable,
    TableGrid,
    TabledContent,
} from "./style"

const ManagePubliTableData = ({data1,data2,data3,data4,data5}) => {
    return(
        <TableGrid>
            <TabledContent>{data1}</TabledContent>
            <TabledContent>{data2}</TabledContent>
            <TabledContent>{data3}</TabledContent>
            <TabledContent>{data4}</TabledContent>
            <TabledContent>{data5}</TabledContent>
        </TableGrid>
    )
};

const PublicationContent = () => {
    const [data, setData] = useState([]);

    const loadData = useCallback(() => {
        const url = "https://spreadsheets.google.com/feeds/cells/1X_U81VdWD23p5lNXMbDSUOBK4Ec7qWIkyNAQvQiO6iI/1/public/full?alt=json";
        axios.get(`${url}`)
            .then (res => {
            const getData =  res.data.feed.entry.map(obj => obj.gs$cell);
            setData(getData);
            })
            .catch(error => {
            console.error(error);
            })
    }, []);

    useEffect(() => {
        loadData();
    }, [])
    
    const colmn1 = data.filter(x => (x['col'] == 1)).map(obj=>obj.inputValue);
    const colmn2 = data.filter(x => (x['col'] == 2)).map(obj=>obj.inputValue);
    const colmn3 = data.filter(x => (x['col'] == 3)).map(obj=>obj.inputValue);
    const colmn4 = data.filter(x => (x['col'] == 4)).map(obj=>obj.inputValue);
    const colmn5 = data.filter(x => (x['col'] == 5)).map(obj=>obj.inputValue);
    const allcolumn = [colmn1,colmn2,colmn3,colmn4,colmn5];

    return(
        <GlobalContent>
            <TitleContent>Publication</TitleContent>
            <PubTable>
                {allcolumn.map((data, index) => (
                    <ManagePubliTableData
                    key={index}
                    data1={data[0]}
                    data2={data[1]}
                    data3={data[2]}
                    data4={data[3]}
                    data5={data[4]}
                    />))}
            </PubTable>
        </GlobalContent>
    );
};

export default PublicationContent;