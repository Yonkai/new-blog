import React, {Component} from 'react';
import AbstractBackground from './AbstractBackground';
import MainTitleFirstContainer from './MainTitleFirstContainer';
import FirstContentContainer from './FirstContentContainer';

class Application extends Component {

  constructor(props) {
    super(props);
    this.state =  {};
  }

  componentWillMount() {
    console.log('Root application mounted.');
  }

  render() {
    return (
      <div className="Application">
        <AbstractBackground/>
        <MainTitleFirstContainer/>
        <FirstContentContainer/>
      </div>
    );
  }
}

export default Application;
