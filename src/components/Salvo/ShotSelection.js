import React, { Component } from 'react';
import { Label, List, Container, Button, Divider } from 'semantic-ui-react';
import SalvoCmd from '../../commands/SalvoCmd';
import SpaceshipUtil from '../../util/SpaceshipUtil';

class Position {

    constructor(row, column) {
        this.row = row;
        this.column = column;
    }

    toShot() {
        return this.row.toString(16).toUpperCase() + 'x' + this.column.toString(16).toUpperCase();
    }

}

export default class ShotSelection extends Component {

    state = {
        shots: [],
    }

    getColor = (c) => {
        if (c === '*') {
            return 'green';
        }

        if (c === 'X') {
            return 'red';
        }

        if (c === '-') {
            return 'yellow';
        }

        if (c === '.') {
            return 'blue';
        }

        throw new Error('Invalid board element ' + c);
    }

    getColorAtPosition = (character, rowIndex, columnIndex) => {
        const i = this.state.shots.findIndex(position => position.row === rowIndex && position.column === columnIndex);
    
        if (i >= 0) {
            return 'grey';
        }

        return this.getColor(character);
    }

    togglePosition = (rowIndex, columnIndex) => {

        const shots = [...this.state.shots];

        const i = shots.findIndex(position => position.row === rowIndex && position.column === columnIndex);

        if (i >= 0) {
            shots.splice(i, 1);
        } else {
            shots.push(new Position(rowIndex, columnIndex));
        }

        this.setState({ shots: shots });
    }

    disable = (character) => character === 'X' || character === '-'; 

    salvo = () => {
        const salvo = this.getSalvo();
        this.props.salvoAction(this.props.gameId, new SalvoCmd(salvo));
    }

    getSalvo = () => {
        return this.state.shots.map(position => position.toShot());
    }

    renderSalvo = () => {
        if (this.props.salvoResponse) {
            return ( 
                <Container>
                    <Divider />

                    <Label color='grey'>
                            Salvo Response
                    </Label>

                    <List divided selection>
                        <List.Item>
                            <Label color='grey'>
                                {this.props.salvoResponse.game.player_turn 
                                    ? 'Player Turn Id: ' + this.props.salvoResponse.game.player_turn
                                    : 'Winner Id: ' + this.props.salvoResponse.game.won}
                            </Label>
                        </List.Item>
                        <List.Item>
                        {
                            Object.keys(this.props.salvoResponse.salvo).map((key, index) => 
                            
                                <Label key={index} color='grey'>
                                    {key}:{this.props.salvoResponse.salvo[key]}
                                </Label>
                            )
                        }   
                                    
                        </List.Item>   
                    </List>
                </Container>
                
            );
            
        } else {
            return '';
        }
    }


    render() {
        return (

            <Container>

                {this.renderSalvo()}

                <Divider />
               
                <Button color='grey' disabled={this.state.shots.length === 0} onClick={this.salvo}>
                        Send Salvo
                </Button>
                
                <List divided selection>
                    <List.Item>
                        <Label color={this.getColor('*')}>
                            Ship
                        </Label>
                        <Label color={this.getColor('X')}>
                            Hit
                        </Label>
                        <Label color={this.getColor('-')}>
                            Miss
                        </Label>
                        <Label color={this.getColor('.')}>
                            Empty or Unknown
                        </Label>
                    </List.Item>
                </List>

                <List>
                    <List.Item>
                        
                        <Button size='mini' disabled color='grey'>
                            {'\\'}
                        </Button>
                        {
                            SpaceshipUtil.getIndexes().map((c, i) => 
                                <Button key={i} size='mini' disabled color='grey'>
                                    {c}
                                </Button>    
                            )
                        }
                    </List.Item>
                    {
                        this.props.board.map((row, rowIndex) =>
                            
                            <List.Item key={rowIndex}>
                                <Button 
                                    size='mini'
                                    disabled
                                    color='grey'>
                                    {rowIndex.toString(16).toUpperCase()}
                                </Button>
                                {
                                    row.split('').map((character, columnIndex) => 
                                        <Button 
                                            size='small'
                                            key={columnIndex} 
                                            disabled={this.disable(character)}
                                            color={this.getColorAtPosition(character, rowIndex, columnIndex)} 
                                            onClick={() => this.togglePosition(rowIndex, columnIndex)}>
                                            {''}
                                        </Button>    
                                    )
                                }

                            </List.Item>
                        )
                    }
                </List>

            </Container>

            
        );
    }

}