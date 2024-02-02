import './App.css'
//
import './components/ExpenseForm'
import './components/ExpenseItem'
import './components/ExpenseList'
//
import React, { Component } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseItem from './components/ExpenseItem'

export class App extends Component {
  render() {
    return (
      <main className='main-container'>
        <h1>예산 계산기</h1>
        <div className='ExpenseForm'>
          <ExpenseForm />
        </div>
        <div className='style2'>
          <ExpenseItem />
        </div>
        <div className='style3'>
          <p>
            총지출 :<span>원</span>
          </p>
        </div>
      </main>
    )
  }
}

export default App
