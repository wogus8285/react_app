import React, { Component } from 'react'
// import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdEdit, MdDelete, MdSend } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className='list'>
          <ExpenseItem />
        </ul>
        <button className='btn'>
          <MdDelete />
        </button>
      </>
    )
  }
}

export default ExpenseList
