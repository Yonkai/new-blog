import React from 'react';

class AbstractBackground extends React.Component {

    constructor(props) {
        super(props);

        this.updateDimensions = this
            .updateDimensions
            .bind(this);
            
        this.state = {
            dimensions: {width:null,height:null}
        }
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext("2d");
        this.updateDimensions();

        /*Recreate sharded glass effect in canvas, add an event listener for a screen resize.

         1. Detect+Set Dimensions on initial rendering in React. Sets background.
         2. During intial rendering, set a callback listener to recall the initial rendering code to update state and canvas. -loops around.-
        */
       

    }

    updateDimensions() {
        this.setState({
            dimensions: {
                width:5,
                height: 5
            },
        },function(){
            console.log(this.state.dimensions.width,this.state.dimensions.height);
        });
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