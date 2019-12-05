'use strict';

const { get } = require('../api');

export function getAllPetitions() { return get(`epetitions.json`); }
export function getPetition(petitionId) { return get(`petitions/${petitionId}.json`); }
