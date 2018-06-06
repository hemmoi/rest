import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData, getDataFail} from '../actions/getAction';

class Get extends Component {
    componentWillMount() {
        this.props.getData();
        this.props.getDataFail();
    }
    render() {
        return (
            <div>Get component</div>
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.getData.data;
    return {data}
}

export default connect(mapStateToProps, { getData, getDataFail })(Get);