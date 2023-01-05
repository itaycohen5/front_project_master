import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {styled} from "@mui/material/styles";
import {tableCellClasses} from "@mui/material/TableCell";
import {TableCell} from "@mui/material";
import React  from "react";
import './cssFilles/TableLea.css'

function TableLea(props) {


    const bubbleSort = (teams) => {
        for (let i = 0; i < teams.length; i++) {
            for (let j = 0; j < teams.length - i - 1; j++) {
                if (teams[j].points < teams[j + 1].points) {
                    // Swap the elements
                    let temp = teams[j];
                    teams[j] = teams[j + 1];
                    teams[j + 1] = temp;
                }if (teams[j].points === teams[j+1].points){
                    if (teams[j].goalDifference < teams[j + 1].goalDifference){
                        let temp1 = teams[j];
                        teams[j] = teams[j + 1];
                        teams[j + 1] = temp1;
                    }else if (teams[j].goalDifference === teams[j + 1].goalDifference){
                        if (teams[j].name > teams[j+1].name){
                            let temp1 = teams[j];
                            teams[j] = teams[j + 1];
                            teams[j + 1] = temp1;
                        }
                    }
                }
            }
        }
        return teams;

    }


    let rowsProp = props.data
    let rowsForShow = bubbleSort(rowsProp)

    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontFamily: "fantasy",
            fontSize: 50,
            textAlign: "center"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 50,
            fontFamily: "cursive",
            textAlign: "center"

        },
    }));
    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,

        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return (
        <div>
            <TableContainer className='table-decotrate' component={Paper}>
                <Table className='table-width' aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Place</StyledTableCell>
                            <StyledTableCell>Team Name</StyledTableCell>
                            <StyledTableCell >Wins</StyledTableCell>
                            <StyledTableCell>Looses</StyledTableCell>
                            <StyledTableCell>Draws</StyledTableCell>
                            <StyledTableCell >Difference Goals </StyledTableCell>
                            <StyledTableCell>Points</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsForShow.map((row, index) => {
                                return (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell >{index + 1}</StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell >{row.win}</StyledTableCell>
                                        <StyledTableCell >{row.loose}</StyledTableCell>
                                        <StyledTableCell>{row.draw}</StyledTableCell>
                                        <StyledTableCell >{row.goalDifference}</StyledTableCell>
                                        <StyledTableCell >{row.points}</StyledTableCell>
                                    </StyledTableRow>
                                )
                            }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}

export default TableLea