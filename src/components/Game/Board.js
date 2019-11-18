import React, {Component} from 'react';
import { Label, List, Container } from 'semantic-ui-react';
import SpaceshipUtil from '../../util/SpaceshipUtil';

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
                <List.Item>
                    
                    <Label size='large'>
                        {'\\'}
                    </Label>
                    {
                        SpaceshipUtil.getIndexes().map((c, i) => 
                            <Label key={i} size='large'>
                                {c}
                            </Label>    
                        )
                    }
                </List.Item>
                {
                    this.props.board.map((row, index) =>
                    
                        <List.Item key={index}>
                            <Label size='large'>
                                {index.toString(16).toUpperCase()}
                            </Label>
                            {
                                row.split('').map((c, i) => 
                                    <Label key={i} color={this.getColor(c)} size='big'>
                                        {' '}
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