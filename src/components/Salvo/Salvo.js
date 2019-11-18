import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import ShotSelection from './ShotSelection';

export default class Salvo extends Component {

    state = {
        gameId: '',
        errorGameId: false,
    };

    onGameIdChange = (e) => {
        var error= false;
        if (e.target.value === '') {
            error = true;
        }
        this.setState({ gameId: e.target.value, errorGameId: error });
    };

    getGame = () => {
        if (this.state.gameId) {
            this.props.getGameAction(this.state.gameId);
        }
    }

    renderOpponentBoard = () => {
        if (!this.props.error && this.props.game) {
            return <ShotSelection 
                gameId={this.state.gameId} 
                board={this.props.game.opponent.board} 
                salvoAction={this.props.salvoAction} 
                salvoResponse={this.props.salvoResponse} />;
        }

        return '';
    }

    render() {
        return (
            <Form>
                <Form.Input
                    error={this.state.errorGameId}
                    fluid
                    label='Game id'
                    placeholder='Game id'
                    value={this.state.gameId}
                    onChange={this.onGameIdChange}
                />
                <Button 
                    disabled={this.state.gameId === ''}
                    onClick={this.getGame}
                >
                    Search Opponent Board
                </Button>
                
                {this.renderOpponentBoard()}
                
            </Form>
        );
    }

}