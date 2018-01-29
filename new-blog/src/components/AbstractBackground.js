import React from 'react';

class AbstractBackground extends React.Component {
//Use this: https://codepen.io/Yonkai/pen/JMazpr?editors=0010, switch out the width and height trackers. 
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
         -Make sure it doesn't burn out the CPU[X]
         
        add an event listener for a screen resize.[X]
         1. Detect+Set Dimensions on initial rendering in React. Sets background.[X]
         2. During intial rendering, set a callback listener to recall the initial rendering code to update state and canvas. -loops around.-[X]
        */
    }

    renderCanvasBackground(){
      

        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');
        var _this = this;
        var ref;
        var shiftingValue = 0.01;
        var shiftingSpeed = 0.002;
        var wavePos = 0;
        resizeCanvas();
        
        function flowGrad() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        
            var lineargradient = context.createLinearGradient(canvas.width/2, 0, canvas.width/2, canvas.height);
            lineargradient.addColorStop(0, 'rgba(255,0,0,.1)');
            lineargradient.addColorStop(wavePos, 'rgba(0,255,0,.2)');
            lineargradient.addColorStop(1, 'rgba(0,0,255,.1)');
        
            context.fillStyle = lineargradient;
        
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(canvas.width, 0);
            context.lineTo(canvas.width/2, canvas.height);
            context.fill();
        
            shiftingValue += shiftingSpeed;
            wavePos = Math.abs(Math.sin(shiftingValue));
            ref = requestAnimationFrame(flowGrad);
        }
        
        function init() {
            // Register an event listener to call the resizeCanvas() function 
            // each time the window is resized.
            window.addEventListener('resize', resizeCanvas, false);
            // cancel current frame, if any
            cancelAnimationFrame(ref); 
            ref = requestAnimationFrame(flowGrad);
         
        }
        
        function resizeCanvas() {
            canvas.width = _this.state.dimensions.width;
            canvas.height = _this.state.dimensions.height;
        }
        
        init();
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
            <div className="AbstractBackgroundContainer">
                <canvas className="ActualCanvas" ref="canvas" width={this.state.dimensions.width} height={this.state.dimensions.height}/> {/* Convert to UI State Later from the window object off application component*/}
            </div>
        )
    }
}

export default AbstractBackground;
