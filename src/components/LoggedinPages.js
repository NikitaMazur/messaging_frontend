import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Header from './Header';
import CustomerList from './CustomerList';
import CustomerInvite from './CustomerInvite';

const Container = styled.div`
    max-width: 1024px;
    width: 100%;
`;

export default class LoggedinPages extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Route path="/customer/list" component={CustomerList} />
                <Route path="/customer/invite" component={CustomerInvite} />
            </Container>
        );
    }
}
