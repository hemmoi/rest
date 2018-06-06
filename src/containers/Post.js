import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postData} from '../actions/postAction';

class Post extends Component {
    componentWillMount() {
        const data = {
            ensimmäinen: "yksi",
            toinen: "kaksi"
        }
        this.props.postData(data);
    }
    render() {
        return (
            <div>Post component</div>
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.getData.data;
    return {data}
}

export default connect(mapStateToProps, { postData })(Post);