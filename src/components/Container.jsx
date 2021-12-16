import React from 'react';

import { ContainerWrapper } from '../elements/ContainerElements';
import { Nav, Footer } from '../components';

export const Container = ({ children }) => (
    <ContainerWrapper>
        <Nav />
        {children}
       <Footer /> 
    </ContainerWrapper>
);