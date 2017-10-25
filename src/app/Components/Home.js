import React from 'react';
import {Paper} from "material-ui";

export class Home extends React.Component {
    render(){
        const style = {
            height: 700,
            width: 800,
            marginLeft: 500,
            marginTop: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        return(
        <div className="container">
        <br/><br/>
            <Paper style={style} zDepth={5} >
            <br/>
            <h2>Finally!!! You Have Setup Your First React Project...</h2><br/>
            <img src="./giphy.gif" alt="logo" /><br/>
                Edit the Components as you desire...
            </Paper>
        </div>
        );
    }
}