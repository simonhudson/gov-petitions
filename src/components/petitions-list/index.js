'use strict';

import React from 'react';
import PetitionItem from '~/components/petition-item';
import './css/styles.scss';

const PetitionsList = props => {

	if (!props || !props.petitions || !props.petitions.length) return null;

	return (
		<ul className="petitions-list" data-test="petitions-list">
			{props.petitions.map((petition, index) => <PetitionItem key={index} petition={petition} />)};
		</ul>
	);

};

export default PetitionsList;
