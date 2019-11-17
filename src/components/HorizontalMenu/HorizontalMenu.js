import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class HorizontalMenu extends Component {

    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
    
        return (
          <Menu>
            <Menu.Item
              as={Link}
              to='search'
              name='search'
              active={activeItem === 'search'}
              onClick={this.handleItemClick}
            >
              Search
            </Menu.Item>
    
            <Menu.Item
              as={Link}
              to='salvo'
              name='salvo'
              active={activeItem === 'salvo'}
              onClick={this.handleItemClick}
            >
              Salvo
            </Menu.Item>
    
            <Menu.Item
              as={Link}
              to='challenge'
              name='challenge'
              active={activeItem === 'challenge'}
              onClick={this.handleItemClick}
            >
              Challenge
            </Menu.Item>

            <Menu.Item
              as={Link}
              to='autopilot'
              name='autopilot'
              active={activeItem === 'autopilot'}
              onClick={this.handleItemClick}
            >
              Autopilot
            </Menu.Item>
          </Menu>
        );
      }

}