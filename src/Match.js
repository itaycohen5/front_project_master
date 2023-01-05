import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {sendApiPostRequest} from "./ApiRequest";
import './cssFilles/Match.css'

function Match(props) {
    const {matchId,prop1, prop2, prop3, prop4, userId} = props;

    const [goalsTeam1, setGoalsTeam1] = useState(prop3);
    const [goalsTeam2, setGoalsTeam2] = useState(prop4);
    const [inputValue1, setInputValue1] = useState(goalsTeam1);
    const [inputValue2, setInputValue2] = useState(goalsTeam2);

    useEffect(()=>{
        setGoalsTeam1(prop3)
        setGoalsTeam2(prop4)
    },[{inputValue1,inputValue2}])

    const onClickUpdate = (id, inputValue1, inputValue2, userid) => {

            sendApiPostRequest("http://localhost:8989/update-match", {
                    matchId: id,
                    goalsTeam1: inputValue1,
                    goalsTeam2: inputValue2,
                    userIdThatUpdate: userid
                }, (response) => {
                    console.log(response.data)
                }
            );
            setGoalsTeam1(inputValue1);
            setGoalsTeam2(inputValue2);
        }


    const onClickEndGame = (id) => {
        sendApiPostRequest("http://localhost:8989/finish-match", {
                matchId: id
            }, (response) => {
                console.log(response.data)
            }
        );
    }


    const teamOneGoalsOnChange = (e) => {
        const teamOneGoals = e.target.value;
        setInputValue1(teamOneGoals)
        console.log(teamOneGoals)
    }

    const teamTwoGoalsOnChange = (e) => {
        const teamTwoGoals = e.target.value;
        setInputValue2(teamTwoGoals);
        console.log(teamTwoGoals)
    }

    return (
        <div className='Match-component'>
            <h1 className='team1-name'>{prop1}</h1>
            <input type="number"  min={0} className='input' value={inputValue1} onChange={teamOneGoalsOnChange}/>
            <h1 className='team1-name'>{prop3} </h1>
            <h1 className='team1-name'>-</h1>
            <h1 className='team1-name'>{prop4} </h1>
            <input type="number" min={0} className='input' value={inputValue2} onChange={teamTwoGoalsOnChange}/>
            <h1 className='team1-name'>{prop2}</h1>


            <Button className="button-85" style={{height:80,
                display: 'inline-block',
                float: "right",
                marginRight:35,
                marginTop:20,
                background:"red"}} variant="contained"
                    onClick={() => onClickEndGame(matchId)}>END GAME</Button>


            <Button style={{  display: 'inline-block',
                height: 80,
                width: 150,
                float:"right",
                marginRight: 50,
                marginTop: 20}} variant="contained"
                    onClick={() => onClickUpdate(matchId, inputValue1, inputValue2, userId )}>UPDATE</Button>



        </div>
    );
}

export default Match;
