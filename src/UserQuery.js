import React from 'react';
import './App.css';

export default function UserQuery( {idQRef, handleQuery}) {

    return (
        <div>
            <form>
                <input type='text' ref={idQRef} placeholder='optional ID filter' />
                <button type='button' onClick={handleQuery}>Query</button>
            </form>
        </div>
    )
}