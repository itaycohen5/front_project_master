import './App.css';
import {BrowserRouter, NavLink, Route, Routes, useLocation} from "react-router-dom";
import * as React from 'react';
import Login from "./Login";
import LiveMatch from "./LIVE-MATCH";
import TableLeague from "./Table-League";
import TableLeagueLive from "./Table-League-Live";
import {Box, Tab, Tabs} from "@mui/material";
import {TabContext, TabList} from "@mui/lab";
import './cssFilles/Wrapper.css'
import CreateGame from './CreateGame';


function Logged() {

    const {state} = useLocation();
    const activeMenuClass = ({isActive}) => (isActive ? "active-menu" : "non-active-menu");

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const links = [{to: "/CreateGame", text: "Create Game", NewValue: "1"},
        {to: "/LIVE-MATCH", text: "Live Games", NewValue: "2"},
        {to: "/LeagueTable", text: " Table League ", NewValue: "3"},
        {to: "/LeagueTableLive", text: " Table League - live", NewValue: "4"},
        {to: "/", text: "log out", NewValue: "5"}
    ]


    return (
        <div>

            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider', background: "#847F52"}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {links.map((link) => {
                                return (
                                    <NavLink style={{margin: 50, color: "black"}}
                                             className={activeMenuClass}
                                             to={link.to}>
                                        <Tabs value={value} onChange={handleChange}>
                                            <Tab style={{fontSize: 40}} label={link.text} value={link.NewValue}/>
                                        </Tabs>
                                    </NavLink>
                                )
                            })}

                            <h1 style={{marginBottom: 20, marginLeft: 1600, marginTop: 30, fontSize: 50}}>Football
                                Web</h1>
                        </TabList>
                    </Box>
                </TabContext>
            </Box>


            <Routes>
                <Route path={"/LIVE-MATCH"} element={<LiveMatch/>}/>
                <Route path={"/LeagueTable"} element={<TableLeague/>}/>
                <Route path={"/LeagueTableLive"} element={<TableLeagueLive/>}/>
                <Route path={"/CreateGame"} element={<CreateGame />}/>
                <Route path={"/Login"} element={<Login/>}/>
            </Routes>


        </div>
    )

}

export default Logged;

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