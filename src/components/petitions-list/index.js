'use strict';

import React from 'react';

const PetitionsList = props => {

	if (!props || !props.petitions || !props.petitions.length) return null;

	return (
		<ul className="petitions-list" data-test="petitions-list">
			{props.petitions.map((petition, index) => <li className="petitions-list__item" key={index}>{petition.label._value}</li>)};
		</ul>
	);

};

export default PetitionsList;
