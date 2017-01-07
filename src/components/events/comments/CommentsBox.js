import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../../../services/thunkReducer'

class CommentsBox extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getComments());
    }

    render() {
        const {comments} = this.props;
        
        if (typeof comments === 'object') {
            var commentLines = comments.map((comment) => {
                return (<div>{comment.text}</div>);
            });
        } else {
            var commentLines = () => { return (<span>Načítám</span>) };
        }

        return (
            <div className="commentsBox">
                {commentLines}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        comments: store.eventReducer.comments
    }
};

CommentsBox = connect(
    mapStateToProps
)(CommentsBox);

export default CommentsBox;