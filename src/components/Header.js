import React from 'react';
import { Menu } from 'antd';

export default () => {
    return (
        <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
        >
            <Menu.Item key="mail">
                Navigation One
            </Menu.Item>
            <Menu.Item key="mail">
                Navigation One
            </Menu.Item>
            <Menu.Item key="mail">
                Navigation One
            </Menu.Item>
        </Menu>
    );
}