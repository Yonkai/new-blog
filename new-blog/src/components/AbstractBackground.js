import React from 'react';

class AbstractBackground extends React.Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext("2d");
        
        context.beginPath();
        context.moveTo(50, 50);
        context.lineTo(100, 100);
        context.lineTo(0,100);
        context.lineTo(50,50);
        context.stroke();
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