import React, { Component } from 'react';
import { connect } from 'react-redux';
import { patchData } from '../actions/patchAction';

class Patch extends Component {
    componentWillMount() {
        const data = {
            ensimmäinen: "yksi",
            toinen: "kaksi"
        }
        this.props.patchData(data);
    }
    render() {
        return (
            <div>Patch component</div>
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.patchData.data;
    return { data }
}

export default connect(mapStateToProps, { patchData })(Patch);