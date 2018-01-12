import React, {Component} from 'react';
import AbstractBackground from './AbstractBackground';
import MainTitleFirstContainer from './MainTitleFirstContainer';
import FirstContentContainer from './FirstContentContainer';

class Application extends Component {
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
