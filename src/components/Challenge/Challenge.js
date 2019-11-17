import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import ChallengeCmd from '../../commands/ChallengeCmd';
import Game from '../Game/Game';

export default class Challenge extends Component {

    state = {
        hostname: '',
        port: '',
        errorHostname: false,
        errorPort: false
    };

    onHostnameChange = (e) => {
        var error= false;
        if (e.target.value === '') {
            error = true;
        }
        this.setState({ hostname: e.target.value, errorHostname: error });
    };

    onPortChange = (e) => {
        var error= false;
        if (e.target.value === '') {
            error = true;
        }
        this.setState({ port: e.target.value, errorPort: error });
    };

    challenge = () => {
        this.props.challengeAction(new ChallengeCmd(this.state.hostname, this.state.port));
    };

    render() {
        return (
            <Form>
                <Form.Input
                    error={this.state.errorHostname}
                    fluid
                    label='Hostname'
                    placeholder='Hostname'
                    value={this.state.hostname}
                    onChange={this.onHostnameChange}
                />
                <Form.Input
                    error={this.state.errorPort}
                    fluid
                    label='Port'
                    placeholder='Port'
                    value={this.state.port}
                    onChange={this.onPortChange}
                />
                <Button 
                    disabled={this.state.hostname === '' || this.state.port === ''}
                    onClick={this.challenge}>
                    Challenge
                </Button>
                <Game game={this.props.game} />            
            </Form>
        );
    }

}