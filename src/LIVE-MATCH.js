import React, {useEffect, useState} from 'react';
import {sendApiGetRequest} from "./ApiRequest";
import MatchResult from "./MatchResult";
import Logged from "./Logged";
import './cssFilles/Table-League.css'

function LiveMatch() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            sendApiGetRequest("http://localhost:8989/get-all-live-matches", (response) => {
                    const currentMatches = response.data;
                    setMatches(currentMatches)
                    console.log(matches)
                }
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (

        <div>
            <Logged/>
            <br/>
            <br/>
            <h1 className='title-header'><u>Live Matches</u></h1>
            <br/>
            <br/>
            {matches.length === 0 ?
                <h1 className='message'>There Is No Live Matches Yet!</h1> : ""}
            {matches.map((match, index) => {
                return (
                    <MatchResult data={match}/>
                )
            })
            }
        </div>
    );
}

export default LiveMatch;




