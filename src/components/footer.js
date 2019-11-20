import React, { Component } from 'react';
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    }
}));

// export default class Footer extends Component {

//     render() {
//         return (
//             <div className="App-footer">
//                 footer
//                 <Fab color="primary" aria-label="edit">
//                     <EditIcon />
//                 </Fab>
//             </div >
//         );
//     }
// }


function test() {
    window.scrollTo(0, 0);
}

export default function Footer() {
    const classes = useStyles();

    return (
        <div className="App-footer">
            footer
             <Fab onClick={test} color="secondary" aria-label="edit" className={classes.fab} >
                <EditIcon />
            </Fab>
        </div >
    );
}