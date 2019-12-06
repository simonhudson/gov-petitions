'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import cloneDeep from 'lodash/cloneDeep';
import PetitionItem from './index';

const baseProps = {
    petition: require('~/test-data/petitions')[0]
};

describe('PetitionItem', () => {

    let objectUnderTest;
	const selector = `[data-test="petition-item"]`;
    const title = `[data-test="petition-item__title"]`;

    it('should return null when no petition prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.petition;
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

    it('should render correct title', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(title)).to.be.true;
        expect(objectUnderTest.find(title).length).to.equal(1);
        expect(objectUnderTest.find(title).text()).to.equal('Petition title 1');
    });

    const initialise = props => objectUnderTest = shallow(<PetitionItem {...props} />);

});
