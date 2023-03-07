import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
  render() {
    return (
      <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div style={{color:"white"}}>FINCONTROL-The Income Expense Tracker</div>
            </nav>
        </header>
      </div>
    )
  }
}
