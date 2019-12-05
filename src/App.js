'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import Header from '~/components/header';
import Footer from '~/components/footer';
import { getAllPetitions, getPetition } from '~/functions';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            petitions: null
        };
    }

    componentDidMount = () => {
        getAllPetitions().then(response => {
            this.setState({ petitions: response.result.items });
        });
    }

    render = () => {

        const { state } = this;

        if (!state.petitions) return null;

        return (
            <>
                {state.petitions.map((petition, index) => {
                    return (<p key={index}>{petition.label._value}</p>);
                })}
            </>
        );
    }
}

export default App;
