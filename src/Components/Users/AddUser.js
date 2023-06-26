import React, {useState} from 'react';

import './AddUser.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';

const AddUser = props =>{

    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [error, setError] = useState();

    const addNameHandler = event => {
        setNameValue(event.target.value);
    };
    const addAgeHandler = event => {
        setAgeValue(event.target.value);
    };
    
    const errorHandler = () => {
        setError(null);
    };

    const addUserHandler = event => {
        event.preventDefault();
        if (ageValue.trim().length < 1 || nameValue.trim().length < 1){
            setError({
                title: 'Invalid input',
                message: 'Please set valid inputs (non-empty strings)'
            });    
        }
        else if (+ageValue<1){
            setError({
                title: 'Invalid age',
                message: 'Please set a valid age (>0)'
            });
        }
        else {
            props.onAddUsers(nameValue, ageValue);
            setNameValue('');
            setAgeValue('');
        };
        
    };
    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} dismissError={errorHandler}/>}
        <Card className='input'>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={nameValue} onChange={addNameHandler}></input>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' value={ageValue} onChange={addAgeHandler}></input>
                <Button type='submit'>Add user</Button>
            </form>
        </Card>
        </Wrapper>
    );

};


export default AddUser;