import React, { Component } from 'react';
import SecondContentContainer from './SecondContentContainer';

class FirstContentContainer extends Component {

    render() {
        return (
           <div className="FirstContentContainer"> <SecondContentContainer/> </div>
        )
    }
}

export default FirstContentContainer;