import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Game from '../Game/Game';

export default class SearchGame extends Component {

    state = {
        gameId: '',
        error: false,
    };

    onGameIdChange = (e) => {
        var error= false;
        if (e.target.value === '') {
            error = true;
        }
        this.setState({ gameId: e.target.value, error: error });
    };

    getGame = () => {
        this.props.getGame(this.state.gameId);
    };

    render() {
        return (
            <Form>
                <Form.Input
                    error={this.state.error}
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
                    Search Game
                </Button>
                <Game game={this.props.game} />
            </Form>
        );
    }

}