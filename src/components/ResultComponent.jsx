/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './Result.css'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='res-container'> 
        <h1>Result</h1>
        <div className="flex1">
            <div className="heading">
                <h3>You need more practice!!</h3>
            </div>
            <div className="Statement">
                <h1>Your Score is 20%</h1>
            </div>

            <div className="opt1">
                <div className="result">
                    <p>Total Number of Questions</p>
                    <p>15</p>
                </div>
                <div className="result">
                <p>Total Number of Questions</p>
                    <p>15</p>
                </div>
                <div className="result">
                <p>Total Number of Questions</p>
                    <p>15</p>
                </div>
                <div className="result">
                <p>Total Number of Questions</p>
                    <p>15</p>
                </div>
            </div>

        </div>
            <div className='BtnReset'>
                <button className="PlayAgain">Play Again</button>
                <button className="BackHome">Back Home</button>
            </div>
      </div>
    )
  }
}