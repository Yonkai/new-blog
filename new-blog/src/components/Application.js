import React, {Component} from 'react';
import AbstractBackground from './AbstractBackground';
import MainTitleFirstContainer from './MainTitleFirstContainer';
import FirstContentContainer from './FirstContentContainer';
import content from '../content-of-blog.js';

class Application extends Component {

  constructor(props) {
    super(props);
    this.state =  {};
  }

  componentWillMount() {
    console.log('Root application mounted.');
    console.log(content);
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
