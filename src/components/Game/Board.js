import React, {Component} from 'react';

export default class Board extends Component {

    render() {
        return (
            <div className="ui items">
                {
                    this.props.board.map((row, index) =>
                        <div key={index}>{row}</div>
                    )
                }
            </div>
        );
    }

}