import React, {Component} from 'react';
import Board from './Board';

export default class Game extends Component {

    render() {

        if (!this.props.game) {

            return (
                <div>No game</div>
            );

        }
//12177ad0-034e-4613-9e9d-dab0d45ecdf0
    return (
            <div>
                <span>Player turn</span>
                <div>{this.props.game.game.player_turn}</div>
                
                <span>Self</span>
                <div>{this.props.game.self.user_id}</div>

                <Board board={this.props.game.self.board} />

                <span>Opponent</span>
                <div>{this.props.game.opponent.user_id}</div>
                <Board board={this.props.game.opponent.board} />
                
            </div>

            
        );
    }

};
