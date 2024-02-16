import React, { Component } from 'react'
// import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdEdit, MdDelete, MdSend } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    console.log(this.props.initialExpenses);
    return (
      <>
        <ul className='list'>
          {this.props.initialExpenses.map(expense => {
            return(
              <ExpenseItem
                expense= {expense}
                key={expense.id}
                handleDelete={this.props.handleDelete}
              />
            )
          })}
         
        </ul>
        <button
          className='btn'
        
        >
          <MdDelete />
        </button>
      </>
    )
  }
}

export default ExpenseList
