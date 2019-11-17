import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import SalvoCmd from '../../commands/SalvoCmd';

export default class Salvo extends Component {

    state = {
        gameId: '',
        salvo: '',
        errorGameId: false,
        errorSalvo: false
    };

    onGameIdChange = (e) => {
        var error= false;
        if (e.target.value === '') {
            error = true;
        }
        this.setState({ gameId: e.target.value, errorGameId: error });
    };

    onSalvoChange = (e) => {
        var error= false;
        if (e.target.value === '') {
            error = true;
        }
        this.setState({ salvo: e.target.value, errorSalvo: error });
    };

    salvo = () => {
        this.props.salvoAction(this.state.gameId, new SalvoCmd(this.state.salvo.trim().split(',')));
    };

    renderSalvo = () => {
        if (this.props.salvoResponse) {
            return ( 
                <div>
                    <span>Player Turn</span>
                    <div>{this.props.salvoResponse.game.player_turn}</div>

                    <span>Salvo</span>
                    <div>
                        {
                            Object.keys(this.props.salvoResponse.salvo).map((key, index) => 
                                <div key={index}>{key}: {this.props.salvoResponse.salvo[key]}</div>
                            )
                        }
                    </div>
                </div> 
            );
            
            // Object.keys(this.props.salvoResponse.salvo).map( (key, index) => {
            //     return <p key={index}>{this.props.salvoResponse[key]}</p>;
            // });
        } else {
            return (<p>data is not available</p>);
        }
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
                <Form.Input
                    error={this.state.errorSalvo}
                    fluid
                    label='Salvo'
                    placeholder='Salvo'
                    value={this.state.salvo}
                    onChange={this.onSalvoChange}
                />
                <Button 
                    disabled={this.state.gameId === '' || this.state.salvo === ''}
                    onClick={this.salvo}>
                    Salvo
                </Button>

                <div>{this.renderSalvo()}</div>
                
            </Form>
        );
    }

}