import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';

export default class Component2 extends Component {


    render() {
        var divStyle = {
            color: "blue"
        };
        var wid = {
            width: 300
        }
        return (
            <div style={divStyle}>
                <h1>{this.props.title}</h1>
                <div>
                    {this.props.children}
                </div>

                <Slider style={wid}
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={110}
                />

            </div>
        );
    }
}

function valuetext(value) {
    return `${value}°C`;
}
