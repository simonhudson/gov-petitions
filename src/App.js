'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import Header from '~/components/header';
import Footer from '~/components/footer';
import PetitionsList from '~/components/petitions-list';
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

        return (
            <>
                <Header />
                <PetitionsList petitions={this.state.petitions} />
                <Footer />
            </>
        );

    }
}

export default App;
