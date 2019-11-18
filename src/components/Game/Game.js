import React, {Component} from 'react';
import Board from './Board';
import { Label, List } from 'semantic-ui-react';

export default class Game extends Component {

    getPlayerTurnIdOrWinner = () => {
        if (this.props.game.game.player_turn) {
            return this.props.game.game.player_turn;
        } else {
            return this.props.game.game.won;
        }
    }

    getPlayerTurnOrWinnerLable = () => {
        if (this.props.game.game.player_turn) {
            return 'Player Turn Id';
        } else {
            return 'Winner Id';
        } 
    }

    render() {

        if (!this.props.game) {

            return (
                ''
            );

        }

        return (

            <List divided selection>
                <List.Item>
                <Label color='green' horizontal>
                    {this.getPlayerTurnOrWinnerLable()}
                </Label>
                {this.getPlayerTurnIdOrWinner()}
                </List.Item>
                <List.Item>
                <Label color='purple' horizontal>
                    Self Id
                </Label>
                {this.props.game.self.user_id}
                
                <Board board={this.props.game.self.board} />
                
                </List.Item>
                <List.Item>
                <Label color='red' horizontal>
                    Opponent Id
                </Label>
                {this.props.game.opponent.user_id}

                <Board board={this.props.game.opponent.board} />

                </List.Item>
            </List>
            
        );
    }

};
