import React from 'react';
import GuitarModel from '../../models/guitar';
import UpdateForm from '../../components/UpdateForm/UpdateForm';

import '../CreateNew/CreateNew.css';


class Update extends React.Component {
    state = {
        guitar: [],
    }

    componentDidMount() {
        GuitarModel.show(this.props.match.params.id).then(json => this.setState({ guitar: json.data }));
    }

    handleSubmit = e => {
        e.preventDefault();

        GuitarModel.update(this.props.match.params.id, this.state).then(json => {
            console.log(json);
            this.props.history.push('/guitars')
        });
    };

    // TODO how do you get this to default back to the original state if no value is entered?
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <UpdateForm
                guitar={this.state.guitar}
                handleSubmit={this.handleSubmit}
                handleInput={this.handleInput}
            />
        );
    }
}

export default Update;