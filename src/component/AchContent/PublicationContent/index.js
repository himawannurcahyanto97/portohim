import React from "react";
import {TitleContent} from "../../ExpContent/style";
import { GlobalContent } from "../../GlobalContent";
import { PubliData } from "../../../alldata/PublicationContent";
import {
    PubTable,
    TableStyle
} from "./style";

const ManagePubliTableData = ({data1,data2,data3,data4}) => {   
    return(
        <tr>
            <td>{data1}</td>
            <td>{data2}</td>
            <td>{data3}</td>
            <td>{data4}</td>
        </tr>
    )
};

const PublicationContent = () => {
    return(
        <GlobalContent>
            <TitleContent>Publication</TitleContent>
            <PubTable>
                <TableStyle>
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Paper Title</th>
                                <th>Conf. Name</th>
                                <th>Pub. Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            { PubliData.map((data,idx) => (
                                <ManagePubliTableData
                                    key={idx}
                                    data1={data.year}
                                    data2={data.papertitle}
                                    data3={data.confname}
                                    data4={data.pubdate}
                                />
                            ))}
                        </tbody>
                    </table>
                </TableStyle>
            </PubTable>
        </GlobalContent>
    );
};

export default PublicationContent;