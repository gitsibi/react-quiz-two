/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './Home.css'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='main-container'>
        <div className="play">
            <h1>Quiz App</h1>
            <button className='PlayBtn'>Play</button>    
        </div>        
      </div>
    )
  }
}