import './ExpenseItem.css';
import React, {useState} from 'react';
import Card from './../UI/Card'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    const [title, setTitle] =useState(props.title);

   // let title= props.title;

    const clickHandler =() => {
        setTitle("updated!");
        
    };
    return (
    <Card className="expense-item"> 
        <ExpenseDate date = {props.date}/>
        <div className="expense-item__despcription">
            <h2> {title}</h2>
        </div>
        <div className="expense-item__price">
             ${props.amount}
        </div>
        <button onClick={clickHandler}> change title</button>
    </Card>
    );
}

export default ExpenseItem;