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

        this.updateDimensions();
        //Allows automatic updating of state and window dimensions.
        window.addEventListener('resize', this.updateDimensions);

        /*Recreate sharded glass effect in canvas[ ], 
         -Triangles[X]
         -Gradients in Triangles[X]
         -Animating gradients and localizing them to triangles[ ],
         -Color Dodge[] and glow[ ]
         -Intergrate with scaling[ ]
         -Make sure it doesn't burn out the CPU[ ]
         
        add an event listener for a screen resize.[X]
         1. Detect+Set Dimensions on initial rendering in React. Sets background.[X]
         2. During intial rendering, set a callback listener to recall the initial rendering code to update state and canvas. -loops around.-[X]
        */
    }

    renderCanvasBackground(){
        console.log(this.state.dimensions.width,this.state.dimensions.height);

        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);


        const pointA = this.state.dimensions.width*.1;
        const pointB = this.state.dimensions.height*.1;

        const pointD = this.state.dimensions.width*.9;
        const pointC = this.state.dimensions.height*.1;

        const pointE = this.state.dimensions.width*.5;
        const pointF = this.state.dimensions.height*.9;

        context.beginPath();
        context.moveTo(pointA, pointB);
        context.lineTo(pointD, pointC);
        context.lineTo(pointE, pointF);
        context.fill();
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
                <canvas ref="canvas" width={this.state.dimensions.width} height={this.state.dimensions.height}/> {/* Convert to UI State Later from the window object off application component*/}
            </div>
        )
    }
}

export default AbstractBackground;