import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/getAction';

class Get extends Component {
    componentWillMount() {
        console.log(this.props.getData());
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

export default connect(mapStateToProps, {getData})(Get);