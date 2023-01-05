import './App.css';
import * as React from 'react';
import './cssFilles/Wrapper.css'
import Login from "./Login";
import {useEffect, useState} from "react";
import Register from "./Register";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Logged from "./Logged";
import LiveMatch from "./LIVE-MATCH";
import TableLeague from "./Table-League";
import TableLeagueLive from "./Table-League-Live";
import CreateGame from "./CreateGame";


function Wrapper() {


    const isLogged = ({isLogged}) => (isLogged ? "active-menu" : "hide");

    const [logFlag , setLogFlag] = useState(false);

    const [value, setValue] = React.useState(0);
            const handleChange = (event, newValue) => {
            setValue(newValue);
        };
            return (
            <div  style={{maxHeight:300}}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Login/>}/>
                        <Route path={"/register"} element={<Register/>}/>
                        <Route path={"/logged"} element={<Logged />}/>
                        <Route path={"/LIVE-MATCH"} element={<LiveMatch/>}/>
                        <Route path={"/LeagueTable"} element={<TableLeague/>}/>
                        <Route path={"/LeagueTableLive"} element={<TableLeagueLive/>}/>
                        <Route path={"/CreateGame"} element={<CreateGame/>}/>
                    </Routes>
                    </BrowserRouter>
            </div>
            )
}

export default Wrapper;

//    const activeMenuClass = (
//     {
//         isActive
//     }
// )=> (isActive?"active-menu": "non-active-menu");

// const [value, setValue] = React.useState(0);
//
// const handleChange = (event: React.SyntheticEvent, newValue: number) =>
//     {

//     setValue(newValue);
// };


//
// <BrowserRouter>
//     {links.map((link)=>{
//         return(
//             <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//                 <NavLink
//                     className={activeMenuClass}
//                     to={link.to}>
//                     <Tabs value={value} onChange={handleChange} centered>
//                         <Tab label= {link.text} value={link.NewValue}/>
//                     </Tabs>
//                 </NavLink>
//             </Box>
//         )
//     })}
//
//     <br/>
//     <Routes>
//         <Route path={"/login"} element={<Login/>}/>
//         <Route path={"/LIVE-MATCH"} element={<LiveMatch/>}/>
//         <Route path={"/LeagueTable"} element={<TableLeague/>}/>
//         <Route path={"/LeagueTableLive"} element={<TableLeagueLive/>}/>
//     </Routes>
// </BrowserRouter>