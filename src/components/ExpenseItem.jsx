import React, { Component } from 'react'
import { MdEdit, MdCreate, MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'></span>
          <span className='amount'>원</span>
        </div>
        <div>
          <button className='edit-btn'>수정</button>
          <button className='clear-btn'>삭제</button>
        </div>
      </li>
    )
  }
}

export default ExpenseList
