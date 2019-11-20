import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Component1 extends Component {


    render() {
        var divStyle = {
            color: "red"
        };
        return (
            <div style={divStyle}>
                <h1>{this.props.title}</h1>
                <div>
                    {this.props.children}
                </div>
                <CircularProgress />
            </div>
        );
    }
}

