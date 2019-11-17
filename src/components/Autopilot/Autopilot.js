import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class Autopilot extends Component {

    state = {
        gameId: '',
        error: false,
        successMessage: '',
    };

    onGameIdChange = (e) => {
        var error= false;
        if (e.target.value === '') {
            error = true;
        }
        this.setState({ gameId: e.target.value, error: error });
    };

    autopilot = () => {
        this.props.autopilotAction(this.state.gameId);
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
                    onClick={this.autopilot}>
                    Autopilot
                </Button>
                <div>
                    {this.props.autopilotSuccessMessage}        
                </div>

            </Form>
        );
    }

}