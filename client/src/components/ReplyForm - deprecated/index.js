import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REPLY } from '../../utils/mutations.js';

const ReplyForm = ({ thoughtId }) => {

    const [replyBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addReply, { error }] = useMutation(ADD_REPLY);
    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };
    const handleFormSubmit = async event => {
        event.preventDefault();
        
        try {
            await addReply({
              variables: { replyBody, thoughtId },
            });
      
            // clear form value
            setBody('');
            setCharacterCount(0);
          } catch (e) {
            console.error(e);
          }
    };

    return (
        <div>
            <p className={`m-0 ${ characterCount === 280 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className='ml-2'>Something went wrong...</span>}
            </p>
            <form
                className='flex-row justify-center justify-space-between-md align-stretch'
                onSubmit={ handleFormSubmit }
            >
                <textarea
                    placeholder='Leave a reaction to this thought...'
                    value={ replyBody }
                    className='form-input col-12 col-md-9'
                    onChange={ handleChange }
                ></textarea>
                <button className='btn col-12 col-md-3' type='submit'>
                    Submit
                </button>
            </form>

            {error && <div>Something went wrong...</div>}
        </div>
    );
};

export default ReplyForm;