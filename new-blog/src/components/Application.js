import React, {Component} from 'react';

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
