import * as React from 'react';
import * as ReactDom from 'react-dom';

class ColourGridItem extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: props.model.name,
            hex: props.model.hex
        }

        console.log(this.state);
    }

    render() {
        return (
            <div className="colour-grid-item">
                <div style={{ backgroundColor: this.state.hex }} className="colour-grid-item-rect">
                </div>
                <div>
                    <div>{this.state.name}</div>
                    <div>{this.state.hex}</div>
                </div>
            </div>
        );
    }
}

export default ColourGridItem;