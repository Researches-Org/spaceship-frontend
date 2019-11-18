import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

export default class ErrorDisplay extends Component {

    render() {
        if (this.props.error) {
            return (
                <Message negative>
                    <Message.Header>{this.props.error.error}</Message.Header>
                    <p>{this.props.error.message}</p>
                </Message>
            );
        }

        return (
            ''
        );
    }

}