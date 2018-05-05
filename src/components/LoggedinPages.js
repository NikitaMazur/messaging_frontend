import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Header from './Header';

export default class LoggedinPages extends Component {
    render() {
        return (
            <div>
                <Header />
                <FullHeightWrapper>
                    <Container>
                        <div>
                            <Route path="/customer/invite" component={} />
                            {/* <Route path="/customer/list" component={} /> */}
                        </div>
                    </Container>
                </FullHeightWrapper>
            </div>
        );
    }
}
