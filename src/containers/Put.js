import React, {Component} from 'react';
import {connect} from 'react-redux';
import {putData} from '../actions/putAction';

class Put extends Component {
    componentWillMount() {
        const data = {
            ensimmäinen: "yksi",
            toinen: "kaksi"
        }
        this.props.putData(data);
    }
    render() {
        return (
            <div>Put component</div>
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.putData.data;
    return {data}
}

export default connect(mapStateToProps, { putData })(Put);