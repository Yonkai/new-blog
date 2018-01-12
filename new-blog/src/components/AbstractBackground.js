import React from 'react';

class AbstractBackground extends React.Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext("2d");
        
        /*Recreate sharded glass effect in canvas, add an event listener for a screen resize.
         Should it be in state?
        */

      }

    render() {
        return (
            <div className="AbstractBackground">
                <canvas ref="canvas" width={555} height={555}/> {/* Convert to UI State Later from the window object off application component*/}
            </div>
        )
    }
}

export default AbstractBackground;