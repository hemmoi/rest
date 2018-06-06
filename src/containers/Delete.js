import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteData} from '../actions/deleteAction';

class Delete extends Component {
    componentWillMount() {
        this.props.deleteData();
    }
    render() {
        return (
            <div>Delete component</div>
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.deleteData.data;
    return {data}
}

export default connect(mapStateToProps, { deleteData })(Delete);