import React, { Component } from 'react';
import { Table, Message } from 'semantic-ui-react'

export default class GameList extends Component {

    render() {

        if (!this.props.games || this.props.games.length === 0) {
            return (
                <Message>
                    <Message.Header>No Game at this Spaceship Instance</Message.Header>
                    <p>
                    Use the Challenge Menu to challenge an opponent Spaceship Instance.
                    </p>
                </Message>        
            );
        }

        return (

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Game Id</Table.HeaderCell>
                        <Table.HeaderCell>Self Id</Table.HeaderCell>
                        <Table.HeaderCell>Total Ships</Table.HeaderCell>
                        <Table.HeaderCell>Opponent Id</Table.HeaderCell>
                        <Table.HeaderCell>Autopilot</Table.HeaderCell>
                        <Table.HeaderCell>Finished</Table.HeaderCell>
                        <Table.HeaderCell>Player Turn Id</Table.HeaderCell>
                        <Table.HeaderCell>Winner Id</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        this.props.games.map((game, index) =>
                            <Table.Row key={index}>
                                <Table.Cell>
                                    {game.gameId}
                                </Table.Cell>
                                <Table.Cell>
                                    {game.selfId}
                                </Table.Cell>
                                <Table.Cell>
                                    {game.totalSpaceships}
                                </Table.Cell>
                                <Table.Cell>
                                    {game.opponentId}
                                </Table.Cell>
                                <Table.Cell>
                                    {game.autopilot.toString()}
                                </Table.Cell>
                                <Table.Cell>
                                    {game.finished.toString()}
                                </Table.Cell>
                                <Table.Cell>
                                    {game.playerTurnId}
                                </Table.Cell>
                                <Table.Cell>
                                    {game.winnerId}
                                </Table.Cell>
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table>

        );
    }

}