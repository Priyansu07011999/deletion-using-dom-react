import "./ExpensesItem.css";
import ExpenseDate from './ExpenseDate.js'
import Card from '../UI/Card.js';

function ExpenseItem(props) {
  
  const deletion = () => {
    const card = document.querySelector('.expense-item');
    card.parentNode.removeChild(card);
  };


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>

      <button onClick={deletion}>Delete Expenses</button>
    </Card>
  );
}

export default ExpenseItem;