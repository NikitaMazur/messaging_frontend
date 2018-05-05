import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenu = styled(Menu)`
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;

    li:last-child {
        float: right;
    }
`;

export default class Header extends Component {
  render() {
    return (
      <StyledMenu
        mode="horizontal"
      >
        <Menu.Item>
            <Link to="/customer/list">
                <Icon type="file-text" />
                Invites list
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/customer/invite">
                <Icon type="user" />
                Invite supplier
            </Link>
        </Menu.Item>
        <Menu.Item>
          <Icon type="logout" />
          Logout
        </Menu.Item>
      </StyledMenu>
    );
  }
}