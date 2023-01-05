import React, {useEffect, useState} from 'react';
import {sendApiGetRequest, sendApiPostRequest} from "./ApiRequest";
import Button from '@mui/material/Button';
import './cssFilles/CreateGame.css';
import Match from './Match'
import Logged from "./Logged";
import './cssFilles/Table-League.css'

function CreateGame() {

    const [matches, setMatches] = useState([])
    const [teams, setTeams] = useState([])
    const [team1, setTeam1] = useState(null)
    const [team2, setTeam2] = useState(null)
    const [selected1, setSelected1] = useState(null)
    const [selected2, setSelected2] = useState(null)
    const [userid, setUserid] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            sendApiGetRequest("http://localhost:8989/get-all-live-matches", (response) => {
                    const currentMatches = response.data;
                    setMatches(currentMatches)

                }
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            sendApiGetRequest("http://localhost:8989/get-all-teams", (response) => {
                    const currentTeams = response.data;
                    setTeams(currentTeams)
                    console.log(userid)
                }
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const handleClick = (e) => {
        const selectedTeam = e.target.value;
        setTeam1(selectedTeam);
        setSelected1(selectedTeam);

    }

    const handleClick2 = (e) => {
        const selectedTeam = e.target.value;
        setTeam2(selectedTeam);
        setSelected2(selectedTeam);

    }

    const checkIfSame = (name) => {
        if (selected1 === name) {
            return true;
        }
        if (selected2 === name) {
            return true;
        }

        return false;
    }


    const onClick2 = () => {
        sendApiPostRequest("http://localhost:8989/add-match", {
                team1: team1,
                team2: team2,
                userIdThatUpdate: userid
            }, (response) => {
            }
        );

    }


    return (

        <div>

            <Logged/>
            <br/>
            <br/>
            <h1 className='title-header'><u>Create Game</u> </h1>
            <br/>
            <br/>
            <br/>
            <select onChange={(e) => handleClick(e)} className="sizeOption" style={{marginLeft: 1400}}>
                <option disabled selected style={{color: "gray"}}>--select team 1--</option>
                {
                    teams.map((team, i) => <option hidden={checkIfSame(team.name)} value={team.name}
                                                   className="sizeOption" style={{fontSize:50}}>{team.name}</option>
                    )
                }

            </select>

            <h1 style={{display: 'inline-block', color: "black"}}> VS. </h1>


            <select  onChange={(e) => handleClick2(e)} className="sizeOption" >
                <option disabled selected style={{color: "gray"}}>--select team 2--</option>
                {
                    teams.map((team, i) => <option hidden={checkIfSame(team.name)} value={team.name}
                                                   className="sizeOption"  style={{fontSize:50}}>{team.name}</option>)
                }
                })
                }
            </select>


            <Button className="button-85" variant="contained" color="success" style={{marginLeft: 50}}
                    onClick={onClick2} disabled={selected1 === null || selected2 === null}>Create Game</Button>
            <br/>
            <br/>
            <br/>

            {matches.map((match, index) => {
                    return (
                        <Match align="center"
                               matchId={match.id}
                               prop1={match.team1.name}
                               prop2={match.team2.name}
                               prop3={match.team1_goals}
                               prop4={match.team2_goals}
                               userId={userid}/>
                    )
                }
            )}

        </div>
    )


}

export default CreateGame;

