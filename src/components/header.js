import React, { Component } from 'react';
import logo from '../logo.svg';

// export default class Header extends Component {

//     render() {
//         return (
//             <div className="App-header">
//                 header
//                <img src={logo} className="App-logo" alt="logo" />
//             </div>
//         );
//     }
// }

export default function Header() {
    return (
        <div className="App-header">
            header
               <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}