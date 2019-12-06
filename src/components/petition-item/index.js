'use strict';

import React from 'react';
import './css/styles.scss';

const PetitionItem = props => {

	if (!props || !props.petition) return null;

	const { petition } = props;

	return (
		<div className="petition-item" data-test="petition-item">
			<p className="petition-item__title" data-test="petition-item__title">{petition.label._value}</p>
		</div>
	);

};

export default PetitionItem;
