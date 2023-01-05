import React, {useEffect, useState} from 'react';
import {sendApiGetRequest} from "./ApiRequest";
import TableLea from "./TableLea";
import Logged from "./Logged";
import './cssFilles/Table-League.css'



function TableLeague() {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        sendApiGetRequest("http://localhost:8989/get-table-league-end-matches", (response) => {
                const currentTeams = response.data;
                setTeams(currentTeams)
                console.log(teams)
            }
        );
    });
    return (
        <div>
            <Logged/>
            <br/>
            <br/>
            <h1 className="title-header" ><u>Table League</u> </h1>
            <TableLea data = {teams}/>
        </div>
    );
}

export default TableLeague;