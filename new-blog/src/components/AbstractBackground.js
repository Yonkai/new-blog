import React from 'react';

class AbstractBackground extends React.Component {

    constructor(props) {
        super(props);

        this.updateDimensions = this
            .updateDimensions
            .bind(this);

        this.renderCanvasBackground = this
            .renderCanvasBackground
            .bind(this);

        this.state = {
            dimensions: {width:0,height:0}
        }
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext("2d");
        this.updateDimensions();
        //Allows of automatic updating of state with regards to window dimensions.
        window.addEventListener('resize', this.updateDimensions);

        /*Recreate sharded glass effect in canvas, add an event listener for a screen resize.[X]
         1. Detect+Set Dimensions on initial rendering in React. Sets background.[X]
         2. During intial rendering, set a callback listener to recall the initial rendering code to update state and canvas. -loops around.-[X]
        */
    }

    renderCanvasBackground(){
        console.log(this.state.dimensions.width,this.state.dimensions.height);
    }

    updateDimensions() {
        this.setState({
            dimensions: {
                width: window.innerWidth, 
                height: window.innerHeight
            },
        },this.renderCanvasBackground);
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