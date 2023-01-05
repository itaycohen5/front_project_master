import './cssFilles/MatchResult.css'

const logos = [{name: 'Chelsea', src: '/Chelsea.png'}, {name: 'Barcelona', src: '/Barcelona.png'},
    {name: 'Bayren', src: '/Bayren.png'}, {name: 'Benfica', src: '/Benfica.png'},
    {name: 'Real Madrid', src: '/Real Madrid.png'}, {name: 'Inter', src: '/Inter.png'},
    {name: 'Liverpool', src: '/Liverpool.png'}, {name: 'Milan', src: '/Milan.png'},
    {name: 'Paris', src: '/Paris.png'}, {name: 'Tottenham', src: '/Tottenham.png'},
    {name: 'Dortmund', src: '/Dortmund.png'}, {name: 'Napoli', src: '/Napoli.png'}
]


function MatchResult(props) {

    let match = props.data



    return (
        <div >
            <div className='result-match-component'>
                <div className='font-result' style={{
                    color: match.team1_goals === match.team2_goals ? 'black' : (match.team1_goals > match.team2_goals ? 'green' : 'red') ,
                }}> {match.team1.name}</div>
                <div className='font-result'> {match.team1_goals}</div>
                <div className='font-result'>-</div>
                <div className='font-result'> {match.team2_goals}</div>
                <div className='font-result' style={{
                    color: match.team1_goals === match.team2_goals ? 'black' : (match.team1_goals < match.team2_goals ? 'green' : 'red') ,
                }}> {match.team2.name}</div>
            </div>
        </div>


    )
}

export default MatchResult

