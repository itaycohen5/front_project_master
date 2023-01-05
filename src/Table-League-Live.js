import React, {useEffect, useState} from 'react';
import {sendApiGetRequest} from "./ApiRequest";
import TableLea from "./TableLea";
import Logged from "./Logged";
import './cssFilles/Table-League.css'


function TableLeagueLive() {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        sendApiGetRequest("http://localhost:8989/get-full-table-league", (response) => {
                const currentTeams = response.data;
                setTeams(currentTeams)
            }
        );
    }, [teams]);


    return (

        <div>
            <Logged/>
            <br/>
            <br/>
            <h1 className='title-header'><u>Live Matches Table League</u> </h1>
            <TableLea data = {teams}/>
        </div>
    );
}

export default TableLeagueLive;