import React from 'react';
import GuitarModel from '../../models/guitar';
import GuitarShow from '../../components/GuitarShow/GuitarShow';

class GuitarShowContainer extends React.Component {
    state = {
        guitar: [],
    };

    componentDidMount() {
        GuitarModel.show(this.props.match.params.id).then(json => this.setState({ guitar: json.data })
        );
    }

    handleDelete = () => {
        GuitarModel.delete(this.props.match.params.id).then(json => {
            this.props.history.push('/guitars');
        });
    };

    // addToCart = () => {

    // }
    render() {
        return (
            <div>
                <GuitarShow guitar={this.state.guitar} handleDelete={this.handleDelete} />
            </div>
        );
    }
}

export default GuitarShowContainer;