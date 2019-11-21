import React, {Component} from 'react';
import { Label, List, Container } from 'semantic-ui-react';

export default class Board extends Component {

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

    renderIndex = (i) => {
        if (i >= 10) {
            return (
                <span>{i.toString(16)}</span>
            );
        } else {
            return (
                <span>{i.toString(16)}</span>
            );
        }
    }

    render() {
        return (

            <Container>
               
                
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
                {
                    this.props.board.map((row, index) =>
                    
                        <List.Item key={index}>
                            {
                                row.split('').map((c, i) => 
                                    <Label key={i} color={this.getColor(c)} size='mini' style={{fontFamily: 'Courier New'}}>
                                        {index.toString(16).toUpperCase() + 'x' + i.toString(16).toUpperCase()}
                                    </Label>    
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