import React from 'react'
import ExpenseList from './ExpenseList'
import { MdEdit, MdDelete, MdSend } from 'react-icons/md'

export default function ExpenseItem() {
  return (
    <div>
      <ul className='list'>
        <ExpenseList />
      </ul>
      <button className='btn'>
        <MdDelete />
      </button>
    </div>
  )
}
