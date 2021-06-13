import React from 'react';
import GuitarModel from '../../models/guitar';
import GuitarList from '../../components/GuitarList/GuitarList';
import FilterChoices from '../../components/Filter/Filter';
import './GuitarsContainer.css';

class GuitarsContainer extends React.Component {
    state = {
        guitars: [],
        selection: "",
    };

    handleSelection = (e) => {

        if (e.target.name === "model") {
            this.setState({ selection: e.target.value })
            console.log(e.target.value);
            return e.target.value = "";
        }

        if (e.target.name === "manufacturer") {
            this.setState({ selection: e.target.value })
            console.log(e.target.value);
            return e.target.value = "";
        }

        else {
            return e.target.value = "";
        }
    }

    componentDidMount() {
        GuitarModel.all().then(json => this.setState({ guitars: json.guitars }));
    }



    render() {
        return (
            <section className='body'>
                <FilterChoices
                    className='filter'
                    handleSelection={this.handleSelection}
                />
                <GuitarList
                    className='guitar-list'
                    guitars={this.state.guitars}
                    selection={this.state.selection}
                />
            </section>
        );
    }
}

export default GuitarsContainer;
