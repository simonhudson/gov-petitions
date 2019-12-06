'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import cloneDeep from 'lodash/cloneDeep';
import PetitionsList from './index';

const baseProps = {
    petitions: require('~/test-data/petitions')
};

describe('PetitionsList', () => {

    let objectUnderTest;
	const selector = `[data-test="petitions-list"]`;

    it('should return null when no petitions prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.petitions;
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });

    it('should return null when petitions prop is empty array', () => {
        const props = cloneDeep(baseProps);
        props.petitions = [];
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
    });

    const initialise = props => objectUnderTest = shallow(<PetitionsList {...props} />);

});
