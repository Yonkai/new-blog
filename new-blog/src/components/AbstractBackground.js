import React from 'react';

class AbstractBackground extends React.Component {

    render() {
        return (
            <div className="AbstractBackground">
                <canvas ref="canvas" width={640} height={425}/> {/* Convert to UI State Later from the window object off application component*/}
            </div>
        )
    }
}

export default AbstractBackground;