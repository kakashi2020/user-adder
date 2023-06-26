import React from 'react';
import './ErrorModal.css';
import ReactDOM from 'react-dom';

import Card from "./Card";
import Button from "./Button";

const Backdrop = () =>{
    return <div className="backdrop"/>
};

const Modal = props => {
    return <Card className='modal'>
    <header className="header">
        <h2>{props.title}</h2>
    </header>
    <div className="content">
        <p>{props.message}</p>
    </div>
    <footer className="actions">
        <Button onClick={props.dismissError}>Okay!</Button>
    </footer>
</Card>
}

const ErrorModal = (props) =>{
        return<React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal title={props.title} message={props.message} dismissError={props.dismissError}/>, document.getElementById('overlay-root'))}
            </React.Fragment> 
};

export default ErrorModal;