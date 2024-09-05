import React from 'react';
import './App.css';

export default function UserForm( {idRef, nameRef, addressRef, countryRef, handleInsert, handleUpdate}) {

    return (
        <div>
            <form>
            <div>ID<input ref={idRef} type='text' readonly='true' /></div>
            <div>Name<input ref={nameRef} type='text' /></div>
            <div>Address<input ref={addressRef} type='text' /></div>
            <div>Country<input ref={countryRef} type='text' /></div>
            <div><button type='button' onClick={handleInsert}>New</button>
            <button type='button' onClick={handleUpdate}>Update</button></div>
            </form>
        </div>
    )
}