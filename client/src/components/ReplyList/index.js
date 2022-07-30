import React from 'react';
import { Link } from 'react-router-dom';

const ReplyList = ({ replies }) => {
    return (
        <div className='card mb-3'>
            <div className='card-header'>
                <span className='text-light'>Replies</span>
            </div>
            <div className='card-body'>
                { replies &&
                    replies.map(replies => (
                        <p className='pill mb-3' key={replies._id}>
                            { replies.reactionBody} {'// '}
                            <Link
                                to={`/profile/${ replies.username }`}
                                style={ { fontWeight: 700 } }
                            >
                                { replies.username } on { replies.createdAt }
                            </Link>
                        </p>  
                    ))
                }
            </div>
        </div>
    );
};

export default ReplyList;