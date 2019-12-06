'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
const petitions = require('~/test-data/petitions');

describe('App', () => {

    let objectUnderTest;

    it('should render as expected', () => {
        initialise();
        expect(objectUnderTest.html()).not.to.be.null;
    });

    const initialise = () => objectUnderTest = shallow(<App />);

});
